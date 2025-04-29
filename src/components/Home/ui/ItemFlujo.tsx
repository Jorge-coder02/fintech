interface ItemFlujoProps {
  icono: React.ReactElement;
  titulo: string;
  texto1: string;
  texto2?: string;
  delay?: number;
}
function ItemFlujo({ delay, icono, titulo, texto1, texto2 }: ItemFlujoProps) {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={delay?.toString()}
      className="flex-1 flex flex-col items-center min-h-[180px]"
    >
      {/* Bloque superior (icono + título) */}
      <div className="flex flex-col gap-y-2 items-center h-[120px]">
        {icono}
        <h3 className="text-xl font-semibold">{titulo}</h3>
      </div>
      {/* Bloque inferior (textos) */}
      <div className="flex flex-col justify-start items-center text-center flex-grow-0">
        {texto1 && <span className="block min-h-[24px]">{texto1}</span>}
        {texto2 && <span className="block min-h-[24px]">{texto2}</span>}
      </div>
    </div>
  );
}

export default ItemFlujo;
