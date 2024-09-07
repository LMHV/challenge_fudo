import Fudo from "../assets/svgs/fudo.svg";

export function Header() {
  return (
    <header className="w-full bg-white backdrop-blur-sm h-24 sm:h-14 px-28 shadow-md">
      <div className=" h-full flex flex-col sm:flex-row sm:justify-between items-center text-sm text-primary">
        <a href="/" >
          <img src={Fudo} alt="" className="w-[90px]"/>
        </a>
        <nav className="flex flex-row gap-8 text-base">
          <a href="/" className="">
            Inicio
          </a>
          <a href="/" className="">
            Nosotros
          </a>
        </nav>
      </div>
    </header>
  );
}
