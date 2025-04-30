import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { Card, CardContent } from '../../components/ui/card';
import { getBusinessById } from '../../data/businessesData';

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
        backgroundImage={business.images[0] || '/assets/images/placeholder.jpg'}
        height="large"
      />

      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Bienvenidos a {business.name}
          </h2>
          <p className="text-muted-foreground text-lg">
            {business.longDescription}
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Nuestras Instalaciones
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {business.images.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden transition-transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <img 
                    src={image}
                    alt={`Imagen de ${business.name} ${index + 1}`}
                    className="w-full h-60 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessHome;
