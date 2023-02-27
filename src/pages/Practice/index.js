import { useEffect } from "react";
import PhotoListenQuestion from "../../components/components/PhotoListenQuestion";
import { photoListenQuestion } from "../../stores/data";
import "./Practice.scss";
function Practice() {
  const questionItems = document.getElementsByClassName("question-item");
  useEffect(() => {
    // let questionItem = document.querySelector(".question-item");
    if (questionItems && questionItems.length > 0) {
      let questionItemShow = document.querySelector(".question-item.show");
      if (!questionItemShow) questionItems[0].classList.add("show");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="practice-wrapper">
      <div className="practice-board-question">
        <ul className="board-question-list">
          {photoListenQuestion.map((question, index) => {
            return (
              <li className="board-question-item" key={question.id}>
                <button
                  onClick={() => {
                    let questionItemShow = document.querySelector(
                      ".question-item.show"
                    );
                    if (questionItemShow)
                      questionItemShow.classList.remove("show");
                    questionItems[index].classList.add("show");
                  }}
                >
                  {index + 1}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="practice-content">
        <h1>Câu hỏi lắng nghe hình ảnh</h1>
        <ul>
          {photoListenQuestion.map((question, index) => {
            return (
              <li className="question-item" key={question.id}>
                <h2>Câu hỏi {index + 1}</h2>
                <PhotoListenQuestion question={{ ...question }} />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button>Bỏ qua</button>
        <button>Trở lại</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Practice;
