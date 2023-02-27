import { useState } from "react";
import "./PhotoListenQuestion.scss";
function PhotoListenQuestion({ question }) {
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="question-wrapper">
      <p>Nguồn câu hỏi: {question.source ? question.source : "Không rõ"}</p>
      <div className="question-content">
        <img
          className="question-img"
          src={
            question
              ? question.img
              : "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/161252_03012012_593148.jpg"
          }
          alt=""
        />

        <audio
          controls
          preload="auto"
          src={
            question
              ? question.audio
              : "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/161252_03012012_593148.jpg"
          }
        ></audio>

        <ul className="answer-list">
          {question &&
            question.answers &&
            question.answers.map((answer, index) => {
              return (
                <li
                  key={index}
                  className={"answer-item"}
                  style={
                    answer.isResult && showResult
                      ? { backgroundColor: "green" }
                      : {}
                  }
                >
                  <div className="answer-item__wrapper">
                    <button
                      onClick={() => {
                        setShowResult(!showResult);
                      }}
                    >
                      {answer.content}
                    </button>
                    <p>{answer.subContent}</p>
                  </div>
                  {showResult && <p>Translate: {answer.translate}</p>}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default PhotoListenQuestion;
