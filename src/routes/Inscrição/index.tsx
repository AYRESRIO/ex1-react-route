import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function Inscrição() {
  return (
    <>
      <Header />
      <main>
        <section id="ms-home-section">
          <div className="ms-container">
            <Card pagina="Página de inscrição" />
            <Button name="Ver promoção" />
          </div>
        </section>
      </main>
    </>
  );
}
