import Header from '@/components/Header';
import { getPageBySlug, renderPortableText } from '@/sanity/lib/getPage'

export default async function Konsultaatiot() {
  const page = await getPageBySlug('konsultaatiot')
  const title = page?.title || 'Sparraus ja konsultaatio'
  const content = page?.content

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {content ? renderPortableText(content) : (
            <>{/*
            <p className="text-lg mb-6">
              Pulmien ja kysymysten kanssa ei tarvitse jäädä yksin.
            </p>

            <p className="text-lg mb-6">
              Tarjoan sparraus- ja konsultaatiopalvelua asiakastyötä tekeville ammattilaisille sekä esihenkilöille. 
              Konsultaatio on ulkopuolista asiantuntija-apua, jonka tavoitteena on tukea, selkeyttää ja vahvistaa 
              työn suuntaa ja laatua.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konsultointi voi kohdistua esimerkiksi:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>asiakastyöhön ja asiakasprosesseihin</li>
              <li>työn organisointiin ja menetelmävalintoihin</li>
              <li>vaikuttavuuden arviointiin ja mittausmenetelmiin</li>
            </ul>

            <p className="text-lg mb-6">
              Se voi olla kertaluonteinen keskustelu tietystä asiasta tai ilmiöstä, tai pidempikestoinen 
              sparraus- ja valmennusprosessi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Asiantuntijuusalueitani ovat:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Lastensuojelutyö</li>
              <li>Seksologinen ja vähemmistöerityinen työ</li>
              <li>Yhdenvertaisuus- ja tasa-arvosuunnittelu</li>
              <li>Vaikuttavuuden arviointi ja mittausmenetelmät</li>
              <li>Terapeuttiset menetelmät</li>
              <li>Rohkea ja osallistava johtaminen</li>
              <li>Asiakasprosessien johtaminen</li>
              <li>Strateginen työ ja suunnittelu</li>
              <li>Kehittäminen osallistavin menetelmin</li>
            </ul>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm mt-8 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Hinnoittelu</h2>
              <p className="text-lg mb-4">Sparrauksen ja konsultaation hinta sovitaan aina tilaajan kanssa niiden sisällön, keston, aihealueen ja mahdollisten matkakulujen perusteella.</p>

              <h3 className="text-xl font-medium mt-4 mb-2">Konsultaatio</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Yksilökonsultaatio — 100 €/60 min</li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2">Sparraus</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Sparrauskeskustelu, yksilö — 100 €/60 min</li>
                <li>Sparrauskeskustelu, ryhmä (max 7 hlö) — 300 €/60 min</li>
                <li>Sparrauskeskustelu, ryhmä (enemmän kuin 7 hlö) — 400 €/60 min</li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2">Asiakirjan tai tuotoksen kommentointi</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Suppea — 80 €/asiakirja, tuotos</li>
                <li>Laaja — 350 €/asiakirja, tuotos</li>
              </ul>
            </section>

            */}</>
          )}
        </div>
      </main>
    </div>
  );
}
