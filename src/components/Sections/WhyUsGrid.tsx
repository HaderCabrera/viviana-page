import React from 'react';
import { Users, MessageCircle, Zap, Shield, CheckCircle, Star } from 'lucide-react';

const WhyUsGrid = () => {
  const reasons = [
    {
      icon: Users,
      title: "Especialistas Reales",
      description: "Abogados titulados y con experiencia comprobada en cada área del derecho."
    },
    {
      icon: MessageCircle,
      title: "Comunicación Directa",
      description: "Contacto inmediato por WhatsApp. Sin intermediarios, sin esperas innecesarias."
    },
    {
      icon: Zap,
      title: "Respuesta Rápida",
      description: "Atención ágil y efectiva. Porque tu tiempo y tus derechos son prioridad."
    },
    {
      icon: Shield,
      title: "Confidencialidad Total",
      description: "Tu información y tu caso están protegidos con máxima seguridad y privacidad."
    },
    {
      icon: CheckCircle,
      title: "Estrategia Personalizada",
      description: "Cada caso es único. Diseñamos la mejor estrategia legal para tu situación específica."
    },
    {
      icon: Star,
      title: "Resultados Probados",
      description: "Más de 500 casos exitosos respaldan nuestra experiencia y compromiso."
    }
  ];
  return (
    <section className="py-24 px-6 bg-[oklch(0.97_0_0)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.145_0_0)] mb-4">
            ¿Por Qué Confiar en Nosotros?
          </h2>
          <p className="text-xl text-[oklch(0.556_0_0)] max-w-3xl mx-auto">
            La combinación perfecta entre experiencia legal y tecnología
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 rounded-xl bg-white hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.78_0.12_70)] flex items-center justify-center">
                  <reason.icon className="text-[oklch(0.145_0_0)]" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[oklch(0.145_0_0)]">
                  {reason.title}
                </h3>
                <p className="text-[oklch(0.556_0_0)]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsGrid;