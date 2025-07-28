import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { Button } from '../../components/ui/button';
import { getBusinessById } from '../../data/businessesData';
import { MapPin, Phone, Mail } from 'lucide-react';
import placeholderImage from '../../assets/images/Quesos/logo.jpg'; 
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from '../../components/animations/AnimationComponents';
import { GradientOrb } from '../../components/animations/BackgroundEffects'; 

const BusinessHome: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');

  useEffect(() => {
    if (business) {
      document.title = `${business.name} | ApiNativos`;
    } else {
      document.title = `Empresa no encontrada | ApiNativos`;
    }
  }, [business]);

  if (!business) {
    return (
      <BusinessLayout>
        <div className="flex justify-center items-center h-64">
          <h2 className="text-2xl font-bold text-primary">
            Empresa no encontrada
          </h2>
        </div>
      </BusinessLayout>
    );
  }

  return (
    <BusinessLayout>
      <Hero 
        title={business.name}
        subtitle={business.shortDescription}
        backgroundImage={placeholderImage}
        height="large"
      />


      <section className="py-16 bg-white relative overflow-hidden">
        <GradientOrb className="absolute top-10 right-10 -z-10" size="lg" color="gray" />
        <div className="container max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Bienvenidos a {business.name}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {business.longDescription}
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex justify-center gap-6 mt-8">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to={`/empresas/${businessId}/productos`}>
                  Ver nuestros productos
                </Link>
              </Button>
              <Button asChild>
                <Link to={`/empresas/${businessId}/contacto`}>
                  Contáctanos
                </Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <GradientOrb className="absolute bottom-10 left-10 -z-10" size="md" color="gray" />
        <div className="container mx-auto px-4">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Nuestras Instalaciones
              </h2>
              <p className="text-lg text-gray-600">
                Conoce los espacios donde creamos nuestros productos
              </p>
            </div>
          </FadeInUp>

          {business.images.length > 0 ? (
            <StaggerContainer>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl w-full">
                  {business.images.slice(0, 3).map((image, index) => (
                    <StaggerItem key={index}>
                      <ScaleIn delay={0.3 + index * 0.1}>
                        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                          <img
                            src={image.url}
                            alt={image.name || `Instalación ${index + 1} de ${business.name}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                            <h3 className="text-white font-medium text-lg">
                              {image.name || `Área ${index + 1}`}
                            </h3>
                          </div>
                        </div>
                      </ScaleIn>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </StaggerContainer>
          ) : (
            <FadeInUp delay={0.3}>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No hay imágenes de instalaciones disponibles
                </p>
              </div>
            </FadeInUp>
          )}

          <FadeInUp delay={0.6}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-primary text-primary hover:scale-105 transition-transform">
                <Link to={`/empresas/${businessId}/galeria`}>
                  Ver galería completa
                </Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>


      <section className="py-16 bg-white relative overflow-hidden">
        <GradientOrb className="absolute top-20 right-20 -z-10" size="sm" color="gray" />
        <div className="container max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.2}>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg shadow-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-center mb-6">¿Cómo encontrarnos?</h3>
              <StaggerContainer>
                <div className="grid md:grid-cols-3 gap-6">
                  <StaggerItem>
                    <div className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105">
                      <MapPin className="h-6 w-6 text-primary" />
                      <p className="text-gray-700">{business.contactInfo.address}</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105">
                      <Phone className="h-6 w-6 text-primary" />
                      <p className="text-gray-700">{business.contactInfo.phone}</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105">
                      <Mail className="h-6 w-6 text-primary" />
                      <p className="text-gray-700">{business.contactInfo.email}</p>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </FadeInUp>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessHome;