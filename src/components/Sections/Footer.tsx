import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[oklch(0.145_0_0)] text-white text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} LEXPROTEGE. Todos los derechos reservados.
      </p>
      <p className="text-xs text-white/60 mt-2">
        Asesoría jurídica profesional en Colombia
      </p>
    </footer>
  );
};

export default Footer;