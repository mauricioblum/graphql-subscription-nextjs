import React from "react";

import styles from "../../styles/components/MatchHeader.module.css";

export interface MatchHeaderProps {
  teams: {
    home: string;
    away: string;
  };
  score: {
    home: number;
    away: number;
  };
}

const MatchHeader: React.FC<MatchHeaderProps> = ({ teams, score }) => {
  return (
    <header className={styles.container}>
      <div className={styles.scoreContainer}>
        <div className={styles.clubContainer}>
          <p className={styles.club}>{teams.home}</p>
          <img
            className={styles.clubImage}
            src={`http://localhost:3000/api/club/${teams.home}`}
            width={50}
            height={50}
            alt={teams.home}
          />
          <span className={styles.score}>{score.home}</span>
        </div>

        <span className={styles.cross}>x</span>

        <div className={styles.clubContainer}>
          <span className={styles.score}>{score.away}</span>
          <img
            className={styles.clubImage}
            src={`http://localhost:3000/api/club/${teams.away}`}
            width={50}
            height={50}
            alt={teams.home}
          />
          <p className={styles.club}>{teams.away}</p>
        </div>
      </div>
    </header>
  );
};

export default MatchHeader;
