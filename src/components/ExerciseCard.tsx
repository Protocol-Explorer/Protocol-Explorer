import React, { useState } from 'react';
import styles from '@/styles/ExerciseCard.module.css';
import Editor from "@monaco-editor/react";

const ExerciseCard: React.FC = () => {

  type QuizData = {
    question: string;
    answer: string;
  };

  const [isExerciseStarted, setExerciseStarted] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [data, setData] = useState<QuizData | null>(null);
  const [question, setQuestion] = useState<QuizData | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData: QuizData = await response.json();
      setData(jsonData);
      setRevealAnswer(true)
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };
  const fetchQuestion = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData: QuizData = await response.json();
      setQuestion(jsonData);
      setExerciseStarted(true)
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

    const codeString = `
    function addNumbers (uint256 _a, uint256 _b) public pure returns (uint256) {
      return _a + _b; 
    }
    `;

    if (!isExerciseStarted) {
        return (
            <div className={styles.cardContainer}>
                <button className={styles.cardButton} onClick={fetchQuestion}>Start Exercise</button>
            </div>
        );
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.question}>
                {question?.question}
            </div>
            {revealAnswer && 
                <Editor
                width="100%"
                height="100%"
                language="sol"
                theme="vs-dark"
                value={codeString}
                options={{
                  wordWrap: "on"
                }}
              />
            }
            <button className={styles.cardButton} onClick={fetchData}>Reveal Answer</button>
            <button className={styles.cardButton}>Next Question</button>
        </div>
    );
}

export default ExerciseCard;
