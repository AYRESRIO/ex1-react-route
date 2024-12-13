import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Home() {
  return (
    <main>
      <section id="ms-home-section">
        <div className="ms-container">
          <Card pagina="Página inicial" />
          <Button name="Ver promoção" />
        </div>
      </section>
    </main>
  );
}
