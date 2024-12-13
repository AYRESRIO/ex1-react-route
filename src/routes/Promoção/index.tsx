import Header from "../../components/Header";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Promoção() {
  return (
    <>
      <Header />
      <main>
        <section id="ms-home-section">
          <div className="ms-container">
            <Card pagina="Página de promoção" />
            <Button name="Quero participar" />
          </div>
        </section>
      </main>
    </>
  );
}
