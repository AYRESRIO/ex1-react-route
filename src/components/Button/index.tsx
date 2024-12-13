type Props = {
  name: string;
};

export default function Button({ name }: Props) {
  return <div className="ms-btn">{name}</div>;
}
