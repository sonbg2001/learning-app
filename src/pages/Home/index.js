import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="/practice">Luyện tập với câu hỏi listen-photo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
