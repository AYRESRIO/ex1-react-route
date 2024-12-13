type Props = {
  pagina: string;
};
export default function Card({ pagina }: Props) {
  return <div className="ms-inicio">{pagina}</div>;
}
