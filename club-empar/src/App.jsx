import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Users, TrendingUp, Shield, Check, Play, Compass, MapPin, X } from 'lucide-react';

// Componente de Ícone do WhatsApp (SVG Oficial)
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LINK DO WHATSAPP 
  const whatsappLink = "https://wa.me/5566992412448?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20se%20tornar%20um%20parceiro.";

  return (
    <div className="min-h-screen bg-[#051209] text-[#e6eee9] font-sans selection:bg-[#cca35e] selection:text-[#051209] relative">
      {/* Fontes personalizadas - Montserrat Exclusiva */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        
        /* Padronizando tudo para Montserrat para um visual clean e moderno */
        .font-serif { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: -0.02em; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        
        .gold-gradient-text {
          background: linear-gradient(to right, #e6c875, #cca35e, #e6c875);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
        }

        /* Animações de Órbita Personalizadas */
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-cw { animation: spin-cw 30s linear infinite; }
        .orbit-ccw { animation: spin-ccw 30s linear infinite; }
        .orbit-cw-slow { animation: spin-cw 45s linear infinite; }
        .orbit-ccw-slow { animation: spin-ccw 45s linear infinite; }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        /* Animação Flutuante para os Ícones */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}} />

      {/* Header / Nav */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#051209]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40 border-b border-[#13361e]/50' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 relative flex justify-end items-center h-10 md:h-12">
          
          {/* Logo animado (Absolute para transição fluida ao centro) */}
          <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-20 ${scrolled ? 'left-1/2 -translate-x-1/2 w-48 md:w-64' : 'left-6 md:left-12 translate-x-0 w-40 md:w-52'}`}>
            <img 
              src="https://i.postimg.cc/crtTc8By/image.png" 
              alt="Club Empar" 
              className="w-full h-auto object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(204,163,94,0.1)]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden font-serif text-2xl tracking-widest text-[#cca35e] uppercase">Club Empar</span>
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9db5a5] hover:text-[#cca35e] transition-colors duration-300 font-bold relative z-10">
            <WhatsAppIcon className="w-4 h-4" />
            Quero ser parceiro
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#1a472a] rounded-full mix-blend-screen filter blur-[180px] opacity-40 animate-[pulse_10s_ease-in-out_infinite_alternate]"></div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambiente de restaurante sofisticado" 
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform origin-center animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051209] via-[#051209]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#051209] via-transparent to-[#051209]/60"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:w-2/3 lg:w-3/5">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#cca35e]"></div>
            <span className="text-[#cca35e] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Lançamento Oficial em Abril • Sinop/MT
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#e6eee9] leading-[1.1] tracking-tight mb-8 font-normal">
            Seu restaurante com <span className="italic text-[#cca35e] font-light">movimento constante em Sinop</span>, sem pagar comissão.
          </h1>
          
          <p className="text-xl md:text-2xl font-serif text-[#e6eee9] mb-12 italic opacity-90 font-light">
            Mensalidade fixa. Marketing contínuo. Mais mesas ocupadas.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#cca35e] text-[#051209] overflow-hidden transition-all duration-300 hover:bg-[#e6c875] rounded-sm">
              <WhatsAppIcon className="w-4 h-4 mr-3 relative z-10" />
              <span className="uppercase tracking-widest text-xs font-bold relative z-10">Solicitar Parceria</span>
            </a>
            <div className="flex flex-col justify-center h-full pt-2 sm:pt-0">
              <span className="text-xs uppercase tracking-widest text-[#7c9075] flex items-center gap-2 font-semibold">
                <img src="https://i.postimg.cc/G9J5yDKJ/image.png" alt="Símbolo" className="w-4 h-4 object-contain drop-shadow-[0_0_5px_rgba(204,163,94,0.4)]" />
                Curadoria Rigorosa
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#6b8574] mt-1">Vagas limitadas por categoria.</span>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-24 md:py-32 bg-[#051209] relative border-b border-[#13361e]/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#e6eee9] mb-4">
              A revolução da <span className="italic text-[#cca35e] font-light">economia inteligente</span>
            </h2>
            <p className="text-[#9db5a5] font-light max-w-2xl mx-auto">
              Assista ao vídeo abaixo e entenda o modelo de negócio que valoriza o comércio de <strong className="text-[#e6eee9] font-medium">Sinop</strong> e elimina taxas abusivas.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#cca35e]/20 to-[#1a472a]/40 blur-lg group-hover:blur-xl transition-all duration-500 rounded-2xl"></div>
            <div className="relative aspect-video bg-[#081c0e] rounded-2xl border border-[#13361e] overflow-hidden shadow-2xl flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Preview do Vídeo" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-[#051209]/30"></div>
              <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-[#cca35e]/10 backdrop-blur-md rounded-full border border-[#cca35e]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#cca35e]/20 transition-all duration-500">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[#cca35e] ml-2" fill="currentColor" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#cca35e] text-[#cca35e] overflow-hidden transition-all duration-300 hover:bg-[#cca35e] hover:text-[#051209] rounded-sm">
              <WhatsAppIcon className="w-4 h-4 mr-3 relative z-10" />
              <span className="uppercase tracking-widest text-xs font-bold relative z-10">Quero me livrar das taxas abusivas</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dores Reais do Parceiro */}
      <section className="py-24 md:py-32 bg-[#051209] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 border border-[#13361e]">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Restaurante movimentado e cheio" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 opacity-90"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 border border-[#cca35e]/30 z-0 hidden md:block"></div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#1a472a] rounded-full mix-blend-screen filter blur-[100px] opacity-20 z-0"></div>
            </div>
            
            <div className="order-1 md:order-2 relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif text-[#e6eee9] mb-8 leading-tight">
                Seu restaurante sem depender do <span className="italic text-[#cca35e] font-light">movimento aleatório.</span>
              </h2>
              <div className="space-y-6 text-[#9db5a5] font-light leading-relaxed">
                <p className="text-lg">
                  Sabemos das dores de manter um negócio gastronômico: movimento fraco em dias específicos, dificuldade de fidelização e a margem esmagada pelas altas taxas de aplicativos de entrega.
                </p>
                <p className="text-lg">
                  O <strong className="text-[#e6eee9] font-medium">Club Empar</strong> não é um app de descontos agressivos ou marketplace nacional. Somos o primeiro clube exclusivo de <strong className="text-[#e6eee9] font-medium">Sinop</strong> focado em levar o cliente até a sua mesa.
                </p>
                <div className="pt-6 border-t border-[#13361e] mt-8">
                  <p className="text-[#cca35e] font-bold text-lg mb-2">A Solução Definitiva:</p>
                  <p>Você paga uma <strong className="text-[#e6eee9] font-medium">mensalidade fixa</strong>. Nós entregamos divulgação estratégica contínua e clientes qualificados. <strong className="text-[#e6eee9] font-medium">Sem pagar NENHUMA comissão por venda.</strong></p>
                </div>
                <div className="mt-8">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#cca35e] text-[#051209] overflow-hidden transition-all duration-300 hover:bg-[#e6c875] rounded-sm">
                    <WhatsAppIcon className="w-4 h-4 mr-3 relative z-10" />
                    <span className="uppercase tracking-widest text-xs font-bold relative z-10">Quero fluxo contínuo de clientes</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo Animado: Com vs Sem */}
      <section className="py-24 bg-[#081c0e] border-t border-[#13361e] relative overflow-hidden">
        {/* Efeitos de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#1a472a]/5 blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#e6eee9] mb-4">
              O contraste é <span className="italic text-[#cca35e] font-light">claro.</span>
            </h2>
            <p className="text-[#9db5a5] font-light max-w-2xl mx-auto">
              Veja a diferença entre depender da sorte e ter uma estratégia de captação ativa.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-0 max-w-6xl mx-auto relative">
            
            {/* Card: SEM Club Empar */}
            <div className="flex-1 bg-[#051209] border border-[#13361e] p-8 md:p-12 rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl relative opacity-80 transition-opacity hover:opacity-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-900/10 flex items-center justify-center border border-red-900/30">
                  <X className="w-6 h-6 text-red-500/70" />
                </div>
                <h3 className="text-2xl font-serif text-[#9db5a5]">Sem Club Empar</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  'Movimento incerto e dependente do acaso.',
                  'Refém de taxas abusivas de até 25% em apps.',
                  'Atrai clientes que só buscam "o mais barato".',
                  'Marketing genérico sem impacto real em Sinop.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                    <span className="text-[#7c9075] font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marcador VS Central (Desktop) */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-[#081c0e] border-2 border-[#13361e] rounded-full items-center justify-center shadow-xl">
              <span className="font-serif italic text-[#9db5a5] font-bold">VS</span>
            </div>

            {/* Card: COM Club Empar */}
            <div className="flex-1 bg-[#051209] border border-[#cca35e] p-8 md:p-12 rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl relative shadow-[0_0_40px_rgba(204,163,94,0.15)] overflow-hidden group">
              {/* Efeito de brilho varrendo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cca35e]/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#cca35e]/20 flex items-center justify-center border border-[#cca35e]/50 shadow-[0_0_15px_rgba(204,163,94,0.4)]">
                  <Check className="w-6 h-6 text-[#cca35e]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-serif text-[#e6eee9]">Com Club Empar</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {[
                  'Fluxo contínuo de clientes.',
                  'Mensalidade fixa. ZERO comissão por venda.',
                  'Atrai público premium que consome mais na mesa.',
                  'Divulgação estratégica focada apenas em Sinop.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    <Check className="w-5 h-5 text-[#cca35e] shrink-0 mt-0.5" />
                    <span className="text-[#e6eee9] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          <div className="mt-16 text-center relative z-20">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#cca35e] text-[#cca35e] overflow-hidden transition-all duration-300 hover:bg-[#cca35e] hover:text-[#051209] rounded-sm">
              <WhatsAppIcon className="w-4 h-4 mr-3 relative z-10" />
              <span className="uppercase tracking-widest text-xs font-bold relative z-10">Quero aumentar meu faturamento agora</span>
            </a>
            <p className="mt-4 text-xs text-[#7c9075] uppercase tracking-widest">Acesso direto ao público que valoriza a gastronomia.</p>
          </div>
        </div>
      </section>

      {/* Como Funciona - Bússola em Órbita */}
      <section className="py-24 md:py-40 bg-[#051209] relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a472a] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24 relative z-20">
            <h2 className="text-3xl md:text-5xl font-serif text-[#e6eee9] mb-4">A Parceria <span className="italic text-[#cca35e] font-light">Empar</span></h2>
            <div className="h-[1px] w-24 bg-[#cca35e] mx-auto opacity-50"></div>
          </div>
          
          {/* Desktop Imposing Orbit Layout */}
          <div className="hidden lg:block relative w-full h-[700px] max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#13361e] rounded-full animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#cca35e]/30 rounded-full border-dashed animate-[spin_50s_linear_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-[#13361e] rounded-full animate-[spin_60s_linear_infinite]"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 bg-[#081c0e] rounded-full border border-[#cca35e]/80 flex items-center justify-center shadow-[0_0_60px_rgba(204,163,94,0.25)] backdrop-blur-md">
                 <img src="https://i.postimg.cc/G9J5yDKJ/image.png" alt="Símbolo Club Empar" className="w-14 h-14 object-contain drop-shadow-[0_0_15px_rgba(204,163,94,0.5)]" />
                 <div className="absolute inset-0 border-[3px] border-t-[#cca35e] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_2s_linear_infinite]"></div>
              </div>
              <span className="absolute -bottom-8 font-serif text-[#cca35e] tracking-[0.2em] uppercase text-xs font-bold">A Jornada</span>
            </div>

            {/* Tópico 1 */}
            <div className="absolute top-[15%] left-[5%] w-72 text-right z-30 group">
              <div className="absolute right-[-45px] top-4 w-4 h-4 bg-[#cca35e] rounded-full shadow-[0_0_20px_4px_rgba(204,163,94,0.6)] group-hover:scale-150 transition-all duration-500">
                <div className="absolute inset-0 bg-[#e6c875] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-serif text-4xl text-[#13361e] font-bold absolute -right-12 -top-10 opacity-50 select-none group-hover:text-[#1a472a] transition-colors">01</span>
              <h3 className="text-xl text-[#e6eee9] font-medium tracking-wide mb-2 uppercase text-sm group-hover:text-[#cca35e] transition-colors">A Oferta Estratégica</h3>
              <p className="text-[#9db5a5] font-light text-sm leading-relaxed">Definimos juntos um benefício aplicável e sustentável para o caixa do seu restaurante.</p>
            </div>

            {/* Tópico 2 */}
            <div className="absolute top-[15%] right-[5%] w-72 text-left z-30 group">
              <div className="absolute left-[-45px] top-4 w-4 h-4 bg-[#cca35e] rounded-full shadow-[0_0_20px_4px_rgba(204,163,94,0.6)] group-hover:scale-150 transition-all duration-500">
                <div className="absolute inset-0 bg-[#e6c875] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-serif text-4xl text-[#13361e] font-bold absolute -left-6 -top-10 opacity-50 select-none group-hover:text-[#1a472a] transition-colors">02</span>
              <h3 className="text-xl text-[#e6eee9] font-medium tracking-wide mb-2 uppercase text-sm group-hover:text-[#cca35e] transition-colors">Público Qualificado</h3>
              <p className="text-[#9db5a5] font-light text-sm leading-relaxed">Nossos associados valorizam boas experiências. Eles preferem reinvestir a economia do desconto no próprio salão, como em bebidas ou sobremesas.</p>
            </div>

            {/* Tópico 3 */}
            <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-80 text-center z-30 group">
              <div className="absolute left-1/2 -translate-x-1/2 top-[-45px] w-4 h-4 bg-[#cca35e] rounded-full shadow-[0_0_20px_4px_rgba(204,163,94,0.6)] group-hover:scale-150 transition-all duration-500">
                <div className="absolute inset-0 bg-[#e6c875] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-serif text-4xl text-[#13361e] font-bold absolute left-1/2 -translate-x-1/2 -top-16 opacity-50 select-none group-hover:text-[#1a472a] transition-colors">03</span>
              <h3 className="text-xl text-[#e6eee9] font-medium tracking-wide mb-2 uppercase text-sm group-hover:text-[#cca35e] transition-colors">Ganhos Reais</h3>
              <p className="text-[#9db5a5] font-light text-sm leading-relaxed">Para o cliente: O club se paga sozinho. Para você: Aumento no fluxo, marketing digital contínuo em <strong className="text-[#cca35e]">Sinop</strong> e zero taxas surpresa.</p>
            </div>
          </div>

          {/* Mobile Fallback */}
          <div className="lg:hidden grid gap-12 relative pt-8 border-l border-[#cca35e]/30 ml-4 pl-8">
            {[
              {
                step: '01',
                title: 'A Oferta Estratégica',
                desc: 'Definimos juntos um benefício aplicável e sustentável para o caixa do seu restaurante.'
              },
              {
                step: '02',
                title: 'Público Qualificado',
                desc: 'Nossos associados valorizam boas experiências. Eles preferem reinvestir a economia do desconto no próprio salão, pedindo mais itens.'
              },
              {
                step: '03',
                title: 'Ganhos Reais',
                desc: 'Para o cliente: O club se paga sozinho. Para você: Aumento no fluxo, marketing digital contínuo em Sinop e zero taxas surpresa.'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start group">
                <div className="absolute -left-[40px] top-1 w-4 h-4 bg-[#081c0e] border-2 border-[#cca35e] rounded-full group-hover:bg-[#cca35e] transition-colors duration-300"></div>
                <span className="font-serif text-4xl text-[#13361e] font-bold absolute -left-4 -top-8 opacity-50">{item.step}</span>
                <h3 className="text-xl text-[#cca35e] font-medium tracking-wide mb-2 uppercase text-sm mt-1">{item.title}</h3>
                <p className="text-[#9db5a5] font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-[#081c0e] border-y border-[#13361e]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin />, title: 'Foco Regional', desc: 'Valorizamos empresas de Sinop. Crescimento mútuo do comércio local.' },
              { icon: <Users />, title: 'Público Qualificador', desc: 'Atraia adultos ativos que gostam de sair aos finais de semana e não apenas o público de ofertas extremas.' },
              { icon: <TrendingUp />, title: 'Sem Comissão', desc: 'O assinante ganha o desconto. Você ganha o cliente. Nós não ficamos com porcentagem.' },
              { icon: <Shield />, title: 'Posicionamento Premium', desc: 'Sua marca associada a um club restrito, confiável e desejado na cidade de Sinop.' }
            ].map((ben, idx) => (
              <div key={idx} className="bg-[#051209] p-8 border border-[#13361e] hover:border-[#cca35e]/30 transition-colors duration-300 shadow-md shadow-black/20 text-center md:text-left flex flex-col items-center md:items-start group">
                
                {/* Ícone com Animação e Brilho */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 mb-6 animate-float">
                  <div className="absolute inset-0 bg-[#cca35e] blur-[15px] opacity-40 rounded-full group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-[#cca35e] drop-shadow-[0_0_8px_rgba(204,163,94,0.6)]">
                    {React.cloneElement(ben.icon, { className: 'w-8 h-8' })}
                  </div>
                </div>

                <h4 className="text-[#e6eee9] uppercase tracking-wider text-sm font-bold mb-3">{ben.title}</h4>
                <p className="text-[#7c9075] text-sm font-light leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#cca35e] text-[#051209] overflow-hidden transition-all duration-300 hover:bg-[#e6c875] rounded-sm">
              <WhatsAppIcon className="w-4 h-4 mr-3 relative z-10" />
              <span className="uppercase tracking-widest text-xs font-bold relative z-10">Quero posicionar meu restaurante em Sinop</span>
            </a>
          </div>
        </div>
      </section>

      {/* Parceiros (Prova Social) */}
      <section className="py-24 bg-[#051209] relative border-b border-[#13361e]/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#cca35e] rounded-full mix-blend-screen filter blur-[200px] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="text-[#cca35e] uppercase tracking-[0.2em] text-[10px] font-bold block mb-4">
            Excelência Reconhecida
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#e6eee9] mb-16">
            Estabelecimentos parceiros em <span className="italic text-[#cca35e] font-light">Sinop</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {['Corte Real', 'Osteria Uno', 'La Maison', 'Sea & Salt'].map((name, i) => (
              <div key={i} className="flex items-center justify-center h-24 md:h-32 border border-[#13361e] bg-[#081c0e]/30 hover:bg-[#081c0e]/80 hover:border-[#cca35e]/40 transition-all duration-500 group rounded-sm shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#cca35e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-serif text-lg md:text-2xl tracking-widest text-[#7c9075] group-hover:text-[#e6c875] transition-colors duration-500 opacity-60 group-hover:opacity-100 relative z-10 text-center px-4">
                  {name}
                </span>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-[10px] md:text-xs text-[#6b8574] uppercase tracking-widest font-light">
            E outras marcas selecionadas da nossa região.
          </p>
        </div>
      </section>

      {/* Exclusividade Banner */}
      <section className="py-32 relative flex items-center justify-center text-center overflow-hidden min-h-[800px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599458252573-56ae36120de1?q=80&w=2070&auto=format&fit=crop" 
            alt="Detalhe elegante" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#051209]/95 mix-blend-multiply"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[600px] bg-[#1a472a] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col items-center">
          
          <div className="relative flex items-center justify-center mb-12 w-full max-w-[600px] aspect-square">
            <div className="absolute inset-[18%] md:inset-[22%] border border-[#cca35e]/20 rounded-full"></div>
            <div className="absolute inset-[0%] md:inset-[5%] border border-[#cca35e]/10 rounded-full border-dashed"></div>

            <div className="absolute inset-0 z-0 orbit-cw">
              {['Italiano', 'Japonês', 'Carnes', 'Bistrô'].map((cat, i) => {
                const angle = (i * 360) / 4;
                return (
                  <div key={cat} className="absolute top-1/2 left-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}>
                    <div className="-translate-y-[100px] sm:-translate-y-[130px] md:-translate-y-[160px]">
                      <div className="orbit-ccw">
                        <div style={{ transform: `rotate(-${angle}deg)` }} className="bg-[#051209] border border-[#cca35e]/50 px-3 md:px-5 py-1.5 md:py-2 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(204,163,94,0.2)] backdrop-blur-md">
                          <span className="text-[#cca35e] text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{cat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 z-0 orbit-ccw-slow">
              {['Contemporâneo', 'Docerias', 'Pizzarias', 'Bares & Choperias', 'Hamburguerias'].map((cat, i) => {
                const angle = (i * 360) / 5;
                return (
                  <div key={cat} className="absolute top-1/2 left-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}>
                    <div className="-translate-y-[150px] sm:-translate-y-[200px] md:-translate-y-[240px]">
                      <div className="orbit-cw-slow">
                        <div style={{ transform: `rotate(-${angle}deg)` }} className="bg-[#081c0e] border border-[#cca35e]/20 px-3 md:px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(204,163,94,0.05)] backdrop-blur-md opacity-80 hover:opacity-100 hover:border-[#cca35e]/60 transition-all duration-300">
                          <span className="text-[#9db5a5] text-[9px] md:text-[10px] font-medium uppercase tracking-widest">{cat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 bg-[#081c0e] rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(204,163,94,0.3)] border-2 border-[#cca35e] group">
              <div className="absolute inset-0 bg-[#cca35e] blur-[15px] opacity-20 group-hover:opacity-40 transition-opacity animate-[pulse_2s_ease-in-out_infinite]"></div>
              <img src="https://i.postimg.cc/G9J5yDKJ/image.png" alt="Símbolo Club Empar" className="relative z-10 w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-[0_0_10px_rgba(204,163,94,0.4)] group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          <div className="border border-[#cca35e]/20 p-8 md:p-12 bg-[#081c0e]/80 backdrop-blur-lg shadow-2xl shadow-black/60 rounded-xl max-w-3xl w-full relative z-20">
            <h2 className="text-3xl md:text-5xl font-serif text-[#e6eee9] mb-6">
              Seleção <span className="italic text-[#cca35e] font-light">criteriosa.</span>
            </h2>
            <p className="text-lg text-[#9db5a5] font-light leading-relaxed mb-8">
              Não trabalhamos com um volume desorganizado de parceiros. Buscamos estabelecimentos alinhados com qualidade e reputação. Para garantir resultado, temos vagas limitadas em <strong className="text-[#e6eee9] font-medium">Sinop</strong> para cada segmento (Italiano, Japonês, Carnes, etc). Não seja "mais um".
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#cca35e] text-[#051209] overflow-hidden transition-all duration-300 hover:bg-[#e6c875] rounded-sm w-full md:w-auto">
              <WhatsAppIcon className="w-4 h-4 mr-3 relative z-10" />
              <span className="uppercase tracking-widest text-xs font-bold relative z-10">Quero garantir a vaga do meu segmento</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Final - COM GATILHO DE EMAIL / WHATSAPP */}
      <section id="contato" className="py-32 bg-[#081c0e] border-t border-[#13361e] relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#cca35e] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl relative z-10">
          
          {/* Logo Maior no Final da Página */}
          <div className="w-48 h-48 md:w-56 md:h-56 bg-[#cca35e]/5 rounded-full flex items-center justify-center mx-auto mb-12 border border-[#cca35e]/20 shadow-[0_0_40px_rgba(204,163,94,0.1)] backdrop-blur-sm">
            <img src="https://i.postimg.cc/G9J5yDKJ/image.png" alt="Símbolo Club Empar" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(204,163,94,0.5)]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#e6eee9] mb-12">Pronto para aumentar o seu faturamento em Sinop?</h2>
          
          {/* Botão Principal Final */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex flex-col items-center justify-center px-10 py-5 bg-transparent border border-[#cca35e] text-[#cca35e] overflow-hidden transition-all duration-500 hover:bg-[#cca35e] hover:text-[#051209] rounded-sm w-full md:w-auto"
          >
            <div className="flex items-center relative z-10">
              <WhatsAppIcon className="w-5 h-5 mr-3" />
              <span className="uppercase tracking-[0.15em] text-sm font-bold transition-colors duration-500">
                Quero avaliar parceria comercial
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 bg-[#051209] border-t border-[#13361e] text-center">
        <div className="container mx-auto px-6">
          <p className="text-[#6b8574] text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Club Empar • Sinop, MT. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#051209]/70 backdrop-blur-md border border-[#cca35e] rounded-full flex items-center justify-center text-[#cca35e] hover:bg-[#cca35e] hover:text-[#051209] transition-all duration-500 shadow-[0_0_30px_rgba(204,163,94,0.25)] hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
        
        {/* Ping Animation de Fundo do WhatsApp Flutuante */}
        <div className="absolute inset-0 rounded-full border border-[#cca35e]/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50 group-hover:hidden"></div>
      </a>
    </div>
  );
}