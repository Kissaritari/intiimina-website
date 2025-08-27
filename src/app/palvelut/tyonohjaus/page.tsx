import Header from '@/components/Header';
import RichText from '@/lib/RichText';
import ServiceCards from '@/components/ServiceCards';
import { getPageBySlug } from '@/sanity/lib/getPage'

export default async function Tyonohjaus() {
  const page = await getPageBySlug('tyonohjaus')
  const title = page?.title || 'Tarjoan integratiivista työnohjausta'
  const content = page?.content

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {content ? <RichText value={page.content} /> : (
            <>
            <p className="text-lg mb-6">
              Integratiivinen työnohjaus on työnohjauksen lähestymistapa, jossa yhdistetään eri
              menetelmiä ja teoreettisia viitekehyksiä työn ja ammatillisen kasvun tukemiseksi. Se ei
              nojaa yhteen ainoaan malliin, vaan soveltaa joustavasti esimerkiksi ratkaisukeskeisiä,
              voimavaralähtöisiä, psykodynaamisia ja systeemisiä näkökulmia ohjattavan tarpeiden ja
              tilanteen mukaan.
            </p>

            <p className="text-lg mb-6">
              Tavoitteena on kokonaisvaltainen tuki – huomioiden sekä yksilön että työyhteisön
              toimintaympäristö, tunteet, vuorovaikutus ja rakenteet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Minä työnohjaajana</h2>
            <p className="text-lg mb-4">
              Työnohjaajana olen lempeä, analyyttinen ja toimin sekä terapeuttisella että
              suhdeperusteisella työotteella. Luon turvallisen tilan, jossa voi pysähtyä tutkimaan työtä,
              sen haasteita ja onnistumisia — mutta uskallan myös haastaa katsomaan asioita uusista
              näkökulmista.
            </p>

            <p className="text-lg mb-6">
              Integratiivinen työoteni tarkoittaa, että hyödynnän joustavasti erilaisia menetelmiä ja
              lähestymistapoja. Voin työskennellä ratkaisukeskeisesti ja voimavaroja vahvistaen tai
              syventyä tarkemmin tunteisiin, vuorovaikutukseen ja työyhteisön dynamiikkaan. Menetelmät
              valitsen aina tilanteen ja tarpeen mukaan.
            </p>

            <p className="text-lg mb-6">
              Uskon, että työnohjauksessa parhaimmillaan vaikeatkin asiat voidaan kohdata rakentavasti ja
              niitä voidaan käsitellä niin, että syntyy oivalluksia ja toivoa. Huumori ja lämpö kulkevat
              mukanani — ne auttavat jaksamaan ja näkemään asioiden inhimillisen puolen.
            </p>

            <p className="text-lg mb-6">
              Tavoitteeni on lisätä selkeyttä, vahvistaa työhyvinvointia ja tukea merkityksellisyyden
              tunnetta työssä — niin yksilöiden kuin työyhteisöjenkin kohdalla.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Mihin työnohjausta tarvitaan?</h2>
            <p className="text-lg mb-4">
              Työnohjaus on näyttöön perustuva työkalu työn kehittämiseen ja työhyvinvoinnin
              vahvistamiseen. Sen avulla voidaan selkeyttää ja tarkastella:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>perustehtävää</li>
              <li>työn hallintaa ja rakenteita</li>
              <li>voimavaroja ja muutoksia</li>
              <li>työilmapiiriä</li>
              <li>työn kehittämisen suuntaa</li>
            </ul>

            <p className="text-lg mb-6">
              Joskus työnohjaus keskittyy yhteen teemaan, joskus se kattaa laajemman kokonaisuuden. Sen
              voi nähdä jopa työn “terapiana” – tilana, jossa työtä voi tutkia ja kehittää turvallisesti.
            </p>

            <p className="text-lg mb-4">Työnohjaus tukee työntekijöitä ja työyhteisöjä erityisesti kuormittavissa tilanteissa, kuten:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>organisaatiomuutoksissa</li>
              <li>ristiriitatilanteissa</li>
              <li>uupumuksen tai konfliktien ennaltaehkäisyssä</li>
            </ul>

            <p className="text-lg mb-4">Työnohjaus sopii kaikille aloille ja organisaatioille. Työnohjaus edistää työn sujuvuutta, yhteisön toimivuutta ja ammatillista kasvua. Se tukee:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>työn kehittämistä</li>
              <li>työhyvinvointia</li>
              <li>muutostilanteiden hallintaa</li>
              <li>työhön liittyvien tunteiden käsittelyä</li>
            </ul>

            <p className="text-lg mb-6">Työnohjaus on panostus yksilön, tiimin ja koko organisaation menestykseen – ja se kannatta!</p>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">Hinnoittelu</h2>
              <p className="text-lg mb-4">Tarjoan työnohjausta harjoitteluhintaan.</p>
              <p className="text-lg mb-4">Erikoistarjouksena ja solidaarisuudesta järjestöihin kohdistuvien leikkauksien vuoksi tarjoan työnohjausta järjestöjen työntekijöille näitäkin hintoja halvemmalla. Järjestötarjouksen hinnat suluissa.</p>

              <h3 className="text-xl font-medium mt-4 mb-2">Yksilötyönohjaus</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>100 €/60 min (80 €)</li>
                <li>140 €/90 min (112 €)</li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2">Parityönohjaus työpareille</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>125 €/60 min (100 €)</li>
                <li>170 €/90 min (136 €)</li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2">Ryhmätyönohjaus (max 15 hlö)</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>200 €/90 min (180 €)</li>
                <li>250 €/120 min (225 €)</li>
              </ul>
            </section>

          </>
          )}
        </div>

        {/* Cards (prices) */}
        <ServiceCards cards={page?.cards} />
      </main>
    </div>
  );
}
