import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="ms-header">
      <div className="ms-container">
        <Link to={"/"}>
          <h1>MeuSite</h1>
        </Link>
      </div>
    </header>
  );
}
