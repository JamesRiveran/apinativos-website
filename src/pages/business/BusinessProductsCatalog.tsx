import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import { useParams, Link } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import LazyImage from '../../components/ui/LazyImage';
import { createBlurDataURL } from '../../lib/imageUtils';
import logo from '../../assets/images/finca-ecologica-don-juan/logo.jpg'; 
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from '../../components/animations/AnimationComponents';
import { GradientOrb } from '../../components/animations/BackgroundEffects';

const BusinessProductsCatalog: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');
  
  type ProductType = typeof business extends { products: Array<infer P> } ? P : any;
  const [modalProduct, setModalProduct] = useState<null | ProductType>(null);

  
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        backgroundImage={business.backgroundImage || logo}
        height="medium"
      />

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <GradientOrb className="absolute top-10 right-10 -z-10" size="lg" color="gray" />
        <GradientOrb className="absolute bottom-20 left-10 -z-10" size="md" color="gray" />
        <div className="container mx-auto px-4">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Nuestro Catálogo
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre la excelencia de nuestros productos cuidadosamente elaborados
              </p>
            </div>
          </FadeInUp>

          {business.products.length > 0 ? (
            <>
              <StaggerContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {business.products.map((product, index) => (
                    <StaggerItem key={product.id}>
                      <ScaleIn delay={0.2 + index * 0.05}>
                        <Card
                          className="group overflow-hidden border border-gray-200 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer"
                          onClick={() => setModalProduct(product)}
                        >
                          <div className="relative aspect-square overflow-hidden">
                            <LazyImage
                              src={product.image}
                              alt={product.name}
                              width="100%"
                              height="100%"
                              className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                              placeholder={createBlurDataURL(16, 16)}
                              fallbackSrc={logo}
                              objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
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
                      </ScaleIn>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer><Modal isOpen={!!modalProduct} onClose={() => setModalProduct(null)}>
                {modalProduct && (
                  <div className="w-full max-w-md mx-auto flex flex-col items-center bg-white rounded-2xl shadow-2xl p-6 border border-primary/20">
                    <div className="w-full h-96 mb-4 mx-auto rounded-xl overflow-hidden border-2 border-primary/20 shadow">
                      <LazyImage
                        src={Array.isArray(modalProduct.image)
                          ? modalProduct.image[0]
                          : typeof modalProduct.image === 'string'
                            ? modalProduct.image
                            : ''
                        }
                        alt={modalProduct.name}
                        width="100%"
                        height="100%"
                        className="w-full h-full"
                        placeholder={createBlurDataURL(10, 10)}
                        fallbackSrc={logo}
                        priority={true}
                        objectFit="cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-2 text-center">{modalProduct.name}</h2>
                    <p className="text-gray-700 text-base mb-4 text-center leading-relaxed">{modalProduct.description}</p>
                    <div className="text-3xl font-extrabold text-primary bg-primary/10 rounded-lg px-6 py-2 mb-4 shadow text-center animate-pulse">
                      {modalProduct.price}
                    </div>
                    <button
                      className="mt-2 px-6 py-2 rounded-lg border border-primary text-primary font-semibold bg-white hover:bg-primary hover:text-white transition-colors self-center shadow"
                      onClick={() => setModalProduct(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                )}
              </Modal>
            </>
          ) : (
            <FadeInUp delay={0.3}>
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No hay productos disponibles
                </h3>
                <p className="text-gray-500">
                  Pronto tendremos novedades en nuestro catálogo
                </p>
              </div>
            </FadeInUp>
          )}

          <FadeInUp delay={0.5}>
            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:scale-105 transition-transform">
                <Link to={`/empresas/${businessId}`}>
                  Volver a la página principal
                </Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessProductsCatalog;
