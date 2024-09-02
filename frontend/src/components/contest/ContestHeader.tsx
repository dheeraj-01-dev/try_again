"use client";
import React, { useState } from "react";
import styles from "./styles/contestHeader.module.css";

const ContestHeader = ({
  upcomingBattle,
  completedBattle,
}: {
  upcomingBattle?: React.ReactElement;
  completedBattle?: React.ReactElement;
}) => {
  const [upcomingPage, setUpcomingPage] = useState(true);

  const handlePageToggle = (isUpcoming: boolean) => {
    setUpcomingPage(isUpcoming);
  };

  return (
    <div className={styles.contestContainer} id="pageContainer">
      <div className={styles.pageHeadlines}>
        <div
          className={styles.headlineText}
          onClick={() => handlePageToggle(true)}
        >
          UPCOMING
        </div>
        <div
          className={styles.headlineText}
          onClick={() => handlePageToggle(false)}
        >
          COMPLETED
        </div>
      </div>
      <div
        className={`${styles.highLighter} ${
          !upcomingPage && styles.highLightCompleted
        } contestHighLighter`}
      ></div>
      <div className={styles.contestPageContainer}>
        {upcomingPage ? (
          <div className={styles.contestPages}>{upcomingBattle}</div>
        ) : (
          <div className={styles.contestPages}>{completedBattle}</div>
        )}
      </div>
    </div>
  );
};

export default ContestHeader;
