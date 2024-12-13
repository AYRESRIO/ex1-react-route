import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Inscrição() {
  return (
    <main>
      <section id="ms-home-section">
        <div className="ms-container">
          <Card pagina="Página de inscrição" />
          <Link to={"/promocao"}>
            <Button name="Ver promoção" />
          </Link>
        </div>
      </section>
    </main>
  );
}
