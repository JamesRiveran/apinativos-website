import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { Button } from '../../components/ui/button';
import { getBusinessById } from '../../data/businessesData';
import { MapPin, Phone, Mail } from 'lucide-react';
import placeholderImage from '../../assets/images/Quesos/logo.jpg'; 

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


      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Bienvenidos a {business.name}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {business.longDescription}
            </p>
          </div>

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
        </div>
      </section>

      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Nuestras Instalaciones
      </h2>
      <p className="text-lg text-gray-600">
        Conoce los espacios donde creamos nuestros productos
      </p>
    </div>

    {business.images.length > 0 ? (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl w-full">
          {business.images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
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
          ))}
        </div>
      </div>
    ) : (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No hay imágenes de instalaciones disponibles
        </p>
      </div>
    )}

    <div className="text-center mt-12">
      <Button asChild variant="outline" className="border-primary text-primary">
        <Link to={`/empresas/${businessId}/galeria`}>
          Ver galería completa
        </Link>
      </Button>
    </div>
  </div>
</section>


      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6">¿Cómo encontrarnos?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-gray-700">{business.contactInfo.address}</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-gray-700">{business.contactInfo.phone}</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <p className="text-gray-700">{business.contactInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessHome;