type Props = {
  titulo: string;
  descripcion?: string;
  caracteristica1?: string;
  caracteristica2?: string;
  caracteristica3?: string;
};

function ItemServicio({
  titulo,
  descripcion,
  caracteristica1,
  caracteristica2,
  caracteristica3,
}: Props) {
  return (
    <div className="shadow-xl lg:shadow-md lg:bg-gray-50 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-tertiary mb-3">{titulo}</h3>
      <p className="text-gray-700">{descripcion}</p>
      <ul className="mt-3 list-disc pl-5 text-gray-600">
        <li>{caracteristica1}</li>
        <li>{caracteristica2}</li>
        <li>{caracteristica3}</li>
      </ul>
    </div>
  );
}

export default ItemServicio;
