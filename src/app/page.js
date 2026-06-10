import Image from "next/image";
import Header from "./component/Header";
import Main from "./component/Main";
import Menu from "./component/Menu";
import Seller from "./component/Seller";

export default function Home() {
  return (
    <div>
    <Header/>
    <Main/>
    <Menu/>
    <Seller/>
    </div>
  );
}
