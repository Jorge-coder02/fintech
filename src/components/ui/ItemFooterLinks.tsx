import { Link } from "react-router-dom";

type EnlacesType = {
  [textoEnlace: string]: string; // Key: texto del enlace, Value: ruta
};
type Props = { titulo: string; enlaces: EnlacesType };

function ItemFooterLinks({ titulo, enlaces }: Props) {
  return (
    <nav className="flex flex-col justify-center items-center lg:items-start py-4 gap-y-3">
      <h2 className="text-xl font-bold underline decoration-[#05a69f] decoration-2 underline-offset-8">
        {titulo}
      </h2>
      <div className="flex flex-col justify-center items-center lg:items-start gap-y-1">
        {Object.entries(enlaces).map(([textoEnlace, ruta]) => (
          <Link
            key={textoEnlace}
            to={ruta}
            className="text-lg text-[#c0c0c0] hover:text-[#05a69f]"
          >
            {textoEnlace}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default ItemFooterLinks;
