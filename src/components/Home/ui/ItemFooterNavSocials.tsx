import ItemFooterSocials from "./ItemFooterSocials";
import {
  XIcon,
  FacebookIcon,
  InstagramIcon,
  LinkednIcon,
} from "../../ui/Icons";

function ItemFooterNavSocials() {
  return (
    <nav className="flex flex-col justify-center items-center py-4 lg:mb-12 gap-y-4">
      <h2 className="text-xl font-bold underline decoration-[#05a69f] decoration-2 underline-offset-8">
        Síguenos
      </h2>
      <div className="flex justify-center gap-x-4">
        <ItemFooterSocials
          clases="bg-[#000000] hover:bg-[#2C2C2C]"
          icono={<XIcon />}
        ></ItemFooterSocials>
        <ItemFooterSocials
          clases="bg-[#1152B2] hover:bg-[#166FE5]"
          icono={<FacebookIcon />}
        ></ItemFooterSocials>
        <ItemFooterSocials
          clases="bg-[#C13584] hover:bg-[#D84D94]"
          icono={<InstagramIcon />}
        ></ItemFooterSocials>
        <ItemFooterSocials
          clases="bg-[#1877F2] hover:bg-[#3D8BF2]"
          icono={<LinkednIcon />}
        ></ItemFooterSocials>
      </div>
    </nav>
  );
}

export default ItemFooterNavSocials;
