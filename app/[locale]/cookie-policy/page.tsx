export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900">
        Politika kolačića
      </h1>

      <div className="prose prose-slate mt-10 max-w-none">
        <p>
          Ova web stranica koristi kolačiće kako bi omogućila ispravan rad te,
          uz vaš pristanak, prikupljala anonimne statističke podatke.
        </p>

        <h2>Nužni kolačići</h2>

        <p>
          Potrebni su za osnovno funkcioniranje stranice.
        </p>

        <h2>Analitički kolačići</h2>

        <p>
          Koristimo Google Analytics isključivo nakon vašeg pristanka.
        </p>

        <h2>Kako promijeniti odluku?</h2>

        <p>
          Kolačiće možete obrisati u postavkama svog preglednika ili ponovno
          odabrati postavke kolačića na ovoj web stranici.
        </p>
      </div>
    </main>
  );
}