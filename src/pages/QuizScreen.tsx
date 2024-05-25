import { useState } from "react";

const QuizScreen = () => {
  const question = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);



  return (
    <>
    <div className='p-2'>
      <div className='container'>
        <div className='p-2 rounded bg-light mb-2 textcenter'>
          <p>
            Question {currentIndex + 1}/{question.lenght}
          </p>
          <h4>{question[currentIndex].question}</h4>
        </div>
        <div className='row'>
          {question[currentIndex].options.map((x, i) =>(
            <div key={i}className='col-md-4 p-2'>
              <button onClick={() =>{
                setcurrentIndex(currentIndex +1);
              }}
              className='btn btn-success'
              >
                {x}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <h2>what is html</h2>
    <ul>
      <li>hyper text markup language]</li>
      <li>hyper text making language</li>
      <li>hyper tech markup language</li>
    </ul>
      <h2>what is css </h2>
      <ul>
        <li>cascading style shoes</li>
        <li>cascading style sheets</li>
        <li>cascading style</li>
        <li>candy style sheet</li>
      </ul>
      </>
  );
};

export default QuizScreen;
