import Header from "@/components/Header";

export default function Koulutukset() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">
          Koulutukset sosiaali-, terveys- ja kasvatusaloille sekä
          vuorovaikutusammattilaisille
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Tarjoan monipuolisia koulutuksia, jotka suunnitellaan aina yhdessä
            tilaajan kanssa vastaamaan juuri teidän tarpeitanne. Koulutukset
            voivat olla luentomuotoisia tai osallistavia työpajoja, joissa
            harjoitellaan ja keskustellaan aktiivisesti. Koulutus voi olla myös
            näiden yhdistelmä.
          </p>

          <p className="text-lg mb-6">
            Katso lisää substanssiosaamisestani ansioluettelostani (linkki
            ansioluetteloon).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Aikaisempia koulutusteemoja
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Kiintymys- ja suhdekeskeinen työ lastensuojelussa</li>
            <li>Vuorovaikutus asiakastyössä</li>
            <li>Asiakassuhde sosiaalihuollossa</li>
            <li>Sensitiivinen kohtaaminen</li>
            <li>Yhdenvertaisuus- ja tasa-arvosuunnittelu</li>
            <li>Terapeuttinen ja korjaava työote</li>
            <li>Kirjaaminen sosiaalihuollossa</li>
            <li>Lapsen ja nuoren kehityksen näkökulmat sijaishuollossa</li>
          </ul>
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Koulutus / Hinnoittelu
            </h2>
            <p className="text-gray-700 mb-4">
              Koulutuksen hinta sovitaan aina tilaajan kanssa koulutuksen
              sisällön, keston, aihealueen ja mahdollisten matkakulujen
              perusteella.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                Normaali tuntihinta on <strong>125–150 €</strong> (+
                matkakulut).
              </li>
              <li>
                Koulutuksen vähimmäiskesto on <strong>90 minuuttia</strong>.
              </li>
              <li>
                Taltioinnista ja esitysoikeuksista peritään erillinen maksu.
              </li>
            </ul>
          </section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Palautetta koulutuksistani
          </h2>
          <blockquote className="border-l-4 pl-4 italic mb-4">
            “Kiitos Mico erittäin hyvästä koulutuksesta ja erityinen kiitos
            esitystyylistäsi. Selkeä ja tauottava puhe.”
          </blockquote>
          <blockquote className="border-l-4 pl-4 italic mb-4">
            “Selkeä puhe ja hyvä esiintyminen.”
          </blockquote>
          <blockquote className="border-l-4 pl-4 italic mb-6">
            “Kouluttajana olet helposti lähestyttävä ja asiantunteva.
            Pohdinnalle on tilaa.”
          </blockquote>
        </div>
      </main>
    </div>
  );
}
