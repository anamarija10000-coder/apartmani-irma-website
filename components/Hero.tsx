export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Tamni sloj preko slike */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Sadržaj */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6">

          <h1 className="text-6xl md:text-8xl font-bold">
            Apartmani Irma
          </h1>

          <p className="mt-6 text-xl md:text-2xl">
            Vaš savršen odmor u Baškoj Vodi
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-semibold transition">
              Rezervirajte odmah
            </button>

            <button className="border-2 border-white hover:bg-white hover:text-sky-900 px-8 py-4 rounded-full font-semibold transition">
              Pogledaj apartmane
            </button>
          </div>

          {/* Ikone pogodnosti */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-lg">

            <div>
              📍
              <p className="mt-2">200 m od plaže</p>
            </div>

            <div>
              🚗
              <p className="mt-2">Besplatan parking</p>
            </div>

            <div>
              📶
              <p className="mt-2">Besplatan WiFi</p>
            </div>

            <div>
              ❄️
              <p className="mt-2">Klima u svim apartmanima</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
