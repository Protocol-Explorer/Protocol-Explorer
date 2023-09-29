import React, { useState } from "react";
import styles from "@/styles/ExerciseCard.module.css";
import Editor from "@monaco-editor/react";

const ChallengeCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.question}>Start typing below</div>

      <Editor
        width="100%"
        height="80%"
        language="sol"
        theme="vs-dark"
        value="Start coding!"
        options={{
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default ChallengeCard;
