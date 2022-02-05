import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const quizData = [
    {
      question: "Capital City of Germany",
      answer1: "Berlin",
      answer2: "Paris",
      answer3: "London",
      answer4: "Hamburg",
      correct: "Berlin",
    },
    {
      question: "Fastest Animal on Earth",
      answer1: "Lion",
      answer2: "Cheetah",
      answer3: "Elephant",
      answer4: "Giraffe",
      correct: "Cheetah",
    },
    {
      question: "Highest Mountain in India",
      answer1: "Zugspitze",
      answer2: "Kangchenjunga",
      answer3: "Nanda Devi",
      answer4: "Jongson Peak",
      correct: "Kangchenjunga",
    },
    {
      question: "Longest River in New Zealand",
      answer1: "Nelson",
      answer2: "Mackenzie",
      answer3: "Waikato",
      answer4: "Tongariro",
      correct: "Waikato",
    },
  ];

  const [question, setQuestion] = useState([]);
  const [answer1, setAnswer1] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState([]);
  const [answer4, setAnswer4] = useState([]);
  const [correctAnswer, setCorrect] = useState([]);
  const [pageNum, setPage] = useState(1);

  // for (let i = 0; i < quizData.length; i++) {
  //   setCorrect([...correctAnswer, quizData[i].correct]);
  // }
  // console.log(quizData.length);

  useEffect(() => {
    setQuestion(quizData.map((q) => q.question));
    setAnswer1(quizData.map((q) => q.answer1));
    setAnswer2(quizData.map((q) => q.answer2));
    setAnswer3(quizData.map((q) => q.answer3));
    setAnswer4(quizData.map((q) => q.answer4));
    setCorrect(quizData.map((q) => q.correct));
  }, []);
  useEffect(() => {
    console.log(correctAnswer);
    console.log(question);
  }, [correctAnswer]);

  const Controls = () => {
    if (pageNum == 1) {
      return <button onClick={setPage(pageNum + 1)}>Next</button>;
    } else if (pageNum >= 2 && pageNum !== question.length) {
      return (
        <>
          <button onClick={setPage(pageNum + 1)}>Next</button>
          <button>Previous</button>
        </>
      );
    } else {
      return <button onClick={setPage(pageNum + 1)}>Previous</button>;
    }
  };

  return (
    <div className="App">
      <h2>Please answer to these questions</h2>
      <section>
        <h3></h3>
        <label htmlFor="">
          1<input type="radio" />
        </label>
        <label htmlFor="">
          2<input type="radio" />
        </label>
        <label htmlFor="">
          3<input type="radio" />
        </label>
        <label htmlFor="">
          4<input type="radio" />
        </label>
        <Controls />
      </section>
    </div>
  );
}

export default App;
