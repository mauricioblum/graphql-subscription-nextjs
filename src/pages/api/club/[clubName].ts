import { NextApiRequest, NextApiResponse } from "next";

const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        "User-Agent": userAgent,
      },
    };

    const {
      query: { clubName },
    } = req;

    const parsedClubName = clubName
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    fetch(
      `https://www.zerozero.pt/search.php?inputString=${parsedClubName}`,
      options
    )
      .then(res => res.text())
      .then(html => {
        const dom = new JSDOM(html);

        const img: HTMLImageElement = dom.window.document.querySelector(
          "#page_header > div.top > div.zz-likeheader-wrapper > div > div > a > img"
        );
        const imgSrc = `https://www.zerozero.pt/${img.src}`;

        fetch(imgSrc)
          .then(response => response.blob())
          .then((blob: Blob) => {
            res.setHeader("Content-Type", "image/png");
            res.statusCode = 200;
            const stream = blob.stream();
            res.send(stream);
            return resolve(stream);
          })
          .catch(err => {
            res.json(err);
            res.status(405).end();
            reject(err);
          });
      });
  });
}
