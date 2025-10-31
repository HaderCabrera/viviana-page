import React from 'react';
import { CheckCircle, Star, Zap, Shield } from 'lucide-react';

const FinalStats = () => {
  return (
    <section className="py-20 px-6 bg-[oklch(0.145_0_0)] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Casos Resueltos", icon: CheckCircle },
            { number: "98%", label: "Tasa de Éxito", icon: Star },
            { number: "24/7", label: "Atención Disponible", icon: Zap },
            { number: "100%", label: "Confidencialidad", icon: Shield }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <stat.icon className="mx-auto mb-4 text-[oklch(0.78_0.12_70)]" size={40} />
              <div className="text-4xl md:text-5xl font-bold text-[oklch(0.78_0.12_70)] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalStats;