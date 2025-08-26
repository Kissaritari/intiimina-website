import Header from '@/components/Header';
import RichText from '@/lib/RichText';
import { getPageBySlug } from '@/sanity/lib/getPage'

export default async function About() {
  const page = await getPageBySlug('about')
  const title = page?.title || 'Minusta ja työotteestani'
  const content = page?.content

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        {content ? (
          <RichText value={content} />
        ) : (
          <>
          {/*
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Minusta ja työotteestani</h1>
            <div className="w-24 h-1 bg-[#b4a4f0] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Olen Mico Ylimäki, kokenut ammattilainen seksuaalisuuden, sukupuolen ja 
                moninaisuuden parissa. Työotteeni perustuu vahvaan teoreettiseen osaamiseen,
                käytännön kokemukseen ja jatkuvaan ammatilliseen kehittymiseen.
              </p>
              
              <Button href="/palvelut" className="mb-8">
                Tutustu palveluihini
              </Button>
            </div>

            <Card
              title="Koulutus ja pätevyys"
              description="Seksuaalineuvoja (SSS), Työnohjaaja (STOry), Kouluttaja"
            />
          </div>
          
          <section className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Työotteeni</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Asiakaslähtöisyys</h3>
                <p className="text-gray-700">
                  Työskentelen sensitiivisesti, kunnioittavasti ja asiakaslähtöisesti.
                  Jokainen asiakas kohdataan yksilönä, ja työskentely räätälöidään asiakkaan
                  tarpeiden mukaan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Asiantuntijuus</h3>
                <p className="text-gray-700">
                  Perustan työni tutkittuun tietoon ja jatkuvaan ammatilliseen kehittymiseen.
                  Päivitän osaamistani säännöllisesti koulutuksilla ja työnohjauksella.
                </p>
              </div>
            </div>
          </section>
          */}
          </>
        )}
      </main>
    </div>
  );
}
