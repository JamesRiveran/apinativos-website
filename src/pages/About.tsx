import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/Hero";
import { Separator } from "../components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { associationData } from "../data/associationData";

const About: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Quiénes Somos"
        subtitle={associationData.slogan}
        backgroundImage="/assets/images/placeholder.jpg"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {associationData.name}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {associationData.description}
          </p>

          <Separator className="mb-12" />

          <div className="grid gap-8 text-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-left">Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {associationData.history}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {associationData.mission}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {associationData.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
