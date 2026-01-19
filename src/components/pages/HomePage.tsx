import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Droplets, Shield, Volume2, Flame, Award, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const advantages = [
    {
      icon: Droplets,
      title: '100% Waterproof',
      description: 'Rezistencë totale ndaj ujit dhe lagështirës'
    },
    {
      icon: Shield,
      title: 'Class 33 – Heavy Commercial',
      description: 'Për përdorim intensiv dhe trafik të lartë'
    },
    {
      icon: Layers,
      title: 'Wear Layer 0.55 mm',
      description: 'Qëndrueshmëri e lartë për vite përdorimi'
    },
    {
      icon: Volume2,
      title: 'Zgjidhje Akustike',
      description: 'Reduktim zhurmash deri në 21 dB'
    },
    {
      icon: Flame,
      title: 'Fire Rating Bfl-s1',
      description: 'Certifikim sigurie kundër zjarrit'
    },
    {
      icon: Award,
      title: 'Certifikime për Ambiente të Shëndetshme',
      description: 'EPD, HPD, Greenguard Gold'
    }
  ];

  const applications = [
    {
      title: 'Hotele & Resorte',
      description: 'Zgjidhje të qëndrueshme për ambiente me trafik të lartë',
      image: 'https://static.wixstatic.com/media/b9443e_1e604c1973554c8b83e1bd435f11113a~mv2.png?originWidth=768&originHeight=448'
    },
    {
      title: 'Apartamente & Rezidencë',
      description: 'Elegancë dhe performancë për hapësira banimi',
      image: 'https://static.wixstatic.com/media/b9443e_f1ce7cfb8e6f47d9bde716c8c5898773~mv2.png?originWidth=768&originHeight=448'
    },
    {
      title: 'Zyra & Hapësira Komerciale',
      description: 'Profesionalizëm dhe qëndrueshmëri',
      image: 'https://static.wixstatic.com/media/b9443e_f67c7f393a8b4a56b926d8d87278ab24~mv2.png?originWidth=768&originHeight=448'
    },
    {
      title: 'Retail & Ambiente Publike',
      description: 'Rezistencë për përdorim publik',
      image: 'https://static.wixstatic.com/media/b9443e_8c883ab89d9147269096233dd0f0f1be~mv2.png?originWidth=768&originHeight=448'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/b9443e_b4ecbaa645f74bb7bfc8270868b73742~mv2.png?originWidth=1920&originHeight=1024"
            alt="Modern hotel interior with SPC flooring"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-charcoal/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-6xl text-white mb-6 md:text-5xl">{"Dysheme SPC Profesionale për Hotele, Arkitektë dhe Projekte"}</h1>
            <p className="font-paragraph text-xl text-white/90 mb-10 leading-relaxed">
              Zgjidhje të certifikuara, waterproof dhe akustike për përdorim afatgjatë.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="hover:bg-accent-gold/90 text-white font-paragraph font-semibold px-8 py-6 text-lg bg-[#b8864fff]"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kërko Ofertë
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-paragraph font-semibold px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kërko Mostra
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Advantages Section */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Avantazhet Kryesore
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Dysheme SPC me performancë të lartë për projekte profesionale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-sm bg-[#b8864fff]">
                  <advantage.icon className="w-10 h-10 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">
                  {advantage.title}
                </h3>
                <p className="font-paragraph text-base text-secondary leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Brand-et Tona
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Distributor ekskluziv në Shqipëri i brand-eve ndërkombëtare SPC për projekte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-16 text-center"
            >
              <div className="mb-8 flex justify-center">
                <Image 
                  src="https://static.wixstatic.com/media/b9443e_1f2e64823dd0484199056f6417815d18~mv2.png" 
                  alt="FirmFit Logo" 
                  width={400}
                  className="h-auto max-w-full"
                />
              </div>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                Brand ndërkombëtar SPC me fokus te projektet profesionale dhe përdorimi komercial
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-16 text-center bg-primary-foreground"
            >
              <div className="mb-8 flex justify-center">
                <Image 
                  src="https://static.wixstatic.com/media/b9443e_98970eab824a4f79b6c95935d0c0355c~mv2.png" 
                  alt="Novocore - The NEXT Revolution in Waterproof Floors" 
                  width={400}
                  className="h-auto max-w-full"
                  loading="lazy"
                />
              </div>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                Zgjidhje SPC me certifikime të larta për ambiente të shëndetshme dhe performancë të qëndrueshme
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Applications Section */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Ku Përdoret SPC Ynë
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Zgjidhje të përshtatshme për çdo lloj projekti profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden group"
              >
                <div className="relative h-96">
                  <Image
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                    width={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <h3 className="font-heading text-3xl text-white mb-3">
                      {app.title}
                    </h3>
                    <p className="font-paragraph text-base text-white/90">
                      {app.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="w-full py-32 bg-charcoal">
        <div className="max-w-[100rem] mx-auto px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-white mb-6">
              Le ta Diskutojmë Projektin Tuaj
            </h2>
            <p className="font-paragraph text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Ekipi ynë është gati të ju ndihmojë me konsulencë teknike, mostra dhe oferta të personalizuara
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
