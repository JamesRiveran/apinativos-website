import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/Hero";
import { Separator } from "../components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { associationData } from "../data/associationData";
import { 
  FadeInUp, 
  StaggerContainer,
  StaggerItem 
} from "../components/animations/AnimationComponents";
import { PageTransition } from "../components/animations/SpecialEffects";
import { GradientOrb } from "../components/animations/BackgroundEffects";

const About: React.FC = () => {
  const cardData = [
    {
      title: "Nuestra Historia",
      content: associationData.history,
      icon: "📚"
    },
    {
      title: "Misión",
      content: associationData.mission || "Promover el desarrollo sostenible a través del fortalecimiento de iniciativas locales en turismo rural, producción agroecológica y conservación ambiental.",
      icon: "🎯"
    },
    {
      title: "Visión",
      content: associationData.vision || "Ser una organización líder en el desarrollo comunitario sostenible del Pacífico Sur costarricense, reconocida por su compromiso con la conservación ambiental y el empoderamiento de las comunidades locales.",
      icon: "🌟"
    }
  ];

  return (
    <MainLayout>
      <PageTransition>
        <Hero
          title="Quiénes Somos"
          subtitle={associationData.slogan}
          backgroundImage="/assets/images/placeholder.jpg"
          height="medium"
        />

        <section className="py-16 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
          <GradientOrb className="absolute top-20 right-10 -z-10" size="lg" color="gray" />
          <GradientOrb className="absolute bottom-20 left-10 -z-10" size="md" color="gray" />
          
          <div className="container max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-3xl font-semibold mb-4 gradient-text">
                {associationData.name}
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {associationData.description}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Separator className="mb-12" />
            </FadeInUp>

            <StaggerContainer className="grid gap-8 text-left">
              {cardData.map((item, index) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover-lift overflow-hidden border-0 shadow-lg">
                      <motion.div
                        whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                          <CardTitle className="text-left flex items-center gap-3">
                            <motion.span
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.3 }}
                              className="text-2xl"
                            >
                              {item.icon}
                            </motion.span>
                            <span className="text-gray-800">{item.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <motion.p 
                            className="text-gray-600 leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.content}
                          </motion.p>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Additional section with contact info */}
            <FadeInUp delay={0.8} className="mt-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte de nuestra comunidad?</h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Únete a nosotros en nuestra misión de promover el desarrollo sostenible y la conservación ambiental en el Pacífico Sur costarricense.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{associationData.contactInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📘</span>
                    <a 
                      href={associationData.socialMedia.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green-200 transition-colors"
                    >
                      Síguenos en Facebook
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeInUp>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default About;
