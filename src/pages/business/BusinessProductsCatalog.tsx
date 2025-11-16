import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Modal from '../../components/ui/Modal';
import { useParams, Link } from 'react-router-dom';
import BusinessLayout from '../../layouts/BusinessLayout';
import Hero from '../../components/common/Hero';
import { getBusinessById } from '../../data/businessesData';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import LazyImage from '../../components/ui/LazyImage';
import { motion } from 'framer-motion';
// using react-hot-toast directly for add-to-cart feedback
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { createBlurDataURL } from '../../lib/imageUtils';
import logo from '../../assets/images/finca-ecologica-don-juan/logo.jpg';
import { FadeInUp } from '../../components/animations/AnimationComponents';
import { GradientOrb } from '../../components/animations/BackgroundEffects';
import { toast } from 'react-hot-toast';
import type { ReactNode } from 'react';
import useRenderLogger from '../../hooks/useRenderLogger';

// Top-level VirtualizedGrid component to avoid declaring hooks inside nested components
interface VirtualizedGridProps {
  products: any[];
  renderProduct: (product: any) => ReactNode;
}

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({ products, renderProduct }) => {
  useRenderLogger('VirtualizedGrid', { count: products?.length });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const listRef = useRef<any>(null);
  const [hasVirtual, setHasVirtual] = useState<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      const onResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    let ro: ResizeObserver | null = null;
    try {
      ro = new ResizeObserver((entries) => {
        if (!entries[0]) return;
        setWidth(entries[0].contentRect.width);
      });
      ro.observe(el);
    } catch (e) {
      const onResize = () => setWidth(el.offsetWidth || window.innerWidth);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    return () => { if (ro) ro.disconnect(); };
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // dynamic import — ignore TS if package not installed locally
        // @ts-ignore
        const mod = await import('react-window');
        if (!mounted) return;
        const modAny = mod as any;
        // support both ESM and CJS shapes
        listRef.current = modAny.FixedSizeList ?? modAny.default?.FixedSizeList ?? modAny.default ?? modAny.FixedSizeGrid;
        setHasVirtual(true);
      } catch (e) {
        setHasVirtual(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const productsArr = products || [];
  const gap = 32;
  const columns = useMemo(() => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  }, [width]);

  const colWidth = Math.floor((width - gap * (columns - 1)) / columns);
  const rowCount = Math.ceil(productsArr.length / columns);
  const rowHeight = 440;

  if (hasVirtual && listRef.current) {
    const ListComp = listRef.current as any;
    return (
      <div ref={containerRef} className="w-full">
        <ListComp
          height={Math.min(rowCount * rowHeight, Math.max(600, window.innerHeight - 200))}
          itemCount={rowCount}
          itemSize={rowHeight}
          width={width}
        >
          {({ index, style }: { index: number; style: React.CSSProperties }) => {
            const items: React.ReactNode[] = [];
            for (let col = 0; col < columns; col++) {
              const idx = index * columns + col;
              const product = productsArr[idx];
              items.push(
                <div key={col} style={{ width: colWidth }}>
                  {product ? renderProduct(product) : <div style={{ height: rowHeight - 24 }} />}
                </div>
              );
            }

            return (
              <div style={{ ...style, display: 'flex', gap: `${gap}px`, paddingRight: 4 }}>
                {items}
              </div>
            );
          }}</ListComp>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {productsArr.map((product) => (
        <div key={product.id}>
          {renderProduct(product)}
        </div>
      ))}
    </div>
  );
};

const BusinessProductsCatalog: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const business = getBusinessById(businessId || '');

  type ProductType = typeof business extends { products: Array<infer P> } ? P : any;
  const [modalProduct, setModalProduct] = useState<null | ProductType>(null);
  const { addItem } = useCart();
  const [modalQty, setModalQty] = useState<number>(1);
  // legacy ToastProvider not used here

  // Inner product card component: single Add button that opens modal for quantity
  const ProductCardInnerInner: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
      <Card
        className="group overflow-hidden border border-gray-200 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer"
        onClick={() => { setModalProduct(product); setModalQty(1); }}
      >
        <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-50">
          <LazyImage
            src={product.image}
            alt={product.name}
            width="100%"
            height="100%"
            className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover"
            placeholder={createBlurDataURL(16, 16)}
            fallbackSrc={logo}
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* removed inline overlay add button; replaced with card-level CTA below */}

          <button type="button"
            onClick={(e) => { e.stopPropagation(); setModalProduct(product); setModalQty(1); }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 text-primary font-semibold px-3 py-1 rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Ver producto
          </button>
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-primary">
              {product.price}
            </p>
            <p className="text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-end">
            <button type="button"
              onClick={async (e) => {
                e.stopPropagation();
                // add immediately and show a react-hot-toast success at bottom-center
                addItem(product, 1);
                toast.success(`Agregó 1 × ${product.name}`, { position: 'bottom-center', duration: 5000 });
              }}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:opacity-95 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              Agregar al carrito
            </button>
          </div>
        </CardContent>
      </Card>
    );
  };

  // memoize to avoid unnecessary re-renders when cart updates elsewhere
  const ProductCardInner = React.memo(ProductCardInnerInner) as typeof ProductCardInnerInner & { displayName?: string };
  ProductCardInner.displayName = 'ProductCardInner';

  // stable render function for VirtualizedGrid to avoid re-renders
  const renderProduct = useCallback((p: ProductType) => <ProductCardInner product={p} />, [ProductCardInner]);

  // VirtualizedGrid is now a top-level component to keep hooks rules satisfied


  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  return (
    <BusinessLayout>
      <Hero
        title={`Productos de ${business.name}`}
        subtitle="Calidad artesanal en cada detalle"
        backgroundImage={business.backgroundImage || logo}
        height="medium"
      />

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <GradientOrb className="absolute top-10 right-10 -z-10" size="lg" color="gray" />
        <GradientOrb className="absolute bottom-20 left-10 -z-10" size="md" color="gray" />
        <div className="container mx-auto px-4">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Nuestro Catálogo
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre la excelencia de nuestros productos cuidadosamente elaborados
              </p>
            </div>
          </FadeInUp>

          {business.products.length > 0 ? (
            <>
              <FadeInUp>
                <VirtualizedGrid products={business.products} renderProduct={renderProduct} />
              </FadeInUp>
              <Modal isOpen={!!modalProduct} onClose={() => setModalProduct(null)}>
                {modalProduct && (
                  <div className="w-full max-w-2xl mx-auto flex flex-col items-center bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-primary/20">
                    <div className="w-full h-56 sm:h-96 mb-4 mx-auto rounded-xl overflow-hidden border-2 border-primary/20 shadow">
                      <LazyImage
                        src={Array.isArray(modalProduct.image)
                          ? modalProduct.image[0]
                          : typeof modalProduct.image === 'string'
                            ? modalProduct.image
                            : ''
                        }
                        alt={modalProduct.name}
                        width="100%"
                        height="100%"
                        className="w-full h-full object-cover"
                        placeholder={createBlurDataURL(10, 10)}
                        fallbackSrc={logo}
                        priority={true}
                        objectFit="cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-2 text-center">{modalProduct.name}</h2>
                    <p className="text-gray-700 text-base mb-4 text-center leading-relaxed">{modalProduct.description}</p>
                    <div className="text-2xl sm:text-3xl font-extrabold text-primary bg-primary/10 rounded-lg px-5 py-2 mb-4 shadow text-center">
                      {modalProduct.price}
                    </div>

                    {/* Quantity selector (styled) */}
                    <div className="flex items-center justify-center mt-4">
                      <div className="inline-flex items-center gap-3 bg-white border border-primary/10 rounded-full shadow-sm px-3 py-2">
                        <motion.button
                          whileTap={{ scale: 0.92 }}
                          aria-label="Disminuir cantidad"
                          onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                          disabled={modalQty <= 1}
                          className={
                            `w-10 h-10 flex items-center justify-center rounded-full transition ` +
                            (modalQty <= 1
                              ? 'bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed opacity-60'
                              : 'bg-white text-primary border border-primary/10 hover:bg-primary/5')
                          }
                        >
                          <Minus size={16} />
                        </motion.button>

                        <div className="w-24 text-center px-2">
                          <input
                            type="number"
                            min={1}
                            value={modalQty}
                            onChange={(e) => setModalQty(Math.max(1, Number(e.target.value) || 1))}
                            className="w-full text-center bg-transparent font-semibold text-2xl appearance-none outline-none"
                            aria-label="Cantidad"
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 0.92 }}
                          aria-label="Aumentar cantidad"
                          onClick={() => setModalQty((q) => q + 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary border border-primary/10 hover:bg-primary/5 transition"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-2">
                      <motion.button type="button"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:opacity-95 transition text-lg gap-2"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (!modalProduct) return;
                          addItem(modalProduct, modalQty);
                          toast.success(`Agregó ${modalQty} × ${modalProduct.name}`, { position: 'bottom-center', duration: 5000 });
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="10" cy="20" r="1" />
                          <circle cx="18" cy="20" r="1" />
                        </svg>
                        Agregar al carrito
                      </motion.button>
                      <button type="button"
                        className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold bg-white hover:bg-primary hover:text-white transition-colors shadow"
                        onClick={() => { setModalProduct(null); setModalQty(1); }}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                )}
              </Modal>
            </>
          ) : (
            <FadeInUp delay={0.3}>
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No hay productos disponibles
                </h3>
                <p className="text-gray-500">
                  Pronto tendremos novedades en nuestro catálogo
                </p>
              </div>
            </FadeInUp>
          )}

          <FadeInUp delay={0.5}>
            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:scale-105 transition-transform">
                <Link to={`/empresas/${businessId}`}>
                  Volver a la página principal
                </Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </BusinessLayout>
  );
};

export default BusinessProductsCatalog;
