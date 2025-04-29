type Props = { clases?: string; icono?: React.ReactNode };

function ItemFooterSocials({ clases, icono }: Props) {
  return (
    <div className="flex justify-center gap-x-4">
      <a
        className={`${clases} rounded-lg p-2  transition duration-200`}
        href="https://www.facebook.com/es/growbit_es"
      >
        {icono}
      </a>
    </div>
  );
}

export default ItemFooterSocials;
