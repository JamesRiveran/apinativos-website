import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card } from '../../components/ui/card';
import placeholderImage from '../../assets/images/Quesos/logo.jpg';
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from '../../components/animations/AnimationComponents';
import { GradientOrb } from '../../components/animations/BackgroundEffects';


const BusinessGallery: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');

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
        title={`Galería de ${business.name}`}
        subtitle="Conoce nuestros espacios y servicios"
        backgroundImage= {placeholderImage}
        height="medium"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <GradientOrb className="absolute top-20 right-10 -z-10" size="lg" color="gray" />
        <GradientOrb className="absolute bottom-10 left-20 -z-10" size="md" color="gray" />
        <div className="container mx-auto px-4">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Nuestra Oferta
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Descubre los espacios de {business.name}
              </p>
            </div>
          </FadeInUp>

          {business.images.length > 0 ? (
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {business.images.map((image, index) => (
                  <StaggerItem key={`img-${index}`}>
                    <ScaleIn delay={0.2 + index * 0.05}>
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.name || `Imagen ${index + 1} de ${business.name}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="text-white font-semibold text-lg">
                              {image.name || `Área ${index + 1}`}
                            </h3>
                          </div>
                        </div>
                      </Card>
                    </ScaleIn>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <FadeInUp delay={0.3}>
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-lg">
                  No hay imágenes disponibles actualmente
                </p>
              </div>
            </FadeInUp>
          )}
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessGallery;