import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card, CardContent } from '../../components/ui/card';
import placeholderImage from '../../assets/images/Quesos/logo.jpg';


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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Nuestra Oferta
            </h2>
            <p className="text-lg text-gray-600">
              Descubre los espacios de {business.name}
            </p>
          </div>

          {business.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {business.images.map((image, index) => (
                <div key={`img-${index}`} className="relative group">
                  <Card className="h-full overflow-hidden transition-transform duration-300 hover:shadow-xl">
                    <CardContent className="p-0 h-full">
                      <img 
                        src={image.url}
                        alt={`${image.name} de ${business.name}`}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </CardContent>
                  </Card>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium">
                      {image.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay imágenes disponibles actualmente
              </p>
            </div>
          )}
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessGallery;