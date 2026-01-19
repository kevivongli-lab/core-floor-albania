import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Mesazhi u dërgua me sukses!',
        description: 'Do të ju kontaktojmë së shpejti.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@corefloor.al',
      link: 'mailto:info@corefloor.al'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+355 12 345 6789',
      link: 'tel:+355123456789'
    },
    {
      icon: MapPin,
      title: 'Adresa',
      value: 'Tiranë, Shqipëri',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-6xl text-charcoal mb-6">
              Kontakt
            </h1>
            <p className="font-paragraph text-xl text-secondary leading-relaxed">
              Na tregoni për projektin tuaj dhe ne do t'ju ndihmojmë të gjeni zgjidhjen e duhur
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-[100rem] mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="w-16 h-16 bg-beige rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="font-paragraph text-base text-secondary hover:text-accent-gold transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-paragraph text-base text-secondary">
                    {info.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl text-charcoal mb-6">
                Dërgoni një Mesazh
              </h2>
              <p className="font-paragraph text-base text-secondary mb-8 leading-relaxed">
                Plotësoni formularin dhe ekipi ynë do t'ju kontaktojë brenda 24 orëve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-paragraph text-sm text-charcoal mb-2 block">
                    Emri dhe Mbiemri *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Emri juaj"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="font-paragraph text-sm text-charcoal mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-paragraph text-sm text-charcoal mb-2 block">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+355 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="font-paragraph text-sm text-charcoal mb-2 block">
                      Kompania
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Emri i kompanisë"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="font-paragraph text-sm text-charcoal mb-2 block">
                      Lloji i Projektit
                    </Label>
                    <Input
                      id="projectType"
                      name="projectType"
                      type="text"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Hotel, Rezidencë, etj."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-paragraph text-sm text-charcoal mb-2 block">
                    Mesazhi *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[160px]"
                    placeholder="Tregoni më shumë për projektin tuaj..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold hover:bg-accent-gold/90 text-white font-paragraph font-semibold"
                >
                  {isSubmitting ? (
                    'Duke dërguar...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Dërgo Mesazhin
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-12"
            >
              <h3 className="font-heading text-3xl text-charcoal mb-6">
                Si Mund t'ju Ndihmojmë?
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-paragraph text-lg font-semibold text-charcoal mb-3">
                    Kërko Ofertë
                  </h4>
                  <p className="font-paragraph text-sm text-secondary leading-relaxed">
                    Dërgoni detajet e projektit tuaj dhe do të merrni një ofertë të personalizuar brenda 24-48 orëve.
                  </p>
                </div>

                <div>
                  <h4 className="font-paragraph text-lg font-semibold text-charcoal mb-3">
                    Kërko Mostra
                  </h4>
                  <p className="font-paragraph text-sm text-secondary leading-relaxed">
                    Dëshironi të shihni dhe prekni produktet? Dërgojmë mostra falas për vlerësim.
                  </p>
                </div>

                <div>
                  <h4 className="font-paragraph text-lg font-semibold text-charcoal mb-3">
                    Rezervo Takim Teknik
                  </h4>
                  <p className="font-paragraph text-sm text-secondary leading-relaxed">
                    Takohuni me ekipin tonë teknik për konsulencë të detajuar dhe zgjedhjen e produktit të duhur.
                  </p>
                </div>

                <div>
                  <h4 className="font-paragraph text-lg font-semibold text-charcoal mb-3">
                    Mbështetje për Projekte
                  </h4>
                  <p className="font-paragraph text-sm text-secondary leading-relaxed">
                    Ofrojmë mbështetje të plotë për arkitektë, dizajnerë dhe kompani ndërtimi në specifikimin dhe instalimin e produkteve.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-light-grey/30">
                <p className="font-paragraph text-sm text-secondary leading-relaxed">
                  <strong className="text-charcoal">Orari i punës:</strong><br />
                  E Hënë - E Premte: 09:00 - 18:00<br />
                  E Shtunë: 09:00 - 14:00<br />
                  E Diel: Mbyllur
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-16 text-center"
          >
            <MapPin className="w-16 h-16 text-charcoal mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="font-heading text-3xl text-charcoal mb-4">
              Vendndodhja Jonë
            </h3>
            <p className="font-paragraph text-lg text-secondary mb-2">
              CoreFloor Albania
            </p>
            <p className="font-paragraph text-base text-secondary">
              Tiranë, Shqipëri
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
