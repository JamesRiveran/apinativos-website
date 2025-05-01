import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import logo from '../../assets/images/Quesos/logo.jpg';

const BusinessProductsCatalog: React.FC = () => {
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
        subtitle="Calidad artesanal en cada detalle"
        backgroundImage={logo}
        height="medium"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Nuestro Catálogo
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre la excelencia de nuestros productos cuidadosamente elaborados
            </p>
          </div>

          {business.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {business.products.map((product) => (
                <Card 
                  key={product.id}
                  className="group overflow-hidden border border-gray-200 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-lg font-bold text-primary">
                        {product.price}
                      </p>
                      <p className="text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-gray-500">
                Pronto tendremos novedades en nuestro catálogo
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="border-primary text-primary">
              <Link to={`/empresas/${businessId}`}>
                Volver a la página principal
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessProductsCatalog;