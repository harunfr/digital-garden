import React, { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";

import shuffle from "./shuffle";

const Question = (props) => {
  return (
    <div className="quiz-question">
      <div className="quiz-question-body">{props.question}</div>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          type="radio"
          name="answer"
          value={props.answer0}
        />
        <label htmlFor={props.answer0}>{props.answer0}</label>
        <br />
        <input
          onChange={props.handleChange}
          type="radio"
          name="answer"
          value={props.answer1}
        />
        <label htmlFor={props.answer1}>{props.answer1}</label>
        <br />
        <input
          onChange={props.handleChange}
          type="radio"
          name="answer"
          value={props.answer2}
        />
        <label htmlFor={props.answer2}>{props.answer2}</label>
        <br />
        <input
          onChange={props.handleChange}
          type="radio"
          name="answer"
          value={props.answer3}
        />
        <label htmlFor={props.answer3}>{props.answer3}</label>
        <br />
        <button type="submit">Confirm</button>
        <div>Correct Answer for test: {props.correctAnswer}</div>
      </form>
    </div>
  );
};

const Results = (props) => {
  return (
    <div>
      You have answered correctly {props.correctAnswers} of{" "}
      {props.totalQuestions}! Congrats.
    </div>
  );
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [order, setOrder] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const answer = useRef("");
  const score = useRef(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=multiple"
      );
      const fetchedData = await response.json();
      const fetchedQuestions = fetchedData.results;
      // console.log(fetchedQuestions);

      setQuestions(
        fetchedQuestions.map((el) => {
          let answers = shuffle(el.incorrect_answers.concat(el.correct_answer));
          el.answers = answers;
          el.question = el.question.replace(/(&quot\;)/g, '"');
          return el;
        })
      );
    };
    fetchQuestions();
  }, []);

  const handleSubmit = (correctAnswer, e) => {
    e.preventDefault();
    if (answer.current === correctAnswer) {
      score.current++;
    }

    if (order < 3) {
      setOrder(order + 1);
    } else {
      // order === 4
      setIsFinished(true);
      // setOrder(0) // can fetch new questions by using effects
    }
  };

  const handleChange = (e) => {
    // e.preventDefault()
    answer.current = e.target.value;
    console.log(answer.current);
  };

  return (
    <div>
      {/* <div onClick={() => setIsFinished(true)}>Complete All</div> */}
      {!isFinished
        ? questions
            .slice(order, order + 1)
            .map((el) => (
              <Question
                key={uuid()}
                question={el.question}
                answer0={el.answers[0]}
                answer1={el.answers[1]}
                answer2={el.answers[2]}
                answer3={el.answers[3]}
                correctAnswer={el.correct_answer}
                handleSubmit={(e) => handleSubmit(el.correct_answer, e)}
                handleChange={handleChange}
              />
            ))
        : null}
      <div>
        {isFinished ? (
          <Results
            correctAnswers={score.current}
            totalQuestions={questions.length}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;

function App() {
  const [radioValue, setRadioValue] = useState(0);
  const onChange = (ev) => {
    //save your value here with state variable
    console.log(ev.target.value);
    setRadioValue(ev.target.value);
  };

  const onClick = (ev) => {
    //TO-DO SEND/click value
    console.log("radio value ", radioValue);
  };
  return (
    <>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value={1}
          name="priority"
          onChange={onChange}
        />
        <label className="form-check-label">High Priority</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          value={2}
          className="form-check-input"
          name="priority"
          onChange={onChange}
        />
        <label className="form-check-label">Medium Priority</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          value={3}
          className="form-check-input"
          name="priority"
          onChange={onChange}
        />
        <label className="form-check-label">Low Priority</label>
      </div>
      <p>{radioValue}</p>
      <button onClick={onClick}> Click Value </button>
    </>
  );
}
