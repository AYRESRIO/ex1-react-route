import Header from "../../components/Header";
import InicioCard from "../../components/Cards/InicioCard";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="ms-home-section">
          <div className= "ms-container">
            <InicioCard />
            <Button name="Ver promoção" />
          </div>
        </section>
      </main>
    </>
  );
}
