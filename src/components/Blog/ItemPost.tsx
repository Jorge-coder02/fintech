import { Link } from "react-router-dom";

type Props = {
  img: React.ReactNode;
  alt?: string;
  titulo: string;
  descripcion: string;
  caracteristica1?: string;
  caracteristica2?: string;
  caracteristica3?: string;
};

function ItemPost({
  img,
  alt = "imagen",
  titulo,
  descripcion,
  caracteristica1,
  caracteristica2,
  caracteristica3,
}: Props) {
  return (
    <Link
      to={"/blog"}
      className="flex lg:flex-row flex-col gap-y-8 justify-center items-center gap-x-16 shadow-xl lg:shadow-md lg:bg-gray-50 p-6 rounded-xl
      hover:scale-[1.03] transition-all duration-200 ease-in-out [&>*>h3]:hover:text-quaternary [&>*>h3]:transition-all [&>*>h3]:duration-200 [&>*>h3]:ease-in-out"
    >
      {/* Div img (izq.) */}
      <div className="flex-[1] w-48 h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-full" src={`/img/${img}`} alt={alt} />
      </div>

      {/* Div info (der.) */}
      <div className="flex-[2] pl-6">
        <h3 className="text-xl font-bold text-tertiary mb-3">{titulo}</h3>
        <p className="text-gray-700">{descripcion}</p>
        <ul className="mt-3 list-disc pl-5 text-gray-600">
          {caracteristica1 && <li>{caracteristica1}</li>}
          {caracteristica2 && <li>{caracteristica2}</li>}
          {caracteristica3 && <li>{caracteristica3}</li>}
        </ul>
      </div>
    </Link>
  );
}

export default ItemPost;
