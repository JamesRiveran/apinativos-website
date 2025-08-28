import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/common/Hero";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { associationData } from "../data/associationData";
import { businessesData } from "../data/businessesData";
import MainLayout from "../layouts/MainLayout";
import placeholder from "../assets/images/placeholder.jpg";
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight,
  StaggerContainer,
  StaggerItem 
} from "../components/animations/AnimationComponents";
import { PageTransition } from "../components/animations/SpecialEffects";
import { GradientOrb } from "../components/animations/BackgroundEffects";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "ApiNativos";
  }, []);

  return (
    <MainLayout>
      <PageTransition>
        <Hero
          title={associationData.name}
          subtitle={associationData.slogan}
          backgroundImage={placeholder}
          height="large"
        />

        <section className="bg-white relative overflow-hidden">
          <GradientOrb className="absolute top-20 right-10 -z-10" size="lg" color="gray" />
          <div className="container max-w-3xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh] py-16">
            <FadeInUp delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">
                Bienvenidos a {associationData.name}
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-lg mb-6 text-gray-700 max-w-2xl leading-relaxed">
                {associationData.description}
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="text-white">
                  <Link to="/quienes-somos">Conozca más sobre nosotros</Link>
                </Button>
              </motion.div>
            </FadeInUp>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
          <GradientOrb className="absolute bottom-10 left-10 -z-10" size="md" color="gray" />
          <div className="container mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-semibold text-center mb-12">
                Nuestras Empresas
              </h2>
            </FadeInUp>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
              {businessesData.map((business, index) => (
                <StaggerItem key={business.id}>
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={business.logo}
                          alt={business.name}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <CardTitle className="mb-2">{business.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                          {business.shortDescription}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button asChild variant="outline" className="w-full">
                            <Link to={`/empresas/${business.id}`}>Ver más</Link>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
          <GradientOrb className="absolute top-10 right-20 -z-10" size="lg" color="gray" />
          <div className="container max-w-2xl mx-auto flex flex-col items-center justify-center text-center min-h-[40vh] py-16">
            <FadeInLeft delay={0.2}>
              <h2 className="text-3xl font-bold mb-4">
                ¿Interesado en nuestros productos y servicios?
              </h2>
            </FadeInLeft>
            <FadeInRight delay={0.4}>
              <p className="text-lg mb-6 opacity-90">
                Estamos aquí para responder a todas sus preguntas y ayudarle a encontrar lo que necesita.
              </p>
            </FadeInRight>
            <FadeInUp delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contacto">Contáctenos hoy</Link>
                </Button>
              </motion.div>
            </FadeInUp>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Home;
