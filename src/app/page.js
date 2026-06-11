import Image from "next/image";
import Header from "./component/Header";
import Main from "./component/Main";
import Menu from "./component/Menu";
import Seller from "./component/Seller";
import TopDeal from "./component/Topdeal";
import Deal from "./component/Deal";
// import Footer from"./component/Footer";

export default function Home() {
  return (
    <div>
    <Header/>
    <Main/>
    <Menu/>
    <Seller/>
    <TopDeal/>
    <Deal/>
    {/* <Footer/> */}
    </div>
  );
}
