import Header from '@/components/Header';

export default function CV() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Ansioluettelo</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Koulutus</h2>
            {/* Add education details */}
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Työkokemus</h2>
            {/* Add work experience */}
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Erityisosaaminen</h2>
            {/* Add special skills and expertise */}
          </section>
        </div>
      </main>
    </div>
  );
}
