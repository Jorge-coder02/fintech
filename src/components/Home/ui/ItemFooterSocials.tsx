type Props = { clases?: string; icono?: React.ReactNode; aria_label?: string };

function ItemFooterSocials({ clases, icono, aria_label }: Props) {
  return (
    <div className="flex justify-center gap-x-4">
      <a
        className={`${clases} rounded-lg p-2  transition duration-200`}
        href="https://www.facebook.com/es/growbit_es"
        aria-label={aria_label}
      >
        {icono}
      </a>
    </div>
  );
}

export default ItemFooterSocials;
