import React, { useState } from "react";
import styles from "@/styles/ExerciseCard.module.css";
import Editor from "@monaco-editor/react";

const ChallengeCard: React.FC = () => {
  const [code, setCode] = useState("Start coding!");

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/validateCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Process the response (if needed)
    } catch (error) {
      console.error('Error submitting code:', error);
    }
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.question}>Start typing below</div>
      <Editor
        width="100%"
        height="80%"
        language="sol"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{ wordWrap: "on" }}
      />
      <button onClick={handleSubmit}>Submit Code</button>
    </div>
  );
};

export default ChallengeCard;



// function addNumber(uint256 _a, uint256 _b) public pure returns (uint256) {
//   return _a + _b
// }