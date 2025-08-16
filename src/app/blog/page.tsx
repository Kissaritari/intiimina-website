import Card from '@/components/card';
import Button from '@/components/Button';

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blogi</h1>
        <p className="text-xl text-gray-600 mb-8">Ajatuksia ja oivalluksia seksuaalisuudesta, sukupuolesta ja moninaisuudesta</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card 
          title="Tulossa pian!"
          description="Blogitekstejä ei ole vielä julkaistu. Pysy kuulolla!"
        >
          <Button href="/subscribe" className="mt-4 w-full">
            Tilaa uutiskirje
          </Button>
        </Card>
      </div>
    </div>
  );
}
