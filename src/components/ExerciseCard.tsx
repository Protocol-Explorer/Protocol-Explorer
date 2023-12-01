import React, { useState } from "react";
import styles from "@/styles/ExerciseCard.module.css";
import Editor from "@monaco-editor/react";

const ExerciseCard: React.FC = () => {
  type QuizData = {
    question: string;
    answer: string;
  };

  const [isExerciseStarted, setExerciseStarted] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [question, setQuestion] = useState<QuizData | null>(null);
  const [allQuestions, setAllQuestions] = useState<QuizData[] | []>([]);
  const [currentIndex, setCurrentIndex] = useState<Number>(0);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData: QuizData[] = await response.json();
      console.log("hello question");
      console.log({ jsonData });
      setAllQuestions(jsonData);
      setQuestion(jsonData[0]);
      setExerciseStarted(true);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  function nextQuestion() {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;
      //@ts-ignore
      if (prevIndex < allQuestions.length - 1) {
        //@ts-ignore
        newIndex = prevIndex + 1;
      }

      // Set the question using the new index.
      //@ts-ignore
      setQuestion(allQuestions[newIndex]);
      setRevealAnswer(false);
      return newIndex;
    });
  }

  function previousQuestion() {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;
      //@ts-ignore
      if (prevIndex > 0) {
        //@ts-ignore
        newIndex = prevIndex - 1;
      }

      // Set the question using the new index.
      //@ts-ignore
      setQuestion(allQuestions[newIndex]);
      setRevealAnswer(false);
      return newIndex;
    });
  }

  if (!isExerciseStarted) {
    return (
      <div className={styles.cardContainer}>
        <button className={styles.cardButton} onClick={fetchData}>
          Start Exercise
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.question}>{question?.question}</div>
      {revealAnswer && (
        <Editor
          width="100%"
          height="67%"
          language="sol"
          theme="vs-dark"
          value={question?.answer}
          options={{
            wordWrap: "on",
          }}
        />
      )}
      <button
        className={styles.cardButton}
        onClick={() => setRevealAnswer(true)}
      >
        Reveal Answer
      </button>
      {/* @ts-ignore*/}
      {currentIndex < allQuestions.length - 1 && (
        <button className={styles.cardButton} onClick={nextQuestion}>
          Next Question
        </button>
      )}
      {currentIndex !== 0 && (
        <button className={styles.cardButton} onClick={previousQuestion}>
          Previous Question
        </button>
      )}
    </div>
  );
};

export default ExerciseCard;
