import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate, useParams } from 'react-router-dom';
import { getBusinessById } from '../../data/businessesData';

const sanitizePhone = (phone?: string) => phone ? phone.replace(/[^0-9]/g, '') : '';

const CartSidebar: React.FC = () => {
    const { items, totalItems, updateQty, removeItem, clear } = useCart();
    const [open, setOpen] = React.useState(false);
    const { businessId } = useParams<{ businessId: string }>();
    const business = getBusinessById(businessId || '');
    const navigate = useNavigate();

    const generateMessage = () => {
        const header = `Hola, quisiera ordenar de ${business ? business.name : 'su negocio'}:`;
        const lines = items.map((it) => `- ${it.qty} x ${it.product.name} (${it.product.price})`);
        const footer = '\nGracias.';
        return [header, ...lines, '', footer].join('\n');
    };

    const handleCheckout = () => {
        if (!business || !business.socialMedia || !business.socialMedia.whatsapp) {
            // fallback to contact page
            navigate(`/empresas/${businessId}/contacto`);
            return;
        }
        const phone = sanitizePhone(business.socialMedia.whatsapp);
        const message = generateMessage();
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        // open in new tab
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating button */}
            <button
                aria-label="Abrir carrito"
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                </svg>
                <span className="text-sm font-semibold">Carrito</span>
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-primary rounded-full text-xs font-bold">{totalItems}</span>
            </button>

            {/* Sidebar */}
            {open && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                    <aside className="relative ml-auto w-full sm:w-96 md:w-[420px] bg-white shadow-xl p-4 overflow-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">Tu carrito</h3>
                            <button className="text-sm text-gray-500" onClick={() => setOpen(false)}>Cerrar</button>
                        </div>

                        {items.length === 0 ? (
                            <div className="text-center text-gray-500 py-8">No hay productos en el carrito</div>
                        ) : (
                            <div className="space-y-4">
                                {items.map((it) => (
                                    <div key={it.product.id} className="flex items-start gap-3 border-b pb-3">
                                        <img src={it.product.image as any} alt={it.product.name} className="w-20 h-20 object-cover rounded-md" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold text-sm sm:text-base">{it.product.name}</div>
                                            </div>
                                            <div className="text-sm text-gray-600">{it.product.price}</div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <button className="px-2 py-1 border rounded" onClick={() => updateQty(it.product.id, it.qty - 1)} aria-label="Disminuir">-</button>
                                                <div className="px-3 py-1 border rounded">{it.qty}</div>
                                                <button className="px-2 py-1 border rounded" onClick={() => updateQty(it.product.id, it.qty + 1)} aria-label="Aumentar">+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-4 border-t">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-sm text-gray-600">Productos</div>
                                        <div className="text-sm font-semibold">{items.length}</div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={handleCheckout}
                                            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-95 transition"
                                        >Pedir por WhatsApp</button>
                                        <button
                                            onClick={() => { clear(); setOpen(false); }}
                                            className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                                        >Vaciar carrito</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            )}
        </>
    );
};

export default CartSidebar;
