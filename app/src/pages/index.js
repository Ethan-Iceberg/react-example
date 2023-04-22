import "../css/main.css";
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <div className="main-container">
        <Link to={"./dashboard"}>
          <div className="font-size">
            Welcome to React Examples
          </div>
        </Link>
      </div>
    </>
  )
}

export default Index;
