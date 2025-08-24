import Card from '@/components/card';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { getPageBySlug, renderPortableText } from '@/sanity/lib/getPage'

export default async function Seksuaalineuvonta() {
  const page = await getPageBySlug('seksuaalineuvonta')
  const title = page?.title || 'Seksuaalineuvonta – tukea ja ymmärrystä sinulle'
  const content = page?.content

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {content ? (
          renderPortableText(content)
        ) : (
          // Keep original content commented for migration
          <>
          {/*
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Seksuaalineuvonta – tukea ja ymmärrystä sinulle</h1>
            <div className="w-24 h-1 bg-[#b4a4f0] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tarjoan seksuaalineuvontaa, joka kohtaa sinut avoimesti ja arvostavasti missä tahansa elämäntilanteessa. Seksuaalisuus on osa ihmisen hyvinvointia ja ihmisenä olemista – yksin tai suhteissa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card
              title="Yksilöneuvonta"
              description="Henkilökohtaista neuvontaa seksuaalisuuden ja ihmissuhteiden kysymyksissä."
            >
              <Button href="/contact" className="mt-4 w-full">
                Varaa aika
              </Button>
            </Card>

            <Card
              title="Parineuvonta"
              description="Tukea ja ohjausta pareille ihmissuhteen ja seksuaalisuuden kysymyksissä."
            >
              <Button href="/contact" className="mt-4 w-full">
                Varaa aika
              </Button>
            </Card>

            <Card
              title="Etäneuvonta"
              description="Neuvontaa etäyhteydellä - joustavasti missä vain."
            >
              <Button href="/contact" className="mt-4 w-full">
                Varaa aika
              </Button>
            </Card>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Neuvonnassa käsitellään esimerkiksi</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>omaa seksuaalista identiteettiä</li>
              <li>kehoa ja tunteita</li>
              <li>seksuaalisuuden ja sukupuolen monimuotoisuutta</li>
              <li>suhteiden ja läheisyyden kysymyksiä</li>
              <li>seksuaalisuuteen liittyviä pelkoja tai vaikeuksia</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Lähestyn seksuaalineuvontaa lempeästi, luottamuksellisesti ja kokonaisvaltaisesti, kunnioittaen yksilöllisyyttäsi ja tarpeitasi. Tavoitteena on lisätä itsetuntemusta, hyvinvointia ja turvallisuuden tunnetta.
            </p>

            <p className="text-gray-700 mb-6">
              Omia erityisosaamisalueitani ovat seksuaalisuuden ja sukupuolen moninaisuus. Erityisesti olen auttanut monia henkilöitä, joilla on sukupuolidysforiaa.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">Hinnoittelu (seksuaalineuvonta)</h2>

            <h3 className="text-xl font-medium mt-2 mb-2">Yksilöneuvonta</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>50 € / 45 minuuttia</li>
              <li>90 € / 90 minuuttia</li>
            </ul>

            <h3 className="text-xl font-medium mt-2 mb-2">Parineuvonta</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>120 € / 90 minuuttia</li>
            </ul>

            <h3 className="text-xl font-medium mt-2 mb-2">Perheneuvonta (esim. vanhemmat lapsen kanssa)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>150 € / 90 minuuttia</li>
            </ul>
          </section>

          <div className="text-center">
            <Button href="/contact" className="inline-block">
              Ota yhteyttä
            </Button>
          </div>
          */}
          </>
        )}
      </main>
    </div>
  );
}
