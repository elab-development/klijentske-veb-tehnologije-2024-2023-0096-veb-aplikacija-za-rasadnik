type Props = {
  params: {
    id: string;
  };
};

export default function PojedinacanProizvod({ params }: Props) {
  return <div>Proizvod ID: {params.id}</div>;
}