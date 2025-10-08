import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/Hero";
import { ImageGallery, ImageModal } from "../components/ui";
import { associationData } from "../data/associationData";
import { FadeInUp } from "../components/animations/AnimationComponents";
import placeholder from "../assets/images/placeholder.jpg";
const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  
  const galleryImages = associationData.galleryImages.map((image, index) => ({
    url: image,
    name: `Imagen de APINATIVOS ${index + 1}`,
    caption: "Momentos importantes de nuestra asociación"
  }));

  return (
    <MainLayout>
      <Hero
        title="Galería"
        subtitle="Nuestros momentos y logros"
        backgroundImage={placeholder}
        height="medium"
      />

      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <FadeInUp delay={0.2}>
            <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
              Imágenes de Nuestra Asociación
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Descubre los momentos más importantes, nuestros proyectos y la belleza 
              natural del Pacífico Sur costarricense a través de estas imágenes.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <ImageGallery
              images={galleryImages}
              columns={3}
              gap={6}
              onImageClick={(index) => setSelectedImageIndex(index)}
              className="mb-8"
            />
          </FadeInUp><FadeInUp delay={0.6}>
            <div className="mt-16 text-center">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  ¿Quieres compartir tus fotos con nosotros?
                </h3>
                <p className="text-gray-600 mb-6">
                  Si has visitado nuestras empresas asociadas o participado en nuestras actividades, 
                  nos encantaría ver tus fotos y experiencias.
                </p>
                <a 
                  href="/contacto" 
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Contactar
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section><ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        images={galleryImages}
        initialIndex={selectedImageIndex || 0}
      />
    </MainLayout>
  );
};

export default Gallery;

