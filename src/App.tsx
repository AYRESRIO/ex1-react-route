import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ClientHome from "./routes/ClientHome";
import Home from "./routes/ClientHome/Home";
import Promoção from "./routes/ClientHome/Promoção";
import Inscrição from "./routes/ClientHome/Inscrição";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Home />} />
          <Route path="casa" element={<Home />} />
          <Route path="promocao" element={<Promoção />} />
          <Route path="inscricao" element={<Inscrição />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
