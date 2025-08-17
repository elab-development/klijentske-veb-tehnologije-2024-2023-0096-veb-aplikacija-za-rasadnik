import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Sekcija */}
      <section className="relative w-full h-[550px] sm:h-[650px] flex items-center justify-center text-white overflow-hidden">
        
        <Image
          src="/assets/rasadnik-bg.png"
          alt="Pozadina Rasadnika"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/60 z-10" />

       
        <div className="relative z-20 max-w-6xl w-full px-4 sm:px-8">
          <div className="max-w-[600px]">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-[#b0d9b5] mb-2">
              VELIKI IZBOR BILJAKA
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              NAJBOLJI KVALITET
              <br /> PO NAJNIŽIM
              <br /> CENAMA!
            </p>

            <Link
              href="/katalog"
              className="inline-block bg-[#63A60B] hover:bg-[#4f8508] transition text-white font-medium px-6 py-3 rounded-full text-sm mb-6"
            >
              Pogledaj Katalog
            </Link>

            {/* Reviews */}
            <div className="flex gap-6 items-center flex-wrap text-sm text-white">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/fb-review.png"
                  alt="Facebook Reviews"
                  width={40}
                  height={30}
                />
                <div className="leading-tight">
                  <p className="font-semibold">5.0 ★★★★★</p>
                  <p className="italic text-xs">based on 54 reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/google-review.png"
                  alt="Google Reviews"
                  width={40}
                  height={30}
                />
                <div className="leading-tight">
                  <p className="font-semibold">5.0 ★★★★★</p>
                  <p className="italic text-xs">based on 54 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Kategorije Sadnica Sekcija */}
      <section className="bg-[#F5F2ED] py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#FDFCF9] rounded-[40px] px-6 py-16 pb-20 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {/* Ukrasne */}
              <div>
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="/assets/ukrasne.png"
                    alt="Ukrasne Sadnice"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#083626] mb-2">
                  UKRASNE SADNICE
                </h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                  <strong>Ukrasne sadnice</strong> su neizostavan detalj svakog
                  lepo uređenog dvorišta. Bilo da želite da dodate boju,
                  strukturu ili eleganciju svom prostoru, ove biljke unose
                  život, harmoniju i prirodnu lepotu u svaki kutak vašeg vrta.
                </p>
              </div>

              {/* Začinske */}
              <div>
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="/assets/zacinske.png"
                    alt="Začinske Sadnice"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#083626] mb-2">
                  ZAČINSKE SADNICE
                </h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                  <strong>Začinske sadnice</strong> su savršen spoj lepote i
                  korisnosti u svakom vrtu. Osim što oplemenjuju prostor
                  mirisima i bojama, pružaju vam mogućnost da uvek imate sveže
                  začine na dohvat ruke.
                </p>
              </div>

              {/* Voćne */}
              <div>
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="/assets/vocne.png"
                    alt="Voćne Sadnice"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#083626] mb-2">
                  VOĆNE SADNICE
                </h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                  <strong>Voćne sadnice</strong> su ulaganje u zdravlje, ukus i
                  dugoročnu vrednost vaše bašte. Ne samo da ulepšavaju prostor
                  raskošnim cvetovima i krošnjama, već vam tokom godine daruju
                  sočne plodove pune vitamina.
                </p>
              </div>
            </div>

           
            <div className="text-center mt-12 mb-[100px]">
              <Link href="/katalog">
                <button className="bg-[#63A60B] hover:bg-[#4c8207] transition text-white font-medium px-6 py-3 rounded-full text-sm">
                  Pogledaj Katalog
                </button>
              </Link>
            </div>

           
            <div className="absolute bottom-0 left-0 w-full">
              <Image
                src="/assets/pattern.png"
                alt="Dekoracija"
                width={1200}
                height={100}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="oNama" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
         
          <div className="flex-1">
            <h3 className="text-sm text-[#63A60B] font-semibold uppercase mb-2">
              VIŠE OD 10 GODINA ISKUSTVA
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#083626] mb-6">
              O RASADNIKU
            </h2>
            <div className="text-gray-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Sa vama više od 40 godina! U privatnom vlasništvu i vođen
                porodičnom tradicijom, naš rasadnik se prostire na više od 25
                hektara i specijalizovan je za uzgoj visokokvalitetnih sadnica.
                Proizvodimo i nudimo biljke prilagođene domaćem podneblju i
                klimatskim uslovima, proverene u praksi i nagrađivane na
                sajmovima za svoj kvalitet i izdržljivost.
              </p>
              <p>
                Ne bavimo se prodajom sadnica iz uvoza, koje dolaze iz
                drugačijih klimatskih zona i koje su često tretirane velikim
                količinama veštačkih preparata kako bi veštački ubrzale rast.
              </p>
              <p>
                U ponudi se nalazi širok asortiman sadnica, tuje, četinari,
                ukrasne biljke raznih formi i visina (uključujući patuljaste i
                topijarne forme). Posebno izdvajamo Tuje Smaragd i Kolumna, koje
                su savršene za žive ograde i dostupne po povoljnim cenama. Tu
                smo da vam pomognemo oko izbora biljaka i da zajedno kreiramo
                prostor u kojem ćete uživati dugi niz godina.
              </p>
            </div>
          </div>

          {/* Slika */}
          <div className="flex-1 w-full">
            <Image
              src="/assets/rasadnik.png"
              alt="Rasadnik"
              width={600}
              height={400}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
