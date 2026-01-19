import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Fokus te Cilësia',
      description: 'Ofrojmë vetëm produkte me certifikime ndërkombëtare dhe performancë të provuar'
    },
    {
      icon: Award,
      title: 'Ekskluzivitet',
      description: 'Distributor ekskluziv i FirmFit dhe Novocore për tregun shqiptar'
    },
    {
      icon: Users,
      title: 'Mbështetje Profesionale',
      description: 'Ekip i dedikuar për konsulencë teknike dhe mbështetje në projekte'
    },
    {
      icon: TrendingUp,
      title: 'Vizion Afatgjatë',
      description: 'Partneritet i qëndrueshëm me klientët dhe rritje e vazhdueshme'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Themelimi',
      description: 'CoreFloor Albania fillon aktivitetin si distributor i dyshemeve SPC'
    },
    {
      year: '2021',
      title: 'Partneriteti me FirmFit',
      description: 'Bëhemi distributor ekskluziv i FirmFit për Shqipërinë'
    },
    {
      year: '2022',
      title: 'Zgjerimi në Projekte',
      description: 'Fillojmë bashkëpunimin me hotele dhe projekte të mëdha ndërtimi'
    },
    {
      year: '2023',
      title: 'Partneriteti me Novocore',
      description: 'Shtojmë Novocore në portofolio për zgjidhje premium'
    },
    {
      year: '2024',
      title: 'Lider në Treg',
      description: 'Pozicionohemi si lider në dysheme SPC për projekte profesionale'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/b9443e_69dd51e84fa446feaf4e12a70d2f91b8~mv2.png?originWidth=1920&originHeight=640"
            alt="CoreFloor Albania office"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-6xl md:text-7xl text-white mb-6">
              Rreth Nesh
            </h1>
            <p className="font-paragraph text-xl text-white/90 leading-relaxed">
              Distributor ekskluziv i dyshemeve SPC profesionale për projekte në Shqipëri
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl text-charcoal mb-6">
                Kush Jemi Ne
              </h2>
              <p className="font-paragraph text-lg text-secondary leading-relaxed mb-6">
                CoreFloor Albania është distributor ekskluziv i dyshemeve SPC të brand-eve ndërkombëtare FirmFit dhe Novocore për tregun shqiptar.
              </p>
              <p className="font-paragraph text-base text-secondary leading-relaxed mb-6">
                Ne specializohemi në furnizimin e dyshemeve SPC për projekte profesionale: hotele, ambiente komerciale, rezidenca premium dhe hapësira me trafik të lartë.
              </p>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                Misioni ynë është të ofrojmë zgjidhje dyshemeje me performancë të lartë, të certifikuara dhe të përshtatshme për kërkesat e tregut shqiptar, duke mbajtur standarde ndërkombëtare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <Image
                src="https://static.wixstatic.com/media/b9443e_afdd2fa2db6445ce960e2b40b5e5527b~mv2.png?originWidth=768&originHeight=448"
                alt="Modern office interior"
                className="w-full h-full object-cover"
                width={800}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Vlerat Tona
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Parimet që udhëheqin punën tonë dhe marrëdhëniet me klientët
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="w-16 h-16 bg-beige rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="font-paragraph text-sm text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Fokusi Ynë
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Hoteleri & Turizëm
              </h3>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                Zgjidhje të qëndrueshme për hotele, resorte dhe ambiente me trafik të lartë që kërkojnë performancë afatgjatë dhe mirëmbajtje të lehtë.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Ndërtim & Zhvillim
              </h3>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                Partneritet me kompani ndërtimi dhe zhvillues për projekte rezidenciale dhe komerciale që kërkojnë cilësi të lartë.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Arkitekturë & Dizajn
              </h3>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                Mbështetje teknike dhe konsulencë për arkitektë dhe dizajnerë që specifikojnë produkte për projekte të mëdha.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Rrugëtimi Ynë
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Nga fillimi deri sot, një histori rritjeje dhe suksesi
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent-gold rounded-sm flex items-center justify-center">
                    <span className="font-heading text-xl text-white">{milestone.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-charcoal mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-paragraph text-base text-secondary leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Brand-et që Përfaqësojmë
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Partnerë ndërkombëtarë me reputacion të provuar në industrinë e dyshemeve SPC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-16 text-center"
            >
              <h3 className="font-heading text-5xl text-charcoal mb-6">FirmFit</h3>
              <p className="font-paragraph text-base text-secondary leading-relaxed mb-6">
                Brand ndërkombëtar me fokus te dyshemetë SPC për projekte profesionale dhe përdorim komercial intensiv.
              </p>
              <p className="font-paragraph text-sm text-secondary">
                Distributor Ekskluziv për Shqipërinë
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-16 text-center"
            >
              <h3 className="font-heading text-5xl text-charcoal mb-6">Novocore</h3>
              <p className="font-paragraph text-base text-secondary leading-relaxed mb-6">
                Zgjidhje SPC premium me certifikime të larta për ambiente të shëndetshme dhe performancë të qëndrueshme.
              </p>
              <p className="font-paragraph text-base text-secondary leading-relaxed mb-6">
                SE+® particles compromise the integrity of a microbe's cellmembrane, which leads to its deactivation.
              </p>
              <p className="font-paragraph text-sm text-secondary mb-3">
                Distributor Ekskluziv për Shqipërinë
              </p>
              <p className="font-paragraph text-sm text-secondary italic">
                Assure certified tek dokumentacioni
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-charcoal">
        <div className="max-w-[100rem] mx-auto px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-white mb-6">
              Dëshironi të Bashkëpunoni me Ne?
            </h2>
            <p className="font-paragraph text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Kontaktoni ekipin tonë për të diskutuar projektin tuaj dhe për të marrë konsulencë profesionale
            </p>
            <Button 
              size="lg" 
              className="bg-accent-gold hover:bg-accent-gold/90 text-white font-paragraph font-semibold px-10 py-6 text-lg"
              onClick={() => window.location.href = '/kontakt'}
            >
              Na Kontakto
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
