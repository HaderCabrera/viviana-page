import React from 'react';
import {
  Scale,
  FileText,
  Settings,
  FileCheck,
  MessageCircle
} from 'lucide-react';
import backgroundImage from '@/assets/mainbackground.png';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center text-white px-4 py-16 md:px-6 md:py-20 overflow-hidden z-0"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}
      aria-label="Sección principal de asesoría jurídica"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Content */}
        <div className="space-y-5 relative z-10">
          <div className="inline-block px-5 py-2 bg-[oklch(0.145_0_0_/_0.8)] backdrop-blur-xl border border-[oklch(0.78_0.12_70)] text-[oklch(0.78_0.12_70)] rounded-full text-xs md:text-sm font-bold tracking-wide shadow-xl">
            La nueva generación de asesoría jurídica digital
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Tu defensa
            </span>
            <span className="block text-[oklch(0.78_0.12_70)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              empieza aquí
            </span>
          </h1>

          <span className="text-xl md:text-2xl font-light text-muted leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Protegemos tus derechos con asesoría jurídica clara, ágil y confiable
          </span>

          <p className="text-lg md:text-xl text-[oklch(0.78_0.12_70)] font-semibold italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Porque tus derechos no pueden esperar
          </p>

          <div className="pt-3">
            <a
              href="https://wa.me/57XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[oklch(0.78_0.12_70)] text-[oklch(0.145_0_0)] rounded-full text-lg font-bold hover:bg-[oklch(0.85_0.12_70)] hover:scale-105 transition-all duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-[oklch(0.78_0.12_70_/_0.4)]"
            >
              <MessageCircle size={24} />
              Contáctanos por WhatsApp
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-4">
            {[
              { icon: Scale, text: 'Acciones de Tutela' },
              { icon: FileText, text: 'Derechos de Petición' },
              { icon: Settings, text: 'Procesos Legales' },
              { icon: FileCheck, text: 'Impugnaciones' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-[oklch(0.145_0_0_/_0.85)] backdrop-blur-xl border border-[oklch(0.78_0.12_70_/_0.5)] rounded-md p-3 hover:bg-[oklch(0.145_0_0_/_0.95)] hover:border-[oklch(0.78_0.12_70)] transition-all duration-300 shadow-lg"
              >
                <service.icon
                  className="text-[oklch(0.78_0.12_70)] flex-shrink-0"
                  size={20}
                />
                <span className="text-xs md:text-sm font-semibold text-white">{service.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Empty to show background */}
        <div className="hidden md:block"></div>
      </div>

      {/* Overlay sutil para contraste */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none"></div>

      {/* Stats Bar - Bottom */}
      <div className="absolute bottom-6 left-0 right-0 px-4 md:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[oklch(0.145_0_0_/_0.9)] backdrop-blur-xl border border-[oklch(0.78_0.12_70_/_0.6)] rounded-md p-4 md:p-6 shadow-2xl">
            {[
              { number: '500+', label: 'Casos Exitosos' },
              { number: '98%', label: 'Satisfacción' },
              { number: '24/7', label: 'Disponibilidad' },
              { number: '100%', label: 'Confidencial' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[oklch(0.78_0.12_70)] mb-0.5 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-white font-semibold drop-shadow-md">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
