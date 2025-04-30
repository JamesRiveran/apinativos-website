import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';

const BusinessProducts: React.FC = () => {
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
        title={`Productos de ${business.name}`}
        subtitle="Conozca nuestra oferta"
        backgroundImage={business.images[2] || business.images[0] || '/assets/images/placeholder.jpg'}
        height="medium"
      />

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-10">Nuestros Productos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {business.products.map(product => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessProducts;
