import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Apartmani Irma"
            width={60}
            height={60}
          />

          <div>
            <h1 className="text-xl font-bold text-sky-900">
              Apartmani Irma
            </h1>

            <p className="text-sm text-gray-500">
              Baška Voda
            </p>
          </div>
        </div>

        {/* Izbornik */}
        <nav>
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="hover:text-sky-700 cursor-pointer">Početna</li>
            <li className="hover:text-sky-700 cursor-pointer">Apartmani</li>
            <li className="hover:text-sky-700 cursor-pointer">O nama</li>
            <li className="hover:text-sky-700 cursor-pointer">Rent</li>
            <li className="hover:text-sky-700 cursor-pointer">Kontakt</li>
          </ul>
        </nav>

        {/* Gumb */}
        <button className="bg-sky-700 hover:bg-sky-800 text-white px-5 py-3 rounded-full transition">
          Rezervirajte
        </button>

      </div>
    </header>
  );
}
