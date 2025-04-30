import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/Hero";
import { Card, CardContent } from "../components/ui/card";
import { associationData } from "../data/associationData";

const Gallery: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Galería"
        subtitle="Nuestros momentos y logros"
        backgroundImage="/assets/images/placeholder.jpg"
        height="medium"
      />

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Imágenes de Nuestra Asociación
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {associationData.galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <img
                    src={image}
                    alt={`Galería imagen ${index + 1}`}
                    className="w-full h-60 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Gallery;
