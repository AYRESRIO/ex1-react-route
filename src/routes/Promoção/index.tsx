import Header from "../../components/Header";
import PromoçãoCard from "../../components/Cards/PromoçãoCard";
import Button from "../../components/Button";

export default function Promoção() {
  return (
    <>
      <Header />
      <main>
        <section id="ms-home-section">
          <div className="ms-container">
            <PromoçãoCard />
            <Button name="Quero participar" />
          </div>
        </section>
      </main>
    </>
  );
}
