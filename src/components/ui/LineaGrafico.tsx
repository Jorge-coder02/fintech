function LineaGrafico() {
  return (
    <>
      {/* *Visual* Línea gráfico */}
      <div className="hidden lg:block absolute -z-20 inset-0 overflow-hidden opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Líneas onduladas (como gráficos de trading) */}
          <path
            d="M0 450Q150 300 300 450T600 300T900 500T1200 400"
            stroke="#888"
            fill="none"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          {/* Manchas tipo "bursátiles" (irregulares) */}
          <path
            d="M200 200Q250 150 300 200T400 100Q450 50 500 150T600 200"
            fill="#DDD"
            opacity="0.15"
          />
        </svg>
      </div>
    </>
  );
}

export default LineaGrafico;
