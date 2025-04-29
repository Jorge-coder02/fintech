import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  return (
    <div>
      <Header></Header>
      {children} {/* Contenido página */}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
