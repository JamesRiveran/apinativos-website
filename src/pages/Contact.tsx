import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BusinessLayout from "../layouts/BusinessLayout";
import Hero from "../components/common/Hero";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { associationData } from "../data/associationData";
import { getBusinessById } from "../data/businessesData";
import placeholder from "../assets/images/placeholder.jpg";
const Contact: React.FC = () => {
  const { businessId } = useParams<{ businessId?: string }>();
  const business = businessId ? getBusinessById(businessId) : null;
  
  const contactInfo = business?.contactInfo || associationData.contactInfo;
  const socialMedia = business?.socialMedia || associationData.socialMedia;
  const entityName = business?.name || associationData.name;
  
  // Función para obtener imagen aleatoria de la galería de la empresa
  const getRandomBusinessImage = () => {
    if (business && business.images && business.images.length > 0) {
      const randomIndex = Math.floor(Math.random() * business.images.length);
      return business.images[randomIndex].url;
    }
    return placeholder;
  };
  
  const backgroundImage = business ? getRandomBusinessImage() : placeholder;

  const Layout = business ? BusinessLayout : MainLayout;

  return (
    <Layout>
      <Hero
        title={`Contáctenos - ${entityName}`}
        subtitle="Estamos para servirle"
        backgroundImage={backgroundImage}
        height="medium"
      />

    <section className="bg-white">
      <div className="container max-w-2xl mx-auto flex flex-col justify-center min-h-[70vh] py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Información de Contacto
        </h2>

        <div className="mb-12 space-y-2 text-muted-foreground text-center">
          <p><strong>Dirección:</strong> {contactInfo.address}</p>
          <p><strong>Teléfono:</strong> {contactInfo.phone}</p>
          <p><strong>Email:</strong> {contactInfo.email}</p>
        </div>

        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Tu nombre completo" />
          </div>

          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="ejemplo@correo.com" />
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
            />
          </div>

          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>

        {socialMedia.whatsapp && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <a
                href={`https://wa.me/${socialMedia.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>

    </Layout>
  );
};

export default Contact;
