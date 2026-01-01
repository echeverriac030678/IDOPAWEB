import React from 'react';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="bg-brand-orange text-white font-bold text-lg px-2 py-1 rounded">IDO</div>
             <span className="text-white font-bold">Inversiones y Desarrollo Original</span>
          </div>
          <p className="text-sm leading-relaxed">
            Especialistas en soluciones industriales y agrícolas. Calidad técnica para el profesional moderno.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-orange transition-colors">Catálogo Completo</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Política de Envíos</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Garantías</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Contacto Corporativo</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <p className="text-sm mb-2">Zona Industrial II, Galpón 4-A</p>
          <p className="text-sm mb-2">+58 212 555-0199</p>
          <p className="text-sm mb-4">ventas@idoriginal.com</p>
          
          <div className="flex items-center gap-4 mt-4">
             <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors" title="Síguenos en Instagram">
                <InstagramIcon className="w-6 h-6" />
             </a>
             <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors" title="Síguenos en TikTok">
                <TikTokIcon className="w-6 h-6" />
             </a>
             <a href="#" className="text-slate-400 hover:text-brand-green transition-colors" title="Contáctanos por WhatsApp Business">
                <WhatsAppIcon className="w-6 h-6" />
             </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} IDO - Todos los derechos reservados.
      </div>
    </footer>
  );
};