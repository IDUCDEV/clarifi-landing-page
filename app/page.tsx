"use client"

import Image from "next/image"

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-[#F5F1ED] text-[#001a3a]">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1ED]/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-figura-emuA6Y6xGWKvFPhTQlbAtx9xDJu6X7.png"}
              alt="ClariFi"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-[#001a3a]">ClariFi</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm font-medium hover:text-[#FFAFCC] transition">
              Características
            </a>
            <a href="#download" className="text-sm font-medium hover:text-[#FFAFCC] transition">
              Descargar
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-[#A2D2FF] text-[#001a3a] font-semibold text-sm hover:shadow-lg transition hover:bg-[#BDE0FE]"
            >
              Abrir App
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC8DD]/30 backdrop-blur-sm border border-[#FFC8DD]/60 mb-6">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFAFCC]"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>
                  <span className="text-sm font-medium">Versión 1.0 - Ahora disponible</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
                  Tus finanzas
                  <br />
                  <span className="text-[#A2D2FF]">bajo control</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  Gestiona tus ingresos, gastos y presupuestos en una app intuitiva. Visualiza tu progreso financiero y
                  toma decisiones informadas.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#download"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FFAFCC] text-[#001a3a] font-bold shadow-xl hover:shadow-2xl transition transform hover:scale-105 hover:bg-[#FFC8DD]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Descargar APK
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#001a3a] text-[#001a3a] font-bold hover:bg-[#CDB4DB] hover:text-white hover:border-[#CDB4DB] transition"
                >
                  Ver características
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div>
                  <p className="text-2xl font-bold text-[#FFAFCC]">50K+</p>
                  <p className="text-sm text-gray-600">Usuarios activos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#CDB4DB]">4.8★</p>
                  <p className="text-sm text-gray-600">Calificación</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#BDE0FE]">99.9%</p>
                  <p className="text-sm text-gray-600">Disponibilidad</p>
                </div>
              </div>
            </div>

            {/* Right - App Mockup */}
            <div className="relative h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#A2D2FF]/10 rounded-3xl blur-3xl" />
              <div className="relative z-10 w-full max-w-sm">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/80">
                  <div className="aspect-square bg-[#A2D2FF] p-6 flex flex-col items-center justify-center text-[#001a3a] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-20 h-20 bg-[#001a3a] rounded-full" />
                      <div className="absolute bottom-8 left-4 w-32 h-32 bg-[#001a3a] rounded-full" />
                    </div>
                    <div className="relative z-10 text-center">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>
                      <h3 className="text-2xl font-bold mb-2">$15,234.50</h3>
                      <p className="text-[#001a3a]/80">Saldo Total</p>
                      <div className="mt-6 flex gap-2 justify-center">
                        <div className="h-2 w-8 bg-[#001a3a]/60 rounded-full" />
                        <div className="h-2 w-8 bg-[#001a3a]/40 rounded-full" />
                        <div className="h-2 w-8 bg-[#001a3a]/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto h-px bg-[#FFC8DD]" />
      </div>

      {/* Features Section - Premium Cards */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Funciones que transforman
              <br />
              tu gestión financiera
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas poderosas diseñadas para tu éxito financiero
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>',
                title: "Seguimiento de Transacciones",
                desc: "Registra ingresos y gastos con categorías personalizadas",
                bgColor: "bg-[#FFC8DD]",
                hoverBg: "hover:bg-[#FFC8DD]",
                iconColor: "text-black",
                textColor: "text-[#FFAFCC]",
              },
              {
                iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
                title: "Presupuestos Inteligentes",
                desc: "Crea límites por categoría y recibe alertas automáticas",
                bgColor: "bg-[#BDE0FE]",
                hoverBg: "hover:bg-[#BDE0FE]",
                iconColor: "text-black",
                textColor: "text-[#A2D2FF]",
              },
              {
                iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
                title: "Alertas en Tiempo Real",
                desc: "Notificaciones sobre presupuestos y saldos bajos",
                bgColor: "bg-[#CDB4DB]",
                hoverBg: "hover:bg-[#CDB4DB]",
                iconColor: "text-black",
                textColor: "text-[#CDB4DB]",
              },
              {
                iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
                title: "Gráficas Detalladas",
                desc: "Visualiza tus patrones de gasto con análisis visual",
                bgColor: "bg-[#FFC8DD]",
                hoverBg: "hover:bg-[#FFC8DD]",
                iconColor: "text-black",
                textColor: "text-[#FFAFCC]",
              },
              {
                iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
                title: "Múltiples Cuentas",
                desc: "Gestiona efectivo, banco y tarjeta en un solo lugar",
                bgColor: "bg-[#BDE0FE]",
                hoverBg: "hover:bg-[#BDE0FE]",
                iconColor: "text-black",
                textColor: "text-[#A2D2FF]",
              },
              {
                iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
                title: "100% Seguro",
                desc: "Encriptación de grado empresarial para tus datos",
                bgColor: "bg-[#CDB4DB]",
                hoverBg: "hover:bg-[#CDB4DB]",
                iconColor: "text-black",
                textColor: "text-[#CDB4DB]",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white border border-white/60 hover:border-white/100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bgColor} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: feature.iconSvg }} className={feature.iconColor} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${feature.textColor}`}>{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClariFi Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl font-bold mb-8">
                ¿Por qué elegir
                <br />
                <span className="text-[#BDE0FE]">ClariFi?</span>
              </h2>

              <div className="space-y-6">
                {[
                  "Gestión completa de finanzas personales en una app",
                  "Interfaz intuitiva sin necesidad de capacitación",
                  "Sincronización automática entre dispositivos",
                  "Soporte dedicado y actualizaciones constantes",
                  "Totalmente libre de cargos ocultos",
                  "Protección de datos con estándares internacionales",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#FFAFCC] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20,6 9,17 4,12"/></svg>
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#BDE0FE]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[#A2D2FF] rounded-3xl p-12 text-[#001a3a] space-y-8">
                <div>
                  <p className="text-sm font-semibold opacity-80 mb-2">Este Mes</p>
                  <p className="text-4xl font-bold">$2,847.32</p>
                  <p className="text-sm opacity-75 mt-1">Gastado en categorías</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-75 mb-1">Comida</p>
                    <p className="font-bold">$487</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-75 mb-1">Transporte</p>
                    <p className="font-bold">$320</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-75 mb-1">Entretenimiento</p>
                    <p className="font-bold">$650</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-75 mb-1">Otros</p>
                    <p className="font-bold">$1,390</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-75">Presupuesto disponible</p>
                  <div className="mt-2 w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Download */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#001a3a]">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">Transforma tu relación con el dinero</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Descarga ClariFi hoy y comienza a gestionar tus finanzas como nunca antes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#FFAFCC] text-[#001a3a] font-bold shadow-xl hover:shadow-2xl transition transform hover:scale-105 hover:bg-[#FFC8DD]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Descargar APK
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-[#BDE0FE] hover:text-[#001a3a] hover:border-[#BDE0FE] transition"
            >
              Más información
            </a>
          </div>

          <p className="text-sm opacity-75 pt-4">Disponible en iOS y Android • Sin cargos ocultos</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1820] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-figura-emuA6Y6xGWKvFPhTQlbAtx9xDJu6X7.png"
                  alt="ClariFi"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-bold text-lg">ClariFi</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gestión de finanzas personales simple, poderosa y accesible para todos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Producto</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#features" className="hover:text-[#FFAFCC] transition">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Seguridad
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-[#FFAFCC] transition">
                    Descargar
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFAFCC] transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
            <p>&copy; 2025 ClariFi. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FFAFCC] transition">
                Twitter
              </a>
              <a href="#" className="hover:text-[#FFAFCC] transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#FFAFCC] transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
