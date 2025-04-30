import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const BusinessAboutUs: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');

  if (!business) {
    return (
      <BusinessLayout>
        <div className="flex justify-center items-center h-64">
          <h2 className="text-2xl font-bold text-primary">Empresa no encontrada</h2>
        </div>
      </BusinessLayout>
    );
  }

  return (
    <BusinessLayout>
      <Hero
        title={`Sobre ${business.name}`}
        subtitle="Nuestra historia y valores"
        backgroundImage={business.images[1] || business.images[0] || '/assets/images/placeholder.jpg'}
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">¿Quiénes Somos?</h2>
          <p className="text-muted-foreground text-lg mb-12">
            {business.longDescription}
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Contáctenos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-left">
              <p><strong>Dirección:</strong> {business.contactInfo.address}</p>
              <p><strong>Teléfono:</strong> {business.contactInfo.phone}</p>
              <p><strong>Email:</strong> {business.contactInfo.email}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessAboutUs;
