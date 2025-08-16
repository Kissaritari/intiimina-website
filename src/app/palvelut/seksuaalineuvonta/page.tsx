import Card from '@/components/card';
import Button from '@/components/Button';

export default function Seksuaalineuvonta() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Seksuaalineuvonta</h1>
        <div className="w-24 h-1 bg-[#b4a4f0] mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Ammatillista ja luottamuksellista keskusteluapua seksuaalisuuteen,
          ihmissuhteisiin ja sukupuoleen liittyvissä kysymyksissä.
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

      <section className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-semibold mb-6">Mitä seksuaalineuvonta on?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Seksuaalineuvonta on ammatillista ja tavoitteellista työskentelyä,
              joka auttaa sinua käsittelemään seksuaalisuuteen, sukupuoleen ja
              ihmissuhteisiin liittyviä kysymyksiä turvallisessa ympäristössä.
            </p>
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Neuvonnassa voidaan käsitellä esimerkiksi seksuaalista identiteettiä,
              sukupuolen kokemusta, ihmissuhteita, seksuaalista hyvinvointia ja
              muita seksuaalisuuteen liittyviä teemoja.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Button href="/contact" className="inline-block">
          Ota yhteyttä
        </Button>
      </div>
    </main>
  );
}
