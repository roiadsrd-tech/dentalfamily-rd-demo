import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, MapPin, Phone, Clock, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

const CLINIC = {
  name: "Dental Family Center",
  tagline: "Your Smile, Our Passion",
  specialty: "Odontología Integral & Estética",
  address: "C. Federico Geraldino #83, Ensanche Paraíso, Plaza Mezzaluna, Piso 2, Local 18",
  sector: "Ensanche Paraíso, Santo Domingo",
  phone: "809-231-2153",
  phoneDisplay: "(809) 231-2153",
  email: "dentalfamilycenterlmb@gmail.com",
  hours: "Lun–Vie 9:00 AM – 6:00 PM | Sáb 9:00 AM – 1:00 PM",
  whatsappUrl: "https://wa.me/18092312153?text=Hola%2C%20vi%20el%20portafolio%20web%20de%20Dental%20Family%20Center%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20evaluaci%C3%B3n.",
  instagramUrl: "https://www.instagram.com/dentalfamily.rd/",
  logo: "./media/logo_real.jpg"
};

const SERVICES = [
  {
    slug: "ortodoncia-invisalign",
    title: "Ortodoncia e Invisalign®",
    kicker: "Alineación y Función",
    summary: "Corrección anatómica y funcional de la dentadura mediante alineadores transparentes Invisalign® y aparatología fija de alta precisión.",
    description: "Evaluamos integralmente la oclusión y la estética facial para diseñar un plan de alineamiento que devuelva la simetría y armonía a tu sonrisa.",
    features: [
      {
        title: "Invisalign® Invisible",
        desc: "Alineadores removibles y transparentes que se adaptan a tu ritmo de vida sin alterar tu estética diaria."
      },
      {
        title: "Aparatología Biomecánica",
        desc: "Brackets de precisión para casos de alta complejidad oclusal y corrección de apiñamiento severo."
      },
      {
        title: "Armonía Oclusal",
        desc: "Optimización de la masticación previniendo el desgaste prematuro del esmalte y molestias articulares."
      }
    ],
    photos: [
      {
        src: "./media/post_3.jpg",
        alt: "Detalle clínico de ortodoncia de precisión"
      },
      {
        src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
        alt: "Alineación y estética dental"
      },
      {
        src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
        alt: "Sonrisa equilibrada y saludable"
      }
    ]
  },
  {
    slug: "estetica-dental-rehabilitacion",
    title: "Rehabilitación y Estética Dental",
    kicker: "Restauración de Confianza",
    summary: "Diseño de sonrisa de mínima invasión, carillas cerámicas, blanqueamiento clínico y restauraciones con biomateriales de alta fidelidad.",
    description: "Combinamos ciencia biomimética y arte visual para recrear la translucidez, textura y tonalidad natural de tus dientes, devolviendo la vitalidad a tu expresión.",
    features: [
      {
        title: "Carillas Cerámicas",
        desc: "Micro-láminas biocompatibles diseñadas para perfeccionar textura, forma y tonalidad sin desgaste innecesario."
      },
      {
        title: "Blanqueamiento Clínico",
        desc: "Aclaramiento seguro y supervisado que respeta la integridad del esmalte y la sensibilidad gingival."
      },
      {
        title: "Coronas y Puentes en Zirconia",
        desc: "Rehabilitación estructural de piezas ausentes o dañadas con resistencia duradera y apariencia idéntica al diente natural."
      }
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80",
        alt: "Toma de color y valoración estética"
      },
      {
        src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
        alt: "Resultado de restauración estética dental"
      },
      {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
        alt: "Instrumental clínico de precisión estética"
      }
    ]
  },
  {
    slug: "odontopediatria",
    title: "Odontopediatría",
    kicker: "Atención Infantil",
    summary: "Cuidado especializado para bebés, niños y adolescentes en un espacio pensado para construir experiencias serenas y libres de temor.",
    description: "Acompañamos el crecimiento dental de tus hijos con técnicas adaptadas a su etapa de desarrollo, fomentando el autocuidado con ternura y dedicación.",
    features: [
      {
        title: "Ambiente Sin Ansiedad",
        desc: "Protocolos clínicos diseñados para que la visita al odontólogo sea una experiencia positiva y educativa."
      },
      {
        title: "Prevención Temprana",
        desc: "Aplicación de sellantes protectores, fluorización tópica y vigilancia del desarrollo de los maxilares."
      },
      {
        title: "Guía para Padres",
        desc: "Asesoría continua sobre higiene infantil, control de hábitos y nutrición favorable para los dientes de leche."
      }
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
        alt: "Atención pediátrica dental cálida y paciente"
      },
      {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        alt: "Espacio clínico adaptado para familias"
      },
      {
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        alt: "Ambiente de tranquilidad en consultorio"
      }
    ]
  }
];

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Match /servicios/:slug
  const serviceMatch = currentHash.match(/^#\/servicios\/([a-zA-Z0-9_-]+)/);
  const activeServiceSlug = serviceMatch ? serviceMatch[1] : null;
  const currentService = activeServiceSlug ? SERVICES.find(s => s.slug === activeServiceSlug) : null;

  return (
    <div className="site-wrapper">
      {/* Sticky Navigation */}
      <nav className="site-nav" aria-label="Navegación principal">
        <div className="container">
          <div className="site-nav-inner">
            <a href="#/" className="site-brand">
              <img
                src={CLINIC.logo}
                alt={CLINIC.name}
                className="site-brand-logo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="site-brand-text">
                <span className="site-brand-name">{CLINIC.name}</span>
                <span className="site-brand-sub">{CLINIC.sector}</span>
              </div>
            </a>

            <ul className="site-nav-links">
              <li><a href="#/" className="site-nav-link">Inicio</a></li>
              <li><a href="#filosofia" className="site-nav-link">Filosofía</a></li>
              <li><a href="#servicios" className="site-nav-link">Especialidades</a></li>
              <li><a href="#tecnologia" className="site-nav-link">Tecnología</a></li>
              <li><a href="#contacto" className="site-nav-link">Sede & Contacto</a></li>
            </ul>

            <div className="site-nav-actions">
              <a
                href={CLINIC.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={17} />
                <span>Agendar Cita</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* View Switcher based on Hash */}
      {currentService ? (
        /* Dedicated Service Detail Page */
        <main className="service-detail-view">
          <section className="section service-detail-header">
            <div className="container">
              <a href="#/servicios" className="btn-outline" style={{ marginBottom: '2rem' }}>
                <ArrowLeft size={16} />
                <span>Volver al inicio</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <BespokeServiceIcon
                  title={currentService.title}
                  category={currentService.kicker}
                  index={SERVICES.findIndex(s => s.slug === currentService.slug)}
                  size={52}
                />
                <div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--accent)'
                  }}>
                    {currentService.kicker}
                  </span>
                  <h1 className="service-detail-title">{currentService.title}</h1>
                </div>
              </div>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                maxWidth: '46rem',
                lineHeight: 1.6
              }}>
                {currentService.description}
              </p>
            </div>
          </section>

          <section className="section" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
            <div className="container">
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)'
              }}>
                Enfoque Clínico & Metodología
              </h2>

              <div className="service-features-grid">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="service-feature-card">
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                      color: 'var(--text-primary)'
                    }}>
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '4rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)'
                }}>
                  Registro Visual del Tratamiento
                </h2>

                <div className="service-gallery-grid">
                  {currentService.photos.map((photo, pIdx) => (
                    <div key={pIdx} className="service-gallery-item">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="service-gallery-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Block */}
              <div style={{
                marginTop: '4rem',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem'
              }}>
                <div style={{ maxWidth: '36rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.9rem',
                    lineHeight: 1.2,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)'
                  }}>
                    ¿Deseas evaluar tu caso con nuestros especialistas?
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    Atención personalizada en Plaza Mezzaluna, Ensanche Paraíso. Verificamos tu seguro médico (ARS) previamente.
                  </p>
                </div>

                <a
                  href={`https://wa.me/18092312153?text=Hola%2C%20quisiera%20agendar%20una%20consulta%20para%20${encodeURIComponent(currentService.title)}%20en%20Dental%20Family%20Center.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
                >
                  <MessageCircle size={18} />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* Home Page View with 5+ Semantic Sections */
        <main>
          {/* SECTION 1: Swiss Technical Dossier Hero */}
          <section className="section" id="inicio" style={{ paddingTop: '2.5rem' }}>
            <div className="container">
              <div className="dossier-grid">
                <div className="dossier-header-bar">
                  <span>SANTO DOMINGO · ENSANCHE PARAÍSO</span>
                  <span>PLAZA MEZZALUNA · PISO 2 · LOCAL 18</span>
                  <span>COBERTURA ARS ACTIVA</span>
                </div>

                <div className="dossier-hero-content">
                  <div>
                    <h1 className="hero-title">
                      Cuidado integral para tu sonrisa
                    </h1>
                    <p className="hero-subtitle">
                      En Dental Family Center combinamos precisión clínica y calidez familiar en Ensanche Paraíso para brindarte la tranquilidad de sonreír con total confianza.
                    </p>
                  </div>

                  <div className="hero-cta-group">
                    <a
                      href={CLINIC.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <MessageCircle size={18} />
                      <span>Agendar cita de evaluación</span>
                    </a>

                    <a href="#servicios" className="btn-outline">
                      <span>Ver especialidades</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="dossier-hero-media">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80"
                    alt="Atención cercana y profesional en Dental Family Center"
                    className="hero-image"
                  />
                </div>

                <div className="dossier-meta-footer">
                  <div className="dossier-meta-cell">
                    <span className="meta-label">Ubicación Verificada</span>
                    <span className="meta-value">C. Federico Geraldino #83</span>
                  </div>
                  <div className="dossier-meta-cell">
                    <span className="meta-label">Contacto Directo</span>
                    <span className="meta-value">809-231-2153</span>
                  </div>
                  <div className="dossier-meta-cell">
                    <span className="meta-label">Horario de Consultas</span>
                    <span className="meta-value">Lun–Vie 9AM–6PM | Sáb 9AM–1PM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Anti-Sterile Philosophy Manifesto */}
          <section className="section" id="filosofia">
            <div className="container">
              <div className="philosophy-card">
                <p className="philosophy-quote">
                  “Creemos que una visita al dentista debería sentirse como una pausa atenta — un momento donde te cuidan, te escuchan y salen las cosas bien hechas.”
                </p>

                <div className="philosophy-details-grid">
                  <div>
                    <h3 className="detail-item-title">Beneficio Exclusivo</h3>
                    <p className="detail-item-desc">
                      15% de beneficio disponible para tarjetahabientes de Banreservas en tratamientos seleccionados.
                    </p>
                  </div>
                  <div>
                    <h3 className="detail-item-title">Seguros Médicos ARS</h3>
                    <p className="detail-item-desc">
                      Aceptamos las principales ARS del país para que accedas a tu tratamiento con cobertura validada.
                    </p>
                  </div>
                  <div>
                    <h3 className="detail-item-title">Atención Multidisciplinaria</h3>
                    <p className="detail-item-desc">
                      Planes integrales para niños, adultos y toda la familia en un entorno moderno y acogedor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Architectural Services Editorial */}
          <section className="section" id="servicios">
            <div className="container">
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)'
                }}>
                  Disciplinas Clínicas
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.1,
                  marginTop: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  Especialidades diseñadas para toda la familia
                </h2>
              </div>

              <div className="services-editorial-list">
                {SERVICES.map((service, index) => (
                  <article key={service.slug} className="service-editorial-row">
                    <div className="service-row-content">
                      <div>
                        <div className="service-row-header">
                          <BespokeServiceIcon
                            title={service.title}
                            category={service.kicker}
                            index={index}
                            size={44}
                          />
                          <div>
                            <span className="service-row-kicker">{service.kicker}</span>
                            <h3 className="service-row-title">{service.title}</h3>
                          </div>
                        </div>

                        <p className="service-row-desc">{service.summary}</p>
                      </div>

                      <div>
                        <a href={`#/servicios/${service.slug}`} className="btn-outline">
                          <span>Conocer más</span>
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>

                    <div className="service-row-media">
                      <img
                        src={service.photos[0].src}
                        alt={service.photos[0].alt}
                        className="service-row-img"
                        loading="lazy"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: Digital Smile Mapping & Technology Schematic */}
          <section className="section" id="tecnologia" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
              <div style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem auto' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)'
                }}>
                  Tecnología & Diagnóstico
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.15,
                  marginTop: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  Simulación de tratamientos y precisión clínica
                </h2>
              </div>

              <TechnicalSchematic />
            </div>
          </section>

          {/* SECTION 5: Three-Step Clinical Consultation Process */}
          <section className="section" id="proceso">
            <div className="container">
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)'
                }}>
                  Protocolo de Atención
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.1,
                  marginTop: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  Cómo cuidamos tu salud paso a paso
                </h2>
              </div>

              <div className="process-grid">
                <div className="process-step-cell">
                  <span className="step-number">01</span>
                  <h3 className="step-title">Evaluación Presencial</h3>
                  <p className="step-desc">
                    Revisión minuciosa de encías, mordida y salud estructural de cada pieza dental para un diagnóstico preciso e individualizado.
                  </p>
                </div>

                <div className="process-step-cell">
                  <span className="step-number">02</span>
                  <h3 className="step-title">Verificación de Cobertura</h3>
                  <p className="step-desc">
                    Validamos los beneficios y coberturas de tu seguro médico (ARS) de forma previa y transparente para tu tranquilidad financiera.
                  </p>
                </div>

                <div className="process-step-cell">
                  <span className="step-number">03</span>
                  <h3 className="step-title">Tratamiento Especializado</h3>
                  <p className="step-desc">
                    Ejecución rigurosa del plan odontológico utilizando instrumental avanzado y biomateriales de alta gama en un ambiente sereno.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: Deep Slate Contrast Closure & Booking */}
          <section className="section section-contrast" id="contacto">
            <div className="container">
              <div style={{ maxWidth: '44rem' }}>
                <h2 className="contrast-headline">
                  Una sonrisa saludable comienza con una conversación.
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Agenda tu cita de evaluación presencial en Ensanche Paraíso y experimenta una odontología cercana, honesta y de alta precisión.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href={CLINIC.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark"
                  >
                    <MessageCircle size={18} />
                    <span>Contactar por WhatsApp</span>
                  </a>

                  <a
                    href={CLINIC.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.92rem',
                      padding: '0.85rem 1.5rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(255, 255, 255, 0.18)'
                    }}
                  >
                    <span>Instagram Oficial</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              <div className="contrast-meta-grid">
                <div>
                  <h4 className="contrast-meta-item-label">Dirección en Santo Domingo</h4>
                  <p className="contrast-meta-item-val">{CLINIC.address}</p>
                </div>

                <div>
                  <h4 className="contrast-meta-item-label">Teléfono & WhatsApp</h4>
                  <p className="contrast-meta-item-val">{CLINIC.phoneDisplay}</p>
                  <p className="contrast-meta-item-val" style={{ marginTop: '0.25rem', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.55)' }}>
                    {CLINIC.email}
                  </p>
                </div>

                <div>
                  <h4 className="contrast-meta-item-label">Horario de Consultas</h4>
                  <p className="contrast-meta-item-val">{CLINIC.hours}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Global Clean Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-inner">
            <span>© {new Date().getFullYear()} {CLINIC.name} · {CLINIC.tagline}</span>
            <span>Ensanche Paraíso · Santo Domingo, República Dominicana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
