import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { getBusinessById } from "../data/businessesData";

interface BusinessLayoutProps {
  children: React.ReactNode;
}

const BusinessLayout: React.FC<BusinessLayoutProps> = ({ children }) => {
  const { businessId } = useParams<{ businessId: string }>();
  const location = useLocation();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [businessId, location.pathname]);

  const business = getBusinessById(businessId || "");

  if (!business) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary-dark mb-4">
              Empresa no encontrada
            </h1>
            <p className="text-lg">La empresa que estás buscando no existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default BusinessLayout;

