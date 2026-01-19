import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { BaseCrudService } from '@/integrations';
import { ServicesforArchitects } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Users, Lightbulb, Handshake, CheckCircle2 } from 'lucide-react';

export default function ArchitectsPartnersPage() {
  const [services, setServices] = useState<ServicesforArchitects[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<ServicesforArchitects>('partnerservices');
      setServices(result.items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: FileText,
      title: 'Specifikime Teknike të Plota',
      description: 'Dokumentacion i detajuar për specifikimin e produkteve në projekte'
    },
    {
      icon: Users,
      title: 'Mbështetje e Dedikuar',
      description: 'Ekip teknik i disponueshëm për konsulencë dhe mbështetje'
    },
    {
      icon: Lightbulb,
      title: 'Zgjidhje të Personalizuara',
      description: 'Rekomandime të përshtatura për çdo projekt specifik'
    },
    {
      icon: Handshake,
      title: 'Bashkëpunim Afatgjatë',
      description: 'Partneritet profesional për projekte të suksesshme'
    }
  ];

  const specificationProcess = [
    {
      step: '01',
      title: 'Konsultimi Fillestar',
      description: 'Diskutojmë kërkesat e projektit, specifikat teknike dhe objektivat'
    },
    {
      step: '02',
      title: 'Zgjedhja e Produktit',
      description: 'Rekomandojmë produktet më të përshtatshme bazuar në përdorimin dhe buxhetin'
    },
    {
      step: '03',
      title: 'Dokumentacioni Teknik',
      description: 'Ofrojmë skeda teknike, certifikime dhe dokumentacion të plotë'
    },
    {
      step: '04',
      title: 'Mostra dhe Testim',
      description: 'Dërgojmë mostra për vlerësim dhe aprovim nga ekipi juaj'
    },
    {
      step: '05',
      title: 'Mbështetje në Implementim',
      description: 'Asistencë teknike gjatë instalimit dhe fazës së zbatimit'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/b9443e_4d797e3ce03743058eb8f736ecc46188~mv2.png?originWidth=1920&originHeight=640"
            alt="Architects working on project"
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
              Arkitektë & Partnerë
            </h1>
            <p className="font-paragraph text-xl text-white/90 mb-10 leading-relaxed">
              Mbështetje profesionale dhe zgjidhje të personalizuara për projektet tuaja
            </p>
            <Button 
              size="lg" 
              className="bg-accent-gold hover:bg-accent-gold/90 text-white font-paragraph font-semibold px-8 py-6 text-lg"
              onClick={() => window.location.href = '/kontakt'}
            >
              Rezervo Takim Teknik
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Pse të Bashkëpunoni me Ne
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Ofrojmë mbështetje të plotë për arkitektë, dizajnerë dhe partnerë profesionalë
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-beige rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-sm text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specification Process */}
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
              Si Specifikohen Produktet Tona
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
              Proces i thjeshtë dhe profesional për integrimin e produkteve tona në projektet tuaja
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {specificationProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-gold rounded-sm flex items-center justify-center">
                    <span className="font-heading text-2xl text-white">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-base text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services from CMS */}
      <section className="w-full py-24 bg-white min-h-[400px]">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-6">
              Shërbimet Tona
            </h2>
          </motion.div>

          {isLoading ? null : services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8"
                >
                  {service.icon && (
                    <div className="w-16 h-16 mb-6">
                      <Image
                        src={service.icon}
                        alt={service.serviceTitle || 'Service'}
                        className="w-full h-full object-contain"
                        width={100}
                      />
                    </div>
                  )}
                  
                  <h3 className="font-heading text-2xl text-charcoal mb-4">
                    {service.serviceTitle}
                  </h3>
                  
                  <p className="font-paragraph text-sm text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.callToActionText && (
                    <Button
                      variant="outline"
                      className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                      onClick={() => {
                        if (service.callToActionUrl) {
                          window.location.href = service.callToActionUrl;
                        } else {
                          window.location.href = '/kontakt';
                        }
                      }}
                    >
                      {service.callToActionText}
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Technical Support */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl text-charcoal mb-6">
                Mbështetje Teknike
              </h2>
              <p className="font-paragraph text-lg text-secondary leading-relaxed mb-8">
                Ekipi ynë teknik është i disponueshëm për të ju ndihmuar në çdo fazë të projektit, nga zgjedhja e produktit deri në instalimin final.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                  <p className="font-paragraph text-base text-secondary">
                    Konsulencë për zgjedhjen e produktit të duhur
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                  <p className="font-paragraph text-base text-secondary">
                    Dokumentacion teknik i plotë dhe certifikime
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                  <p className="font-paragraph text-base text-secondary">
                    Mostra falas për vlerësim dhe testim
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                  <p className="font-paragraph text-base text-secondary">
                    Asistencë në instalim dhe zbatim
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-accent-gold hover:bg-accent-gold/90 text-white font-paragraph font-semibold px-8 py-6"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kërko Mbështetje Projekti
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <Image
                src="https://static.wixstatic.com/media/b9443e_96d9691830454dec831a1c03025673e0~mv2.png?originWidth=768&originHeight=448"
                alt="Technical support"
                className="w-full h-full object-cover"
                width={800}
              />
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
              Gati për të Filluar një Projekt?
            </h2>
            <p className="font-paragraph text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Kontaktoni ekipin tonë për të diskutuar projektin tuaj dhe për të marrë mbështetje të personalizuar
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent-gold hover:bg-accent-gold/90 text-white font-paragraph font-semibold px-10 py-6 text-lg"
                onClick={() => window.location.href = '/kontakt'}
              >
                Rezervo Takim Teknik
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-paragraph font-semibold px-10 py-6 text-lg backdrop-blur-sm"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kërko Mostra
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
