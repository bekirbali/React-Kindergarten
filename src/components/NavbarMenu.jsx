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
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span
            className={`self-center whitespace-nowrap text-xl font-semibold text-[#f718e5]`}
          >
            Kindergarten
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            // style={{ color: scrolled ? "#F7CA18" : "" }}
            className=" text-[17px] flex items-center h-full text-[#f718e5]"
            href="/"
          >
            Ana Sayfa
          </Navbar.Link>
          <Navbar.Link
            // style={{ color: scrolled ? "#F7CA18" : "" }}
            className=" text-[17px] flex items-center h-full text-[#f718e5]"
            href="about"
          >
            Hakkımda
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
