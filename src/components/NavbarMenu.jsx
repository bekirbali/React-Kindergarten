import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import "../App.css";

export default function NavbarMenu() {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="!bg-transparent test w-full backdrop-blur-md"
      >
        <Navbar.Brand href="/">
          <div className="flex flex-col md:flex-row items-center">
            <img src={logo} className="w-20 h-10" alt="" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-purple-600 text-wrap">
              Esra' nın Etkinlik Havuzu
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            // style={{ color: scrolled ? "#F7CA18" : "" }}
            className=" text-[18px] font-[500] flex items-center h-full text-purple-600"
            href="/"
          >
            Ana Sayfa
          </Navbar.Link>
          <Navbar.Link
            // style={{ color: scrolled ? "#F7CA18" : "" }}
            className=" text-[18px] font-[500] flex items-center h-full text-purple-600"
            href="/about"
          >
            Hakkımda
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
