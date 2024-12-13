

import Button from "../../components/Button";
import InscriçãoCard from "../../components/Cards/InscriçãoCard";
import Header from "../../components/Header";

export default function Inscrição() {
  return (
    <>
      <Header />
      <main>
        <section id="ms-home-section">
          <div className="ms-container">
            <InscriçãoCard />
            <Button name="Ver promoção" />
          </div>
        </section>
      </main>
    </>
  );
}
