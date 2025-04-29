type Props = {
  icono: React.ReactElement;
  herr_texto: string;
  cuad_texto: string;
  cuad_enlace: string;
  color: string;
  clases?: string;
};

function ItemHerramienta({
  icono,
  herr_texto,
  cuad_texto,
  cuad_enlace,
  color,
  clases,
}: Props) {
  return (
    <>
      {/* HERRAMIENTA */}
      <div
        className={`flex flex-col xl:w-[30%] gap-y-10 xl:gap-y-20 px-4 items-center justify-center
             ${clases}`}
      >
        {/* Cont 1 */}
        <div className="flex flex-col  items-center gap-y-4 justify-center text-center">
          <span>{icono}</span>
          <p>{herr_texto}</p>
        </div>
        {/* Cont 2 */}
        <div
          className={`flex flex-col justify-center items-center text-center 
            ${color} text-text_primary w-[230px] h-[200px]  ${clases}`}
        >
          <a className="underline hover:opacity-75" href={cuad_enlace}>
            {cuad_texto}
          </a>
        </div>
      </div>
    </>
  );
}

export default ItemHerramienta;
