import React from 'react';
import { Zap, MessageCircle } from 'lucide-react';

const MidCTA = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white border-4 border-bg-personal2 rounded-3xl mx-4 md:mx-6 my-8 md:my-12 shadow-lg">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[oklch(0.145_0_0)]">
            LEXPROTEGE es el nuevo estándar
            <span className="block text-bg-personal2 mt-2">
              del derecho digital
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[oklch(0.556_0_0)] max-w-2xl mx-auto leading-relaxed">
            Donde la justicia se conecta con la tecnología.
            Donde tu caso se convierte en una causa.
          </p>

          {/* CTA Principal */}
          <div className="pt-4">
            <a
              href="https://wa.me/57XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 
                       bg-bg-personal2 text-[oklch(0.145_0_0)] rounded-full 
                       text-lg md:text-xl font-bold 
                       hover:scale-105 hover:shadow-2xl
                       transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-bg-personal2/40"
            >
              <MessageCircle size={28} strokeWidth={2.5} />
              <span>¡Inicia tu defensa YA!</span>
              <Zap size={24} strokeWidth={2.5} className="animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;