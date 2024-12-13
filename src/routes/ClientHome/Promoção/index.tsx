import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promoção() {
  return (
    <main>
      <section id="ms-home-section">
        <div className="ms-container">
          <Card pagina="Página de promoção" />
          <Link to={"/inscricao"}>
            <Button name="Quero participar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
