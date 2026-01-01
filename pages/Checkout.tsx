import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { UserDetails } from '../types';
import { CheckCircleIcon } from '../components/Icons';

export const Checkout: React.FC = () => {
  const { cartTotal, clearCart, setView } = useStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState<UserDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light p-4">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg w-full">
          <div className="w-20 h-20 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Pedido Confirmado!</h2>
          <p className="text-slate-600 mb-8">
            Gracias por confiar en IDO. Hemos enviado un correo de confirmación a <span className="font-semibold text-slate-800">{formData.email}</span>.
            Tu orden #IND-{Math.floor(Math.random() * 10000)} está siendo procesada.
          </p>
          <button 
            onClick={() => setView('HOME')}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">Finalizar Compra</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white text-xs">1</span>
                Datos de Envío
            </h2>
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input 
                  required name="fullName" type="text" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                  placeholder="Ej. Juan Pérez"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                <input 
                  required name="email" type="email" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                  placeholder="juan@empresa.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input 
                  required name="phone" type="tel" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                  placeholder="+58 412 1234567"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Dirección</label>
                    <input 
                    required name="address" type="text" 
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                    placeholder="Av. Industrial, Galpón 5"
                    onChange={handleChange}
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad</label>
                    <input 
                    required name="city" type="text" 
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                    placeholder="Valencia"
                    onChange={handleChange}
                    />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Simulation */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white text-xs">2</span>
                    Pago Seguro
                </h2>
                
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg mb-6 text-sm text-blue-800">
                    <p className="font-bold mb-1">Modo Simulación</p>
                    <p>No se realizará ningún cargo real. Esta es una demostración técnica.</p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-brand-orange transition-colors bg-slate-50">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border-2 border-brand-orange flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                            </div>
                            <span className="font-medium text-slate-700">Tarjeta de Crédito / Débito</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-5 bg-slate-300 rounded"></div>
                            <div className="w-8 h-5 bg-slate-300 rounded"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-brand-orange transition-colors opacity-50">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                            <span className="font-medium text-slate-700">PayPal</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                    <div className="flex justify-between items-center mb-4 text-slate-600">
                        <span>Total a Pagar:</span>
                        <span className="text-2xl font-bold text-slate-900">${(cartTotal * 1.16).toFixed(2)}</span>
                    </div>
                    <button 
                        form="checkout-form"
                        disabled={loading}
                        className="w-full bg-brand-orange hover:bg-[#368800] disabled:bg-slate-400 text-white py-4 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center"
                    >
                        {loading ? (
                            <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                            "Confirmar Pedido"
                        )}
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};