import React from 'react';
import { Scale, FileText, Settings, FileCheck, Laptop, Shield } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Scale,
      badge: "PROTECCIÓN",
      title: "Acciones de Tutela",
      description: "Protección inmediata de tus derechos fundamentales ante vulneraciones de entidades públicas o privadas."
    },
    {
      icon: FileText,
      badge: "GESTIÓN",
      title: "Derechos de Petición",
      description: "Garantizamos respuestas oportunas y efectivas a tus solicitudes ante cualquier entidad."
    },
    {
      icon: Settings,
      badge: "REPRESENTACIÓN",
      title: "Procesos Legales",
      description: "Representación jurídica integral en casos civiles, laborales, administrativos y comerciales."
    },
    {
      icon: FileCheck,
      badge: "APELACIÓN",
      title: "Impugnaciones",
      description: "Recursos y apelaciones contra decisiones administrativas o judiciales desfavorables."
    },
    {
      icon: Laptop,
      badge: "DIGITAL",
      title: "Consultoría Digital",
      description: "Asesoría jurídica online inmediata. Resuelve tus dudas legales desde cualquier lugar."
    },
    {
      icon: Shield,
      badge: "PREVENCIÓN",
      title: "Protección Legal",
      description: "Estrategias preventivas para proteger tus derechos y evitar conflictos futuros."
    }
  ];

  return (
    <section id="servicios" className="relative w-full py-8 md:py-12 lg:py-16 bg-white">
      {/* Línea separadora superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 border-t-2 border-[oklch(0.78_0.12_70)]" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-sm font-medium text-[oklch(0.556_0_0)] uppercase tracking-wider mb-4">
            SERVICIOS ESPECIALIZADOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[oklch(0.145_0_0)]">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-[oklch(0.556_0_0)] max-w-3xl mx-auto leading-relaxed">
            Soluciones jurídicas especializadas para cada necesidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 text-center 
                         transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 
                         hover:border-[oklch(0.78_0.12_70)]/30 cursor-pointer relative overflow-hidden"
            >
              {/* Badge superior */}
              <div className="inline-flex items-center px-3 py-1 bg-[oklch(0.78_0.12_70)]/10 text-[oklch(0.78_0.12_70)] 
                             text-xs font-bold uppercase tracking-wider rounded-full mb-4
                             transition-all duration-300 group-hover:bg-[oklch(0.78_0.12_70)] group-hover:text-[oklch(0.145_0_0)]">
                {service.badge}
              </div>

              {/* Icono principal */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                               bg-[oklch(0.78_0.12_70)]/10 rounded-full 
                               transition-all duration-300 
                               group-hover:bg-[oklch(0.78_0.12_70)]/20 
                               group-hover:scale-110 
                               group-hover:rotate-6">
                  <service.icon 
                    className="text-[oklch(0.78_0.12_70)] transition-all duration-300 
                              group-hover:text-[oklch(0.78_0.12_70)] group-hover:scale-110" 
                    size={40}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl md:text-2xl font-bold text-[oklch(0.145_0_0)] mb-4 leading-tight 
                           min-h-[3.5rem] flex items-center justify-center
                           transition-colors duration-300 group-hover:text-[oklch(0.32_0.12_265)]">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base text-[oklch(0.556_0_0)] leading-relaxed mb-4 
                          min-h-[5rem] transition-colors duration-300 group-hover:text-[oklch(0.145_0_0)]">
                {service.description}
              </p>

              {/* Indicador "Más información" que aparece en hover */}
              {/* <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex items-center text-[oklch(0.78_0.12_70)] font-semibold text-sm">
                  Más información
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div> */}

              {/* Barra inferior animada */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[oklch(0.78_0.12_70)] to-[oklch(0.78_0.12_70)]/80 
                               transform -translate-x-full transition-transform duration-500 ease-out 
                               group-hover:translate-x-0"></div>
              </div>

              {/* Efecto de resplandor en hover (opcional) */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 pointer-events-none
                            bg-gradient-to-br from-[oklch(0.78_0.12_70)]/5 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Barra inferior con características adicionales */}
        {/* <div className="mt-12 md:mt-16 bg-[oklch(0.32_0.12_265)] rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {[
              'Atención Personalizada',
              'Resultados Garantizados',
              'Confidencialidad Total',
              'Disponibilidad 24/7'
            ].map((feature, index) => (
              <div key={index} className="flex items-center text-white">
                <div className="w-4 h-4 bg-[oklch(0.78_0.12_70)] rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="font-semibold text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}