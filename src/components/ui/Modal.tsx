import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <button
        className="absolute top-4 right-6 text-white hover:text-primary text-3xl font-bold z-50"
        onClick={onClose}
        aria-label="Cerrar"
      >
        &times;
      </button>
      <div className="relative z-40 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
