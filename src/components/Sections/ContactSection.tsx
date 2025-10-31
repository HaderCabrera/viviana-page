import React from 'react';
import { Mail, Globe, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.145_0_0)] mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-[oklch(0.556_0_0)]">
            Estamos listos para defender tus derechos
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-[oklch(0.78_0.12_70)] mt-1" size={24} />
              <div>
                <h3 className="font-bold text-[oklch(0.145_0_0)] mb-1">Email</h3>
                <a href="mailto:contacto@lexprotege.com" className="text-[oklch(0.556_0_0)] hover:text-[oklch(0.32_0.12_265)]">
                  contacto@lexprotege.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="text-[oklch(0.78_0.12_70)] mt-1" size={24} />
              <div>
                <h3 className="font-bold text-[oklch(0.145_0_0)] mb-1">Web</h3>
                <a href="https://www.lexprotege.com" className="text-[oklch(0.556_0_0)] hover:text-[oklch(0.32_0.12_265)]">
                  www.lexprotege.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="text-[oklch(0.78_0.12_70)] mt-1" size={24} />
              <div>
                <h3 className="font-bold text-[oklch(0.145_0_0)] mb-1">WhatsApp</h3>
                <a href="https://wa.me/57XXXXXXXXXX" className="text-[oklch(0.556_0_0)] hover:text-[oklch(0.32_0.12_265)]">
                  +57 XXXX XXXX
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-[oklch(0.78_0.12_70)] mt-1" size={24} />
              <div>
                <h3 className="font-bold text-[oklch(0.145_0_0)] mb-1">Cobertura</h3>
                <p className="text-[oklch(0.556_0_0)]">
                  Atención en toda Colombia
                </p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-[oklch(0.145_0_0)] mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-[oklch(0.922_0_0)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.78_0.12_70)]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[oklch(0.145_0_0)] mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-[oklch(0.922_0_0)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.78_0.12_70)]"
                placeholder="+57 300 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[oklch(0.145_0_0)] mb-2">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[oklch(0.922_0_0)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.78_0.12_70)]"
                placeholder="Cuéntanos brevemente tu caso..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[oklch(0.32_0.12_265)] text-white rounded-lg font-bold hover:bg-[oklch(0.78_0.12_70)] hover:text-[oklch(0.145_0_0)] transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;