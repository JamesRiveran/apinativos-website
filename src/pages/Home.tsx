import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/common/Hero";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { associationData } from "../data/associationData";
import { businessesData } from "../data/businessesData";
import MainLayout from "../layouts/MainLayout";
import placeholder from "../assets/images/placeholder.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "ApiNativos";
  }, []);

  return (
    <MainLayout>
      <Hero
        title={associationData.name}
        subtitle={associationData.slogan}
        backgroundImage= {placeholder}
        height="large"
      />

      <section className="bg-white">
        <div className="container max-w-3xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh] py-16">
          <h2 className="text-3xl font-bold mb-6">
            Bienvenidos a {associationData.name}
          </h2>
          <p className="text-lg mb-6">
            {associationData.description}
          </p>
          <Button asChild>
            <Link to="/quienes-somos">Conozca más sobre nosotros</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Nuestras Empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
            {businessesData.map((business) => (
              <Card key={business.id} className="transition hover:scale-105">
                <img
                  src={business.logo}
                  alt={business.name}
                  className="w-full h-48 object-cover rounded-t"
                />
                <CardContent className="p-4">
                  <CardTitle>{business.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">
                    {business.shortDescription}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/empresas/${business.id}`}>Ver más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-primary text-white">
        <div className="container max-w-2xl mx-auto flex flex-col items-center justify-center text-center min-h-[40vh] py-16">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en nuestros productos y servicios?
          </h2>
          <p className="text-lg mb-6">
            Estamos aquí para responder a todas sus preguntas y ayudarle a encontrar lo que necesita.
          </p>
          <Button asChild variant="secondary">
            <Link to="/contacto">Contáctenos hoy</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
