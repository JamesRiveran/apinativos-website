import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { businessesData } from "../../data/businessesData";
import { associationData } from "../../data/associationData";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrolledToTop(scrollY <= 10);
      
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 5)) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY >= 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [lastScrollY, scrollDirection]);

  return { scrollDirection, scrolledToTop };
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { businessId } = useParams<{ businessId?: string }>();
  const { scrollDirection, scrolledToTop } = useScrollDirection();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const currentLogo = businessId
    ? businessesData.find((business) => business.id === businessId)?.logo
    : associationData.logo;

  const currentName = businessId
    ? businessesData.find((business) => business.id === businessId)?.name
    : associationData.name;

  const urlPrefix = businessId ? `/empresas/${businessId}` : "";

  const navbarVisible = scrollDirection === 'up' || scrolledToTop;

  return (
    <nav
      className={`bg-white shadow-md z-50 w-full fixed transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to={businessId ? `/empresas/${businessId}` : "/"}
              className="flex items-center"
            >
              <img
                className="h-10 max-w-[120px] object-contain"
                src={currentLogo || "/assets/images/placeholder.jpg"}
                alt={currentName}
              />
              <span className="ml-3 text-xl font-bold text-primary-dark whitespace-nowrap">
                {currentName}
              </span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link
              to={urlPrefix || "/"}
              className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
            >
              Inicio
            </Link>
            <Link
              to={`${urlPrefix}/quienes-somos`}
              className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
            >
              Quiénes Somos
            </Link>

            {businessId && (
              <Link
                to={`${urlPrefix}/galeria`}
                className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                Galería
              </Link>
            )}

            {businessId && (
              <Link
                to={`${urlPrefix}/productos`}
                className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                Productos
              </Link>
            )}

            {!businessId && (
              <Link
                to="/galeria"
                className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                Galería
              </Link>
            )}

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium flex items-center"
              >
                Empresas
                <svg
                  className="ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    {businessesData.map((business) => (
                      <Link
                        key={business.id}
                        to={`/empresas/${business.id}`}
                        className="block px-4 py-2 text-sm text-neutral-dark hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        {business.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to={`${urlPrefix}/contacto`}
              className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
            >
              Contáctenos
            </Link>

            {businessId && (
              <Link
                to="/"
                className="text-white bg-primary hover:bg-primary-dark px-3 py-2 rounded-md font-medium"
              >
                Volver a Asociación
              </Link>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition duration-200"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-2">
          <Link
            to={urlPrefix || "/"}
            className="block text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to={`${urlPrefix}/quienes-somos`}
            className="block text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
            onClick={() => setIsOpen(false)}
          >
            Quiénes Somos
          </Link>

          {businessId ? (
            <>
              <Link
                to={`${urlPrefix}/galeria`}
                className="block text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Galería
              </Link>
              <Link
                to={`${urlPrefix}/productos`}
                className="block text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Productos
              </Link>
            </>
          ) : (
            <Link
              to="/galeria"
              className="block text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Galería
            </Link>
          )}

          <div>
            <div className="block px-3 py-2 font-medium text-neutral-dark">
              Empresas:
            </div>
            {businessesData.map((business) => (
              <Link
                key={business.id}
                to={`/empresas/${business.id}`}
                className="block pl-6 py-2 text-sm text-neutral-dark hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {business.name}
              </Link>
            ))}
          </div>
          <Link
            to={`${urlPrefix}/contacto`}
            className="block text-neutral-dark hover:text-primary px-3 py-2 rounded-md font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contáctenos
          </Link>
          {businessId && (
            <Link
              to="/"
              className="block text-white bg-primary hover:bg-primary-dark px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Volver a Asociación
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;