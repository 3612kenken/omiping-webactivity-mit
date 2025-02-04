import React from "react";
import { useState } from "react";
import  "./style.css";




function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const QuestionAnswers = [
        {
            question: "What is the output of the following Python code?\n\nprint(5 // 2)",
            options: ["2.5", "2", "3", "2.0"],
            correctAnswer: "2",
          },
          {
            question: "Which of the following languages is primarily used for web development?",
            options: ["C++", "Java", "JavaScript", "Python"],
            correctAnswer: "JavaScript",
          },
          {
            question: 'What will be the output of the following JavaScript code?\n\nconsole.log(typeof null);',
            options: ['"null"', '"undefined"', '"object"', '"string"'],
            correctAnswer: '"object"',
          },
          {
            question: "Which of the following is NOT an OOP principle?",
            options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
            correctAnswer: "Compilation",
          },
          {
            question: "What does SQL stand for?",
            options: [
              "Structured Query Language",
              "Sequential Query Language",
              "System Query Language",
              "Standard Query Language",
            ],
            correctAnswer: "Structured Query Language",
          },
          {
            question: "Which data structure uses the LIFO (Last In, First Out) principle?",
            options: ["Queue", "Stack", "Linked List", "Heap"],
            correctAnswer: "Stack",
          },
          {
            question: "What is the default port for HTTP?",
            options: ["21", "80", "443", "25"],
            correctAnswer: "80",
          },
          {
            question: "Which of the following sorting algorithms has the worst-case time complexity of O(n²)?",
            options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
            correctAnswer: "Bubble Sort",
          },
          {
            question: "In Java, which keyword is used to define a subclass?",
            options: ["implements", "extends", "inherits", "super"],
            correctAnswer: "extends",
          },
          {
            question: `What will be the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << x++ << " " << ++x;\n    return 0;\n}`,
            options: ["10 11", "10 12", "11 12", "11 11"],
            correctAnswer: "10 12",
          },

    ]
  

  
    const handleAnswer = (answer) => {
      if (answer === QuestionAnswers[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      if (currentQuestion < QuestionAnswers.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
      }
    };
  
    return (
         
      <div class="main"> 
   
        <div class="main-panel"> 
     
        <form>
        <label for="chk" aria-hidden="true">Quiz App</label>
        <div class="inputBox"> 
        {quizFinished ? (
          <>
             <h2>Quiz finished! Final score: {score}/{QuestionAnswers.length}</h2>
          </>
        ) : (
          <> 
            <h2>Question {currentQuestion + 1}: {QuestionAnswers[currentQuestion].question}</h2>
            {QuestionAnswers[currentQuestion].options.map((answer) => (
              <button key={answer} onClick={() => handleAnswer(answer)}>{answer}</button>
            ))}
            <h2>Score: {score}/{QuestionAnswers.length}</h2> 
           
          </>
        )}
     
        </div>
        </form>
        </div>
        
      </div>

     
    );
  }

export default QuizGame