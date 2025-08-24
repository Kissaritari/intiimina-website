import Header from '@/components/Header';
import { getPageBySlug, renderPortableText } from '@/sanity/lib/getPage'

export default async function CV() {
  const page = await getPageBySlug('cv')
  const title = page?.title || 'Ansioluettelo'
  const content = page?.content

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {content ? renderPortableText(content) : (
            <>{/*
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Koulutus</h2>
              <p>Lisää koulutustiedot tähän (siirretään Sanityyn).</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Työkokemus</h2>
              <p>Lisää työkokemus tähän (siirretään Sanityyn).</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Erityisosaaminen</h2>
              <p>Lisää erityisosaaminen tähän (siirretään Sanityyn).</p>
            </section>
            */}</>
          )}
        </div>
      </main>
    </div>
  );
}
