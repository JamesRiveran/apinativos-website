import React from "react";
import { Link } from "react-router-dom";
import { Business } from "../../types";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={business.logo}
          alt={business.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-dark mb-2">
          {business.name}
        </h3>
        <p className="text-neutral-dark mb-4">{business.shortDescription}</p>
        <div className="flex items-center text-sm mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-light text-white mr-2">
            {business.type}
          </span>
        </div>
        <Link
          to={`/empresas/${business.id}`}
          className="btn btn-primary block text-center"
        >
          Ver Más
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
