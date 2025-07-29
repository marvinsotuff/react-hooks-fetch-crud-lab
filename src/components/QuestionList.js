import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

// QuestionList.js
function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(id) {
    setQuestions(questions.filter((question) => question.id !== id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions(questions.map((question) => 
      question.id === updatedQuestion.id ? updatedQuestion : question
    ));
  }

  return (
    <section>
      <h1>Question List</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
            key={question.id} 
            question={question} 
            onDeleteQuestion={handleDeleteQuestion} 
            onUpdateQuestion={handleUpdateQuestion} 
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
