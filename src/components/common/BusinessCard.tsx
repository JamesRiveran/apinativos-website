import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Business } from "../../types";
import { ScaleIn } from "../animations/AnimationComponents";

interface BusinessCardProps {
  business: Business;
  delay?: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, delay = 0 }) => {
  return (
    <ScaleIn delay={delay}>
      <motion.div 
        className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <div className="h-48 overflow-hidden relative">
          <motion.img
            src={business.logo}
            alt={business.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-6">
          <motion.h3 
            className="text-xl font-bold text-primary-dark mb-2"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {business.name}
          </motion.h3>
          <p className="text-neutral-dark mb-4 line-clamp-3">
            {business.shortDescription}
          </p>
          <div className="flex items-center text-sm mb-4">
            <motion.span 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-light text-white mr-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#16a34a"
              }}
              transition={{ duration: 0.2 }}
            >
              {business.type}
            </motion.span>
          </div>
          <Link
            to={`/empresas/${business.id}`}
            className="block"
          >
            <motion.button
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium"
              whileHover={{ 
                backgroundColor: "#15803d",
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Ver Más
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </ScaleIn>
  );
};

export default BusinessCard;
