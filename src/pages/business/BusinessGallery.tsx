import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Carousel, ImageGallery, VideoModal, ImageModal } from '../../components/ui';
import LazyImage from '../../components/ui/LazyImage';
import { createBlurDataURL } from '../../lib/imageUtils';
import placeholderImage from '../../assets/images/finca-ecologica-don-juan/logo.jpg'; 
import placeholder from '../../assets/images/placeholder.jpg';
import { FadeInUp, ScaleIn } from '../../components/animations/AnimationComponents';
import { GradientOrb } from '../../components/animations/BackgroundEffects';
import { Video } from '../../types';
import { Play } from 'lucide-react';


const BusinessGallery: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');
  const [modalVideo, setModalVideo] = React.useState<Video | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

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

  // Función para obtener imagen aleatoria de la galería de la empresa
  const getRandomBusinessImage = () => {
    if (business.images && business.images.length > 0) {
      const randomIndex = Math.floor(Math.random() * business.images.length);
      return business.images[randomIndex].url;
    }
    return business.backgroundImage || placeholderImage;
  };
  
  const galleryImages = business.images.map((image, index) => ({
    url: image.url,
    name: image.name || `Área ${index + 1} de ${business.name}`,
    caption: `Descubre los espacios de ${business.name}`
  }));

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <BusinessLayout>
      <Hero 
        title={`Galería de ${business.name}`}
        subtitle="Conoce nuestros espacios y servicios"
        backgroundImage={getRandomBusinessImage()}
        height="medium"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <GradientOrb className="absolute top-20 right-10 -z-10" size="lg" color="gray" />
        <GradientOrb className="absolute bottom-10 left-20 -z-10" size="md" color="gray" />
        <div className="container mx-auto px-4 max-w-6xl">
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
          </FadeInUp>{business.images.length > 0 && (
            <FadeInUp delay={0.2}>
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
                  Imágenes Destacadas
                </h3>
                <Carousel images={business.images} />
              </div>
            </FadeInUp>
          )}{business.images.length > 0 ? (
            <FadeInUp delay={0.3}>
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
                  Galería Completa
                </h3>
                <ImageGallery
                  images={galleryImages}
                  columns={3}
                  gap={6}
                  onImageClick={handleImageClick}
                />
              </div>
            </FadeInUp>
          ) : (
            <FadeInUp delay={0.3}>
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex flex-col items-center space-y-4">
                  <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-lg">
                    No hay imágenes disponibles actualmente
                  </p>
                  <p className="text-gray-400 text-sm">
                    Pronto agregaremos fotos de nuestras instalaciones
                  </p>
                </div>
              </div>
            </FadeInUp>
          )}{business.videos && business.videos.length > 0 && (
            <FadeInUp delay={0.4}>
              <div className="mt-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos</h3>
                  <p className="text-lg text-gray-600">
                    Conoce más sobre nosotros a través de nuestros videos
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {business.videos.map((video, index) => (
                    <ScaleIn key={video.id} delay={0.2 + index * 0.1}>
                      <div
                        className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-2 border-transparent hover:border-primary/30 rounded-lg bg-white"
                        onClick={() => setModalVideo(video)}
                      >
                        <div className="relative aspect-video bg-gray-100">
                          <LazyImage
                            src={video.thumbnail || placeholderImage}
                            alt={video.name}
                            width="100%"
                            height="100%"
                            className="w-full h-full"
                            placeholder={createBlurDataURL(16, 9)}
                            fallbackSrc={placeholderImage}
                            objectFit="cover"
                          /><div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                              <Play className="h-12 w-12 text-white" fill="currentColor" />
                            </div>
                          </div>{(video.url === placeholder || video.url.includes('placeholder')) && (
                            <div className="absolute top-2 right-2 bg-yellow-500/90 text-white text-xs px-2 py-1 rounded-full">
                              Próximamente
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-300" />
                          <div className="absolute inset-0 flex items-end p-4 transition-all duration-300">
                            <div className="text-white">
                              <h4 className="font-semibold text-lg mb-1">{video.name}</h4>
                              {video.description && (
                                <p className="text-sm text-gray-200">{video.description}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </FadeInUp>
          )}
        </div><VideoModal
          isOpen={!!modalVideo}
          onClose={() => setModalVideo(null)}
          video={modalVideo}
        /><ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={closeImageModal}
          images={galleryImages}
          initialIndex={selectedImageIndex || 0}
        />
      </section>
    </BusinessLayout>
  );
};

export default BusinessGallery;
