import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../components/ui/Carousel';
import Modal from '../../components/ui/Modal';
import VideoModal from '../../components/ui/VideoModal';
import LazyImage from '../../components/ui/LazyImage';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { getBusinessById } from '../../data/businessesData';
import { createBlurDataURL } from '../../lib/imageUtils';
import { MapPin, Phone, Mail, Play } from 'lucide-react';
import Map from '../../components/common/Map';
import placeholderImage from '../../assets/images/finca-ecologica-don-juan/logo.jpg'; 
import { FadeInUp, StaggerContainer, StaggerItem } from '../../components/animations/AnimationComponents';
import { GradientOrb } from '../../components/animations/BackgroundEffects';
import { Video } from '../../types'; 


function getRandomSample<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

const AutoCarousel: React.FC<{ images: { url: string; name?: string }[] }> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [roundImages, setRoundImages] = useState(() => getRandomSample(images, Math.min(8, images.length)));
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (roundImages.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      if (current === roundImages.length - 1) {
        
        setRoundImages(getRandomSample(images, Math.min(8, images.length)));
        setCurrent(0);
      } else {
        setCurrent((c) => c + 1);
      }
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, roundImages, images]);

  
  useEffect(() => {
    setRoundImages(getRandomSample(images, Math.min(8, images.length)));
    setCurrent(0);
  }, [images]);

  return <Carousel images={roundImages} currentIndex={current} setCurrentIndex={setCurrent} />;
};


const BusinessHome: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');
  
  type ProductType = typeof business extends { products: Array<infer P> } ? P : any;
  const [modalProduct, setModalProduct] = useState<null | ProductType>(null);
  const [modalVideo, setModalVideo] = useState<Video | null>(null);

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
        backgroundImage={business.backgroundImage || placeholderImage}
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
              <Button asChild className="text-white">
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
            <AutoCarousel images={business.images.slice(0, 6)} />
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
      </section>{business.products && business.products.length > 0 && (
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4">
            <FadeInUp delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Catálogo de Productos</h2>
                <p className="text-lg text-gray-600">Algunos de nuestros productos destacados</p>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {business.products.slice(0, 6).map((product, idx) => (
                <FadeInUp key={product.id} delay={0.2 + idx * 0.1}>
                  <Card
                    className="hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 h-full flex flex-col cursor-pointer border-2 border-transparent hover:border-primary/40 bg-white/90"
                    onClick={() => setModalProduct(product)}
                  >
                    <CardHeader className="flex flex-col items-center justify-center pb-2">
                      <div className="w-32 h-32 mb-2 rounded-xl overflow-hidden border shadow bg-white">
                        <LazyImage
                          src={Array.isArray(product.image)
                            ? product.image[0]
                            : typeof product.image === 'string'
                              ? product.image
                              : ''
                          }
                          alt={product.name}
                          width="100%"
                          height="100%"
                          className="w-full h-full"
                          placeholder={createBlurDataURL(8, 8)}
                          fallbackSrc={placeholderImage}
                          objectFit="cover"
                        />
                      </div>
                      <CardTitle className="text-lg text-center font-bold text-primary/90 group-hover:text-primary">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="text-gray-600 text-base mb-2 text-center min-h-[48px] font-medium">{product.description}</div>
                      <div className="text-primary font-bold text-xl text-center mt-2">{product.price}</div>
                    </CardContent>
                  </Card>
                </FadeInUp>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-primary text-primary hover:scale-105 transition-transform">
                <Link to={`/empresas/${business.id}/productos`}>
                  Ver catálogo completo
                </Link>
              </Button>
            </div>
          </div><Modal isOpen={!!modalProduct} onClose={() => setModalProduct(null)}>
            {modalProduct && (
              <div className="w-full max-w-xs mx-auto flex flex-col items-center bg-white rounded-2xl shadow-2xl p-6 border border-primary/20">
                <div className="w-40 h-40 mb-4 rounded-xl overflow-hidden border-2 border-primary/20 shadow bg-white">
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
                    fallbackSrc={placeholderImage}
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
        </section>
          )}

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
          <FadeInUp delay={0.3}>
            <div className="container mx-auto px-4 mt-6">
              {business.location ? (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Map
                    markers={[{ lat: business.location.lat, lng: business.location.lng, title: business.name, description: business.contactInfo.address }]}
                    single
                    height="240px"
                  />
                </div>
              ) : (
                <div className="text-center text-muted-foreground mt-4">Ubicación no disponible</div>
              )}
            </div>
          </FadeInUp>
        </div>
      </section><VideoModal
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
        video={modalVideo}
      />
    </BusinessLayout>
  );
};

export default BusinessHome;
