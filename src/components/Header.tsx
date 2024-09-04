export function Header() {


    return (
      <header className="w-full bg-gray-900 h-28 sm:h-14 px-16">
          <div className=" h-full flex flex-col sm:flex-row sm:justify-between items-center text-sm text-gray-400">
            <h1 className="text-3xl text-primary py-4 sm:py-0">
             DELI
            </h1>
            <nav className="flex gap-6">
              <span className="">Inicio</span>
              <span className="">Nosotros</span>
            </nav>
          </div>
      </header>
    );
  }
  