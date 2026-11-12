import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Clock, ChevronDown, MessageCircle } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

const DATA = {
  "handle": "dentalfamily.rd",
  "businessName": "Dental Family Center",
  "legalOrFullTitle": "Dental Family Center | Clínica Odontológica Integral",
  "tagline": "Your Smile, Our Passion",
  "industry": "clinics-health",
  "followersEstimate": "1,207 seguidores",
  "hasWebsite": true,
  "leadScore": 95,
  "dossier": {
    "verifiedFacts": [
      {
        "label": "Nombre en Perfil",
        "value": "Dental Family Center",
        "source": "instagram_bio"
      },
      {
        "label": "Especialidades Declaradas",
        "value": "Estética dental, Ortodoncia, Odontopediatría, Cirugía/implant, Endodoncia, Periodoncia",
        "source": "instagram_highlights"
      },
      {
        "label": "Sectores / Ubicaciones Detectadas",
        "value": "Ensanche Paraíso, Plaza Mezzaluna, Santo Domingo",
        "source": "instagram_locations"
      },
      {
        "label": "Materiales o Detalles Técnicos Detectados",
        "value": "Invisalign, Dermapen, Resinas, Blanqueamientos",
        "source": "instagram_captions"
      }
    ],
    "detectedLocations": [
      "Ensanche Paraíso",
      "Plaza Mezzaluna",
      "Santo Domingo"
    ],
    "detectedMaterials": [
      "Invisalign",
      "Dermapen",
      "Resinas"
    ],
    "detectedProjectsFromCaptions": [],
    "missingFields": [
      "Correo electrónico",
      "Dirección física exacta (número de local)"
    ]
  },
  "specialist": {
    "name": "Dirección de Salud · Dental Family Center",
    "role": "Clínica Odontológica Integral",
    "bioParagraph1": "Dental Family Center es una clínica odontológica integral ubicada en el Ensanche Paraíso, Santo Domingo. Nos dedicamos a brindar atención especializada a adultos, niños y familias, enfocándonos en la salud bucal preventiva, estética y especializada.",
    "bioParagraph2": "Nuestro método de trabajo combina la tecnología con un trato humano y profesional. Nos especializamos en tratamientos que van desde la ortodoncia y estética dental hasta la cirugía e implantología, siempre priorizando la prevención y el bienestar integral de nuestros pacientes.",
    "quote": "Tu sonrisa merece ser cuidada con dedicación y confianza.",
    "credentials": [
      "Odontología Integral",
      "Atención Familiar",
      "Santo Domingo, R.D."
    ]
  },
  "stats": [
    {
      "num": "133",
      "label": "publicaciones informativas",
      "source": "instagram_profile"
    },
    {
      "num": "1,207",
      "label": "pacientes conectados",
      "source": "instagram_profile"
    }
  ],
  "contact": {
    "address": "Plaza Mezzaluna, Ensanche Paraíso, Santo Domingo",
    "sector": "Ensanche Paraíso",
    "city": "Santo Domingo, República Dominicana",
    "email": "",
    "phoneDisplay": "809-231-2153",
    "secondaryPhone": "",
    "whatsappNumber": "18092312153",
    "whatsappPrefill": "Hola, vi el portafolio web de Dental Family Center y me gustaría conversar sobre un tratamiento.",
    "instagramUrl": "https://www.instagram.com/dentalfamily.rd/",
    "facebookUrl": "",
    "hours": "Lun–Vie 9AM–6PM | Sáb 9AM–1PM",
    "mapQuery": "Dental Family Center Plaza Mezzaluna Santo Domingo"
  },
  "hero": {
    "kicker": "Estética · Ortodoncia · Odontopediatría",
    "headlinePart1": "Cuidamos la sonrisa de toda",
    "headlineAccent": "tu familia",
    "headlinePart2": "",
    "subtitle": "Clínica odontológica integral en Santo Domingo. Especialistas en salud bucal preventiva, estética y tratamientos especializados para adultos y niños. Aceptamos seguros médicos.",
    "primaryCta": "Agendar cita por WhatsApp",
    "secondaryCta": "Explorar especialidades",
    "locationStamp": "SANTO DOMINGO, R.D.",
    "heroSlides": []
  },
  "manifesto": {
    "kicker": "nuestra filosofía",
    "quotePart1": "La salud bucal es el primer paso hacia el",
    "quoteItalic": "bienestar integral",
    "body": "En Dental Family Center, entendemos que prevenir es mejor que corregir. Trabajamos con un enfoque humano, profesional y tecnológico para devolverte la confianza en tu sonrisa.",
    "ctaText": "Explorar servicios",
    "ctaServiceSlug": "odontologia-integral",
    "photo": ""
  },
  "dataSheet": {
    "projectName": "Dental Family Center",
    "location": "Ensanche Paraíso, Santo Domingo",
    "area": "Clínica Odontológica",
    "typology": "Odontología General, Estética y Especializada",
    "scope": "Atención integral a niños y adultos",
    "materials": "Invisalign, Dermapen, Resinas, Blanqueamiento dental"
  },
  "services": [
    {
      "slug": "odontologia-integral",
      "number": "01",
      "title": "Odontología Integral",
      "kicker": "Salud y prevención",
      "heroTitlePart1": "Atención odontológica para",
      "heroTitleItalic": "toda la familia",
      "patientQuote": "¿Buscas un dentista de confianza en Santo Domingo?",
      "description": "Servicios preventivos y correctivos para niños, jóvenes y adultos en un ambiente profesional y cálido.",
      "challengeTitle": "El enfoque en",
      "challengeItalic": "tu salud",
      "challengeParagraph1": "Resolvemos desde caries y limpiezas hasta problemas de mordida.",
      "challengeParagraph2": "Evaluación personalizada para determinar el tratamiento adecuado según tus necesidades.",
      "features": [
        {
          "title": "Evaluación completa",
          "desc": "Diagnóstico presencial para encías, mordida y caries."
        },
        {
          "title": "Seguros médicos",
          "desc": "Aceptamos las principales ARS para tu comodidad."
        },
        {
          "title": "Atención familiar",
          "desc": "Servicios adaptados para niños y adultos."
        }
      ],
      "deliverable": "Plan de tratamiento personalizado",
      "imageCategory": "odontologia-integral",
      "photos": []
    }
  ],
  "cases": [],
  "process": [
    {
      "step": "01",
      "title": "Contacto",
      "desc": "Agenda tu cita vía WhatsApp al 809-231-2153."
    },
    {
      "step": "02",
      "title": "Evaluación",
      "desc": "Revisión presencial para un diagnóstico preciso."
    },
    {
      "step": "03",
      "title": "Tratamiento",
      "desc": "Ejecución del plan con estándares de calidad y cuidado."
    }
  ],
  "testimonials": [],
  "faqs": [
    {
      "q": "¿Aceptan seguros médicos?",
      "a": "Sí, aceptamos las principales ARS. Te ayudamos a verificar tu cobertura antes de tu cita."
    }
  ],
  "humanQuestions": [],
  "brand": {
    "aestheticName": "Clinical Precision & Humanistic Care",
    "themeMode": "light",
    "pairingId": "spacegrotesk-dmsans",
    "fontDisplay": "Space Grotesk",
    "fontSans": "DM Sans",
    "fontMono": "JetBrains Mono",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,400&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    "heroArchetype": "asymmetric-editorial-gallery",
    "logoAnalysis": {
      "dominantBgHex": "#F0F0F0",
      "primaryMarkHex": "#3B82F6",
      "secondaryAccentHex": "#808080",
      "geometryStyle": "organic-minimal",
      "strokeWeight": "2px",
      "cornerRadius": "12px",
      "motifDescription": "An abstract emblem featuring two stylized human figures (representing family) forming a circular protective embrace around a central tooth silhouette, utilizing a clean blue and grey color palette.",
      "iconDesignRule": "Icons must utilize a consistent 2px stroke weight with rounded terminals and soft corner radii, mirroring the fluid, interconnected curves of the logo's figures."
    },
    "palette": {
      "themeMode": "light",
      "bgPrimary": "#F8FAFC",
      "bgSecondary": "#FFFFFF",
      "bgContrast": "#1E293B",
      "bgWarm": "#F8FAFC",
      "bgDark": "#1E293B",
      "textPrimary": "#1E293B",
      "textDark": "#1E293B",
      "textMuted": "#64748B",
      "textLight": "#F8FAFC",
      "textOnContrast": "#F8FAFC",
      "accent": "#3B82F6",
      "accentHover": "#2563EB",
      "accentSoft": "#DBEAFE",
      "goldAccent": "#D97706",
      "borderHairline": "rgba(20, 22, 25, 0.11)"
    },
    "customVisualConcept": {
      "schematicType": "dental-3d-anatomy",
      "title": "Digital Smile Architecture",
      "subtitle": "Interactive 3D wireframe demonstrating the alignment and structural planning of orthodontic treatments.",
      "annotations": [
        "Occlusal Plane Alignment",
        "Incisal Edge Radius",
        "Gingival Margin Symmetry",
        "Root Axis Projection"
      ]
    },
    "sectionRhythm": [
      "Hero section featuring an asymmetric split: high-quality portrait of a smiling patient on the left, and a clean, minimalist headline with a subtle animated SVG of the logo on the right.",
      "Service grid section using a 'technical-dossier' layout with 1px borders, displaying icons and short descriptions of dental specialties.",
      "Interactive 'Digital Smile Architecture' section where users can toggle between different treatment stages (orthodontics, implants, whitening) to see the 3D schematic update.",
      "Case study gallery using a masonry layout to showcase 'before and after' results, emphasizing the human connection and patient satisfaction.",
      "Footer section featuring a clean, dark-mode contrast block with contact details, office hours, and a map integration for easy navigation."
    ],
    "inspirationRefs": [
      "/inspiration/clinics-health/h11.webp",
      "/inspiration/clinics-health/h12.webp",
      "/inspiration/clinics-health/h13.webp",
      "/inspiration/clinics-health/h14.webp"
    ]
  },
  "templateId": "health-editorial",
  "photoCatalog": [
    {
      "filename": "post_1.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_1.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DWBu6slkdFZ",
      "caption": "Ese “hábito inocente” puede provocar dientes salidos y problemas de mordida 🦷\nMejor prevenir que corregir.\nY recuerda que en nuestro consultorio aceptamos seguros médicos.\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #segurosdesalud",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico publicitario con texto superpuesto, no apto para secciones visuales principales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen con el logo de Dental Family Center y texto informativo sobre hábitos dentales.",
      "projectHint": ""
    },
    {
      "filename": "post_2.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_2.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DWBu6slkdFZ",
      "caption": "Ese “hábito inocente” puede provocar dientes salidos y problemas de mordida 🦷\nMejor prevenir que corregir.\nY recuerda que en nuestro consultorio aceptamos seguros médicos.\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #segurosdesalud",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico publicitario con texto superpuesto, no apto para secciones visuales principales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen con el logo de Dental Family Center y texto sobre la importancia de la corrección dental a tiempo.",
      "projectHint": ""
    },
    {
      "filename": "post_3.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_3.jpg",
      "source": "instagram",
      "width": 1350,
      "height": 1688,
      "postCode": "DPmHRSNka03",
      "caption": "🦷✨¡Una sonrisa en proceso!\nCada cita es un paso mas hacia la sonrisa que siempre quisiste.\n \n📍Plaza Mezzaluna, 2do Nivel. C/Federico Geraldino #83, Distrito Nacional.\n📲(809)-231-2153\n\n#ortodoncia #smilebrighter #sonrisaperfecta #dentalinspo #transformacióndental",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": false,
      "isConstructionOrRough": false,
      "heroScore": 9,
      "qualityReason": "Muestra un caso clínico de ortodoncia (antes y después) de alta calidad, ideal para mostrar resultados.",
      "usableAs": [
        "hero",
        "service",
        "project"
      ],
      "categorySlug": "ortodoncia-invisalign",
      "categoryLabel": "Ortodoncia e Invisalign®",
      "subject": "Comparativa de una sonrisa antes y después de un tratamiento de ortodoncia con brackets.",
      "projectHint": ""
    },
    {
      "filename": "post_4.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_4.jpg",
      "source": "instagram",
      "width": 1264,
      "height": 1584,
      "postCode": "DdkhLKEkQdc",
      "caption": "¡Tenemos un nuevo beneficio para ti! 🦷✨\n\nDisfruta de un 15% de descuento en Dental Family Center con tarjetas @banreservasrd \n\n📍 Plaza Mezzaluna, Ensanche Paraíso\n📲 Agenda tu cita: 809-231-2153\n\nTu sonrisa ahora tiene más beneficios. 💙\n\nAplican restricciones, términos y condiciones. Consulta la elegibilidad del beneficio al momento de agendar.\n\n#DentalFamilyCenter #Banreservas #BeneficiosBanreservas #DentistaSantoDomingo EnsancheParaiso",
      "location": "Dental family center",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico promocional con logos y texto, no apto para secciones visuales principales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico promocional con los logos de Dental Family Center y Banreservas.",
      "projectHint": ""
    },
    {
      "filename": "post_5.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_5.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DXKC_9Ckfl3",
      "caption": "¿Sabías que tu sonrisa puede revelar más sobre tu salud de lo que crees? 🦷\n\nTe compartimos algunos datos curiosos que pueden ayudarte a prevenir desgaste, fracturas y caries silenciosas.\n\nPorque muchas veces no se trata solo de estética, sino de bienestar y prevención \n\nAgenda tu cita con nosotros, y si tienes seguro médico, también puedes consultarnos por esa opción de manera fácil\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico informativo con texto superpuesto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen con el logo de Dental Family Center y texto sobre la dureza del esmalte dental.",
      "projectHint": ""
    },
    {
      "filename": "post_6.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_6.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DXKC_9Ckfl3",
      "caption": "¿Sabías que tu sonrisa puede revelar más sobre tu salud de lo que crees? 🦷\n\nTe compartimos algunos datos curiosos que pueden ayudarte a prevenir desgaste, fracturas y caries silenciosas.\n\nPorque muchas veces no se trata solo de estética, sino de bienestar y prevención \n\nAgenda tu cita con nosotros, y si tienes seguro médico, también puedes consultarnos por esa opción de manera fácil\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico informativo con texto superpuesto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen con el logo de Dental Family Center y texto sobre los efectos del estrés en los dientes.",
      "projectHint": ""
    },
    {
      "filename": "post_7.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_7.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVvm5QFEf4y",
      "caption": "🦷 Las cordales pueden salir sin problemas… o causar dolor, inflamación y presión en otros dientes.\nUn chequeo a tiempo puede evitar complicaciones.\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico informativo con texto superpuesto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen con el logo de Dental Family Center y texto sobre molestias causadas por las cordales.",
      "projectHint": ""
    },
    {
      "filename": "post_8.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_8.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVvm5QFEf4y",
      "caption": "🦷 Las cordales pueden salir sin problemas… o causar dolor, inflamación y presión en otros dientes.\nUn chequeo a tiempo puede evitar complicaciones.\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico informativo con texto superpuesto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen con el logo de Dental Family Center y lista de síntomas relacionados con las cordales.",
      "projectHint": ""
    },
    {
      "filename": "post_9.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_9.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVn_gQZEeGu",
      "caption": "Hoy celebramos la fuerza, la dedicación y la sonrisa de cada mujer.\nGracias por inspirar, cuidar, liderar y transformar el mundo cada día.\n\nEn este Día de la Mujer, celebramos a todas las que hacen que cada sonrisa brille más. ❤️🦷",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Imagen de equipo con superposición de texto promocional, lo que limita su uso editorial en web.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Grupo de cinco profesionales de la salud dental posando juntas en un entorno clínico con texto conmemorativo.",
      "projectHint": ""
    },
    {
      "filename": "post_10.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_10.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVn_gQZEeGu",
      "caption": "Hoy celebramos la fuerza, la dedicación y la sonrisa de cada mujer.\nGracias por inspirar, cuidar, liderar y transformar el mundo cada día.\n\nEn este Día de la Mujer, celebramos a todas las que hacen que cada sonrisa brille más. ❤️🦷",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Fotografía de especialistas con texto conmemorativo del Día de la Mujer, adecuada solo para redes sociales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Tres especialistas dentales posando de espaldas y sonriendo para una celebración del Día de la Mujer.",
      "projectHint": ""
    },
    {
      "filename": "post_11.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_11.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVdkcL5EZOL",
      "caption": "El verdadero “new year, new me” empieza con colágeno.\n\n#DentalFamilyRD #dermapen #pielsana #colageno #cuidadopersonal",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico informativo con texto predominante, no apto para secciones visuales principales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico informativo sobre el cuidado de la piel y el colágeno con el logo de la clínica.",
      "projectHint": ""
    },
    {
      "filename": "post_12.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_12.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVdkcL5EZOL",
      "caption": "El verdadero “new year, new me” empieza con colágeno.\n\n#DentalFamilyRD #dermapen #pielsana #colageno #cuidadopersonal",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Infografía de servicios con diseño gráfico, útil para información pero no como recurso visual de impacto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Lista de beneficios del tratamiento Dermapen presentada en un formato gráfico limpio.",
      "projectHint": ""
    },
    {
      "filename": "post_13.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_13.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVL0D90kbgD",
      "caption": "No todos los dientes se mueven igual.\nAlgunos necesitan alineadores, otros necesitan fuerza tradicional. 🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico de comparación con texto, diseño funcional para redes pero no editorial.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico comparativo entre brackets tradicionales e Invisalign con fondo azul.",
      "projectHint": ""
    },
    {
      "filename": "post_14.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_14.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DVL0D90kbgD",
      "caption": "No todos los dientes se mueven igual.\nAlgunos necesitan alineadores, otros necesitan fuerza tradicional. 🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Texto explicativo sobre tratamientos, carece de profundidad visual fotográfica.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Texto explicativo sobre las diferencias y ventajas de los brackets y los alineadores Invisalign.",
      "projectHint": ""
    },
    {
      "filename": "post_15.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_15.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DU5n6uYkQlt",
      "caption": "El mal aliento no siempre es por lo que comiste 👀\nA veces es lo que se quedó entre tus dientes🦷🍪\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico de pregunta educativa con diseño minimalista basado en texto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Pregunta gráfica sobre las consecuencias de no utilizar hilo dental.",
      "projectHint": ""
    },
    {
      "filename": "post_16.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_16.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DU5n6uYkQlt",
      "caption": "El mal aliento no siempre es por lo que comiste 👀\nA veces es lo que se quedó entre tus dientes🦷🍪\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico informativo sobre higiene dental con alta carga de texto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Información educativa sobre la acumulación de placa y la importancia del hilo dental.",
      "projectHint": ""
    },
    {
      "filename": "post_17.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_17.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DUntbiekTxJ",
      "caption": "🚨 Si tu boca está dando señales… no la ignores. El dolor no avisa dos veces.🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico publicitario con texto superpuesto sobre fondo ilustrado, no adecuado como imagen principal Hero.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Diseño gráfico con el logotipo del centro y la frase Señales de que necesitas ir al dentista ¡YA!",
      "projectHint": ""
    },
    {
      "filename": "post_18.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_18.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DUntbiekTxJ",
      "caption": "🚨 Si tu boca está dando señales… no la ignores. El dolor no avisa dos veces.🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Imagen informativa con viñetas de texto explicativas sobre síntomas dentales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Diseño gráfico con lista numerada sobre sangrado de encías y sensibilidad dental.",
      "projectHint": ""
    },
    {
      "filename": "post_19.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_19.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DUVm9SgEXf5",
      "caption": "Al igual que tu vehículo, tu boca también necesita mantenimiento periódico. 🚗🦷⏱️\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Placa gráfica de tono azul con tipografía grande y el logo de la clínica.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Diseño gráfico azul con el texto ¿Cada cuánto debo ir al dentista? y un trazo en forma de sonrisa.",
      "projectHint": ""
    },
    {
      "filename": "post_20.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_20.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DUVm9SgEXf5",
      "caption": "Al igual que tu vehículo, tu boca también necesita mantenimiento periódico. 🚗🦷⏱️\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico educativo en fondo azul con puntos Informativos sobre revisiones dentales.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Placa informativa azul con cuatro recomendaciones explicativas sobre profilaxis y chequeos generales.",
      "projectHint": ""
    },
    {
      "filename": "post_21.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_21.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DS-PL3DkfM-",
      "caption": "🦷✨ No todas las pastas dentales son iguales. La mejor para ti depende de tus necesidades… ¿Sabes cuál estás usando? \n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Diseño publicitario digital con texto grande sobre el cuidado dental.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Diseño azul promocional con el texto La pasta dental ¡ideal! y el isotipo de la marca.",
      "projectHint": ""
    },
    {
      "filename": "post_22.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_22.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DS-PL3DkfM-",
      "caption": "🦷✨ No todas las pastas dentales son iguales. La mejor para ti depende de tus necesidades… ¿Sabes cuál estás usando? \n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico instructivo con texto técnico de pastas dentales sugeridas según patología.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Texto informativo azul desglosando la pasta dental adecuada para sensibilidad, encías, manchas y niños.",
      "projectHint": ""
    },
    {
      "filename": "post_23.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_23.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DSsor9fEVWG",
      "caption": "El error más común en Navidad: pensar que el cepillo también está de vacaciones 😅\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #navidad",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Imagen promocional de temporada festiva compuesta principalmente por tipografía.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Diseño festivo con destellos gráficos y el título Errores dentales más comunes en Navidad.",
      "projectHint": ""
    },
    {
      "filename": "post_24.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_24.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DSsor9fEVWG",
      "caption": "El error más común en Navidad: pensar que el cepillo también está de vacaciones 😅\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #navidad",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico de texto en viñetas con recomendaciones preventivas navideñas.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Lista explicativa con viñetas de errores a evitar en salud dental durante las festividades de fin de año.",
      "projectHint": ""
    },
    {
      "filename": "post_25.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_25.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DSXiwIEkb2F",
      "caption": "No ignores la sensibilidad, hoy es molestia, mañana puede ser dolor 🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Imagen de tipo gráfico informativo con texto tipográfico y baja calidad fotográfica directa.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico promocional con el título ¿Sensibilidad? Esto te ayuda y logotipo de la clínica.",
      "projectHint": ""
    },
    {
      "filename": "post_26.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_26.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DSXiwIEkb2F",
      "caption": "No ignores la sensibilidad, hoy es molestia, mañana puede ser dolor 🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Diseño gráfico educativo con lista de puntos y texto sobrepuesto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico educativo con una lista numerada de consejos para reducir la sensibilidad dental.",
      "projectHint": ""
    },
    {
      "filename": "post_27.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_27.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DSFhsFNEdsU",
      "caption": "Dientes felices, selfies felices 😁🎄\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Portada gráfica con tipografía y diseño temático de temporada.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Portada de contenido gráfico con el título Guía de Supervivencia Dental Navideña.",
      "projectHint": ""
    },
    {
      "filename": "post_28.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_28.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DSFhsFNEdsU",
      "caption": "Dientes felices, selfies felices 😁🎄\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Infografía con consejos en formato texto sobrepuesto.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Imagen informativa con recomendaciones de salud bucal para la época de fiestas.",
      "projectHint": ""
    },
    {
      "filename": "post_29.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_29.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DRhQPE3kfT1",
      "caption": "Una sonrisa alineada mejora tu mordida… y tu seguridad 😁🦷✨\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico promocional con titular grande y fotografía de brackets al fondo.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico publicitario sobre ortodoncia con texto lo que debes saber antes de ponerte brackets.",
      "projectHint": ""
    },
    {
      "filename": "post_30.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_30.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DRhQPE3kfT1",
      "caption": "Una sonrisa alineada mejora tu mordida… y tu seguridad 😁🦷✨\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Placa informativa con viñetas de texto descriptivo.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico explicativo con puntos clave sobre tratamientos de ortodoncia.",
      "projectHint": ""
    },
    {
      "filename": "post_31.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_31.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DRPjfeikWjA",
      "caption": "El cambio empieza con una decisión… y una buena sonrisa 😁🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Portada tipográfica promocional con silueta de dientes de fondo.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico publicitario con la frase Antes y después más que estética, es salud.",
      "projectHint": ""
    },
    {
      "filename": "post_32.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_32.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DRPjfeikWjA",
      "caption": "El cambio empieza con una decisión… y una buena sonrisa 😁🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Comparativa de antes y después con letreros tipográficos superpuestos.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Comparación clínica de antes y después de una limpieza y blanqueamiento dental.",
      "projectHint": ""
    },
    {
      "filename": "post_33.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_33.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DQ9Uty5EU-c",
      "caption": "El secreto de una sonrisa bonita empieza en el cepillado 🦷🪥\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Es un gráfico con texto superpuesto y diseño tipo flyer, no apto para secciones de alto impacto visual como el Hero.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico informativo con el logo de la clínica y texto sobre técnicas de cepillado sobre un fondo de una sonrisa.",
      "projectHint": ""
    },
    {
      "filename": "post_34.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_34.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DQ9Uty5EU-c",
      "caption": "El secreto de una sonrisa bonita empieza en el cepillado 🦷🪥\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Infografía educativa con texto predominante, útil para contenido informativo pero no para diseño editorial principal.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Infografía con consejos para un cepillado dental correcto y el logo de Dental Family Center.",
      "projectHint": ""
    },
    {
      "filename": "post_35.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_35.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DQrdXknESTm",
      "caption": "No es solo el azúcar… hay otros culpables escondidos 👀🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Gráfico de portada con texto publicitario y filtro de color que reduce la calidad fotográfica para uso en web.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Gráfico de portada sobre hábitos dentales perjudiciales con una imagen de fondo de una mujer sonriendo.",
      "projectHint": ""
    },
    {
      "filename": "post_36.jpg",
      "url": "/clients/dentalfamily.rd/raw/post_36.jpg",
      "source": "instagram",
      "width": 1080,
      "height": 1350,
      "postCode": "DQrdXknESTm",
      "caption": "No es solo el azúcar… hay otros culpables escondidos 👀🦷\n\n#DentalFamilyRD #Odontología #SonrisasSanas #CuidadoDental #DentistaRD #ConfianzaDental #SaludBucal #SonrisaPerfecta",
      "location": "Plaza Mezzaluna",
      "realProjectName": "",
      "isQuoteOrTextGraphic": true,
      "isConstructionOrRough": false,
      "heroScore": 1,
      "qualityReason": "Lista de puntos informativos sobre fondo gráfico, clasificado como material promocional de baja prioridad visual.",
      "usableAs": [
        "discard"
      ],
      "categorySlug": "grafico-texto",
      "categoryLabel": "Gráfico con Texto",
      "subject": "Lista de hábitos que dañan la salud dental presentada en un formato gráfico con el logo de la clínica.",
      "projectHint": ""
    }
  ],
  "websiteUrl": "https://maps.apple/p/zhx96bP~.X5XsW",
  "blueprint": {
    "architectureMode": "single-page",
    "architectureReason": "El estudio concentra su oferta en una disciplina principal. Se estructura como una experiencia editorial continua sin subpáginas vacías.",
    "heroMode": "typographic",
    "heroCandidates": [],
    "discardedPhotosCount": 36,
    "discardedPhotos": [
      {
        "filename": "post_1.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_1.jpg",
        "reason": "Es un gráfico informativo con texto predominante sobre un fondo plano, no apto para uso editorial principal."
      },
      {
        "filename": "post_2.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_2.jpg",
        "reason": "Gráfico con texto informativo sobre salud dental, carece de elementos fotográficos de alta calidad."
      },
      {
        "filename": "post_3.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_3.jpg",
        "reason": "Imagen con texto sobre cuidado de la piel, de naturaleza puramente informativa y gráfica."
      },
      {
        "filename": "post_4.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_4.jpg",
        "reason": "Gráfico educativo con texto sobre desarrollo dental infantil, no es una fotografía profesional."
      },
      {
        "filename": "post_5.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_5.jpg",
        "reason": "Gráfico con texto sobre prevención dental, diseñado para redes sociales y no para secciones hero."
      },
      {
        "filename": "post_6.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_6.jpg",
        "reason": "Lista de síntomas en formato gráfico, útil para información pero no para impacto visual editorial."
      },
      {
        "filename": "post_7.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_7.jpg",
        "reason": "Gráfico con llamado a la acción y texto informativo sobre fondo azul."
      },
      {
        "filename": "post_8.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_8.jpg",
        "reason": "Aunque muestra al equipo profesional, el texto superpuesto de felicitación lo convierte en un flyer publicitario."
      },
      {
        "filename": "post_9.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_9.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_10.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_10.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_11.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_11.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_12.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_12.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_13.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_13.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_14.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_14.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_15.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_15.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_16.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_16.jpg",
        "reason": "Es un gráfico publicitario con texto, no apto para uso editorial como fotografía de alta calidad."
      },
      {
        "filename": "post_17.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_17.jpg",
        "reason": "Es un gráfico informativo con mucho texto y fondo plano, no apto para secciones principales de impacto visual."
      },
      {
        "filename": "post_18.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_18.jpg",
        "reason": "Gráfico publicitario con tipografía sobre fondo azul, diseñado para redes sociales pero con bajo valor editorial."
      },
      {
        "filename": "post_19.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_19.jpg",
        "reason": "Imagen puramente informativa con texto sobre fondo azul, útil solo para contenido educativo secundario."
      },
      {
        "filename": "post_20.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_20.jpg",
        "reason": "Flyer informativo con lista de puntos, carece de profundidad visual o fotografía de alta calidad."
      },
      {
        "filename": "post_21.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_21.jpg",
        "reason": "Gráfico con texto que incluye una imagen de fondo desaturada, mejor que un fondo plano pero sigue siendo un flyer."
      },
      {
        "filename": "post_22.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_22.jpg",
        "reason": "Gráfico educativo con texto centrado, diseñado para consumo rápido en redes sociales."
      },
      {
        "filename": "post_23.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_23.jpg",
        "reason": "Flyer informativo sobre ortodoncia con puntos clave, no posee elementos fotográficos destacados."
      },
      {
        "filename": "post_24.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_24.jpg",
        "reason": "Aunque muestra un resultado clínico, el texto superpuesto y el formato comparativo lo clasifican como gráfico publicitario."
      },
      {
        "filename": "post_25.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_25.jpg",
        "reason": "Imagen tipo flyer publicitario con texto superpuesto y comparativa clínica."
      },
      {
        "filename": "post_26.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_26.jpg",
        "reason": "Gráfico con texto e instrucciones sobre salud bucal."
      },
      {
        "filename": "post_27.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_27.jpg",
        "reason": "Gráfico con texto publicitario e invitación a la consulta."
      },
      {
        "filename": "post_28.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_28.jpg",
        "reason": "Flyer informativo sobre los seguros médicos aceptados por la clínica."
      },
      {
        "filename": "post_29.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_29.jpg",
        "reason": "Composición gráfica con logos corporativos de la clínica y una entidad bancaria."
      },
      {
        "filename": "post_30.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_30.jpg",
        "reason": "Gráfico promocional con texto superpuesto sobre cuidado de la piel."
      },
      {
        "filename": "post_31.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_31.jpg",
        "reason": "Retrato grupal del equipo médico femenino con texto conmemorativo superpuesto."
      },
      {
        "filename": "post_32.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_32.jpg",
        "reason": "Gráfico azul informativo con texto sobre pasta dental."
      },
      {
        "filename": "post_33.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_33.jpg",
        "reason": "Diseño gráfico informativo sobre errores dentales en Navidad con texto superpuesto y logo."
      },
      {
        "filename": "post_34.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_34.jpg",
        "reason": "Flyer informativo publicitario centrado en la sensibilidad dental con tipografía prominente."
      },
      {
        "filename": "post_35.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_35.jpg",
        "reason": "Imagen promocional con texto 'Guía de Supervivencia Dental Navideña' e identidad visual de la marca."
      },
      {
        "filename": "post_36.jpg",
        "url": "/clients/dentalfamily.rd/raw/post_36.jpg",
        "reason": "Gráfico informativo de ortodoncia con texto principal sobre brackets superpuesto en la foto."
      }
    ],
    "activeSections": [
      {
        "id": "hero",
        "title": "Portada Editorial (Hero)",
        "included": true,
        "why": "Usa composición tipográfica arquitectónica porque no hay fotografías de alta resolución aptas para portada."
      },
      {
        "id": "services",
        "title": "Índice de Servicios Reales (1)",
        "included": true,
        "why": "1 categorías deducidas directamente de su biografía, highlights y portafolio fotográfico."
      },
      {
        "id": "about",
        "title": "Manifiesto y Perfil del Estudio",
        "included": true,
        "why": "Incluye narrativa real del estudio y 2 datos verificados de su perfil."
      },
      {
        "id": "process",
        "title": "Metodología de Trabajo",
        "included": true,
        "why": "Explica los pasos reales de trabajo desde el levantamiento hasta la entrega."
      },
      {
        "id": "faq",
        "title": "Preguntas Frecuentes",
        "included": true,
        "why": "Resuelve dudas operativas reales antes de pasar a WhatsApp."
      },
      {
        "id": "contact",
        "title": "Contacto Directo & Pie Editorial",
        "included": true,
        "why": "Conversión directa al WhatsApp real verificado (809-231-2153)."
      }
    ],
    "omittedSections": [
      {
        "id": "projects",
        "title": "Obras y Proyectos Reales (0)",
        "included": false,
        "why": "Se omite porque no hay suficientes fotografías de proyectos terminados."
      },
      {
        "id": "testimonials",
        "title": "Testimonios de Clientes",
        "included": false,
        "why": "Omitido automáticamente: no se inventan reseñas falsas cuando no existen testimonios públicos verificables."
      }
    ]
  },
  "builder": "template-fallback",
  "outreachStructured": {
    "whatsappPitch": "Hola equipo de *Dental Family Center*, ¿cómo están?\n\nEstuve analizando su portafolio en @dentalfamily.rd (Odontología Integral) y el nivel de ejecución que manejan en Ensanche Paraíso, Plaza Mezzaluna, Santo Domingo. Noté que en Instagram todo el tráfico llega directo al perfil o al link de contacto, pero no cuentan con una web editorial propia donde cada línea (Odontología Integral) y cada obra esté estructurada por separado.\n\nMe tomé el tiempo de investigar su portafolio real y armarles una propuesta funcional a la medida de *Dental Family Center*, usando únicamente sus obras y fotografías reales:\n\nhttps://dentalfamily-rd-demo.vercel.app\n\nIncluye páginas dedicadas por servicio (1 especialidades) y proyectos organizados para que sus clientes vean su trabajo antes de escribirles. ¿Tienen 5 minutos esta semana para mostrársela en una llamada rápida?",
    "instagramDmPitch": "Hola equipo de Dental Family Center. Estuve viendo sus proyectos en @dentalfamily.rd y noté que no tienen un sitio web donde su portafolio de Odontología Integral esté organizado por especialidad. Les armé una demo completa con sus obras reales: https://dentalfamily-rd-demo.vercel.app — avísenme qué les parece.",
    "callTips": [
      "Menciona de entrada una obra específica real de su feed: \"sus proyectos recientes\" en Ensanche Paraíso, Plaza Mezzaluna, Santo Domingo. Eso demuestra que no es una plantilla masiva.",
      "Muéstrales cómo dividiste su web exactamente en sus 1 líneas reales (Odontología Integral) con subpáginas dedicadas, en vez de mezclar todas las fotos.",
      "Destaca que incluiste los materiales y especificaciones reales que ellos usan (Invisalign, Dermapen, Resinas)."
    ],
    "outreachMd": "# Estrategia de Cierre & Mensajes Personalizados — Dental Family Center (@dentalfamily.rd)\n\n## Puntos Clave para tu Llamada / Reunión en Persona\n1. Menciona de entrada una obra específica real de su feed: \"sus proyectos recientes\" en Ensanche Paraíso, Plaza Mezzaluna, Santo Domingo. Eso demuestra que no es una plantilla masiva.\n2. Muéstrales cómo dividiste su web exactamente en sus 1 líneas reales (Odontología Integral) con subpáginas dedicadas, en vez de mezclar todas las fotos.\n3. Destaca que incluiste los materiales y especificaciones reales que ellos usan (Invisalign, Dermapen, Resinas).\n\n## Mensaje para WhatsApp (809-231-2153)\n```text\nHola equipo de *Dental Family Center*, ¿cómo están?\n\nEstuve analizando su portafolio en @dentalfamily.rd (Odontología Integral) y el nivel de ejecución que manejan en Ensanche Paraíso, Plaza Mezzaluna, Santo Domingo. Noté que en Instagram todo el tráfico llega directo al perfil o al link de contacto, pero no cuentan con una web editorial propia donde cada línea (Odontología Integral) y cada obra esté estructurada por separado.\n\nMe tomé el tiempo de investigar su portafolio real y armarles una propuesta funcional a la medida de *Dental Family Center*, usando únicamente sus obras y fotografías reales:\n\nhttps://dentalfamily-rd-demo.vercel.app\n\nIncluye páginas dedicadas por servicio (1 especialidades) y proyectos organizados para que sus clientes vean su trabajo antes de escribirles. ¿Tienen 5 minutos esta semana para mostrársela en una llamada rápida?\n```\n\n## Mensaje para DM de Instagram (@dentalfamily.rd)\n```text\nHola equipo de Dental Family Center. Estuve viendo sus proyectos en @dentalfamily.rd y noté que no tienen un sitio web donde su portafolio de Odontología Integral esté organizado por especialidad. Les armé una demo completa con sus obras reales: https://dentalfamily-rd-demo.vercel.app — avísenme qué les parece.\n```\n"
  }
};
const MEDIA = {
  "heroMain": "./media/post_3.jpg",
  "heroDetail": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85&fm=webp",
  "specialist": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85&fm=webp",
  "services": [
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85&fm=webp",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85&fm=webp",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85&fm=webp",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85&fm=webp"
  ],
  "beforeImg": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80&fm=webp",
  "afterImg": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85&fm=webp",
  "gallery": [
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1100&q=85&fm=webp",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=85&fm=webp",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1100&q=85&fm=webp"
  ]
};
const IS_HEALTH = true;

export default function App() {
  const [activeService, setActiveService] = useState(0);
  const [sliderPos, setSliderPos] = useState(52);
  const [openFaq, setOpenFaq] = useState(0);

  const waUrl = `https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent(DATA.contact.whatsappPrefill)}`;

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div>
      {/* NAVBAR FIJO EDITORIAL */}
      <header className="site-navbar">
        <div className="container nav-inner">
          <a href="#" className="brand-mark" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexDirection: 'row' }}>
            <img src="./media/logo_real.jpg" alt="Dental Family Center" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--accent)' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="brand-name">{DATA.businessName}</span>
              <span className="brand-sub">{DATA.tagline}</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#especialidades">Especialidades</a>
            <a href="#casos">Resultados</a>
            <a href="#especialista">{DATA.specialist.name.split(' ').slice(0, 2).join(' ')}</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand nav-cta-btn" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
            Agendar Cita <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      {/* 1. HERO EDITORIAL ASIMÉTRICO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              {DATA.hero.headlinePart1}{' '}
              <span className="hero-title-accent">{DATA.hero.headlineAccent}</span>{' '}
              {DATA.hero.headlinePart2}
            </h1>

            <p className="hero-subtitle">{DATA.hero.subtitle}</p>

            <div className="hero-actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                {DATA.hero.primaryCta} <ArrowUpRight size={19} />
              </a>
              <a href="#especialidades" className="btn-outline-editorial">
                {DATA.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-meta-row">
              <div>
                <div className="hero-stat-num">{DATA.hero.highlightStatNumber}</div>
                <div className="hero-stat-label">{DATA.hero.highlightStatLabel}</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(15,23,42,0.12)', paddingLeft: '28px' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '1.02rem' }}>
                  {DATA.specialist.name}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {DATA.contact.sector}, Santo Domingo
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-main-frame">
              <img src={MEDIA.heroMain} alt={DATA.businessName} />
            </div>
            <div className="hero-floating-photo">
              <img src={MEDIA.heroDetail} alt={DATA.tagline} loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FRANJA DE RESPALDO / SEGUROS MÉDICOS RD */}
      {(IS_HEALTH || (DATA.authorityStrip?.items || []).length > 0) && (
      <section className="authority-strip">
        <div className="container">
          <div className="authority-label">{DATA.authorityStrip?.title || (IS_HEALTH ? 'Aceptamos Seguros Médicos Nacionales e Internacionales' : 'Respaldo & Especialidades')}</div>
          <div className="marquee-track-wrap">
            <div className="marquee-track">
              {IS_HEALTH ? (
                [...Array(2)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    <img src="/logos-seguros/Logohumano2016.webp" alt="ARS Humano" className="insurance-logo" />
                    <img src="/logos-seguros/Mapfre_Logo_2026-s1280.png" alt="Mapfre Salud" className="insurance-logo" />
                    <img src="/logos-seguros/ars_seguros_banreservas.d729df7.png" alt="Seguros Reservas" className="insurance-logo" />
                    <img src="/logos-seguros/logo-seguros-universal.svg" alt="Seguros Universal" className="insurance-logo" />
                    <img src="/logos-seguros/logo2022.webp" alt="SeNaSa" className="insurance-logo" />
                    <img src="/logos-seguros/Worldwide Medical.png" alt="Worldwide Medical" className="insurance-logo" />
                    <img src="/logos-seguros/logos-bmi-ecuador-02.png" alt="BMI" className="insurance-logo" />
                  </React.Fragment>
                ))
              ) : (
                [...(DATA.authorityStrip?.items || []), ...(DATA.authorityStrip?.items || [])].map((item, i) => (
                  <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 3. ÍNDICE EDITORIAL NUMERADO INTERACTIVO (CERO TARJETAS) */}
      <section id="especialidades" className="editorial-services-section">
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', color: 'var(--text-light)' }}>
              Especialidades diseñadas alrededor de lo que deseas lograr.
            </h2>
          </div>

          <div className="services-layout">
            <div>
              {DATA.services.map((srv, idx) => {
                const isActive = activeService === idx;
                return (
                  <div
                    key={idx}
                    className={`service-row-item ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(idx)}
                    onClick={() => setActiveService(idx)}
                  >
                    <div className="service-row-header">
                      <span className="service-num">{srv.number}</span>
                      <h3 className="service-title">{srv.title}</h3>
                      <ArrowUpRight size={22} color={isActive ? 'var(--accent)' : 'rgba(255,255,255,0.4)'} />
                    </div>

                    {isActive && (
                      <motion.div
                        className="service-expand"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="service-quote">“{srv.patientQuote}”</div>
                        <p className="service-desc">{srv.description}</p>
                        <div className="service-meta-bar">
                          <span>Protocolo: <strong style={{ color: '#FFFFFF' }}>{srv.deliverable}</strong></span>
                          <span>•</span>
                          <span>Tiempo: <strong style={{ color: '#FFFFFF' }}>{srv.duration}</strong></span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          <a
                            href={`https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent('Hola, me interesa información sobre ' + srv.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)' }}
                          >
                            Consultar sobre {srv.title} por WhatsApp <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="service-visual-stage">
              <img
                src={MEDIA.services[activeService % MEDIA.services.length]}
                alt={DATA.services[activeService]?.title}
                loading="lazy"
              />
              <div className="service-visual-caption">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 600 }}>
                  {DATA.services[activeService]?.title}
                </div>
                <div style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '4px' }}>
                  {DATA.services[activeService]?.deliverable}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMACIÓN REAL & CASOS DESTACADOS */}
      <section id="casos" className="transformation-section">
        <div className="container trans-grid">
          <div>
            <div
              className="ba-slider-container"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              <img src={MEDIA.afterImg} alt="Resultado final" className="ba-img" />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${sliderPos}%`,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={MEDIA.beforeImg}
                  alt="Estado inicial"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.75) brightness(0.92)' }}
                />
              </div>
              <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
                <div className="ba-handle">↔</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '14px', textAlign: 'center' }}>
              Desliza horizontalmente sobre la imagen para comparar el antes y el acabado estético.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Resultados que hablan por su proporción y naturalidad.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.12rem' }}>
              Cada caso en {DATA.businessName} se planifica de forma individualizada, respetando la armonía y estructura propia de cada persona.
            </p>

            <div className="cases-editorial-list">
              {(DATA.cases || []).map((c, idx) => (
                <div key={idx} className="case-strip">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)' }}>{c.title}</h3>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.86rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {c.time}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Diagnóstico:</strong> {c.challenge}{' '}
                    <strong style={{ color: 'var(--text-dark)' }}>Resultado:</strong> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL ESPECIALISTA / DIRECCIÓN CLÍNICA */}
      <section id="especialista" className="specialist-section">
        <div className="container specialist-grid">
          <div className="specialist-portrait">
            <img src={MEDIA.specialist} alt={DATA.specialist?.name || DATA.businessName} loading="lazy" />
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.4vw, 3.9rem)', color: 'var(--text-dark)', marginBottom: '12px' }}>
              {DATA.specialist?.name || DATA.businessName}
            </h2>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.08rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '28px' }}>
              {DATA.specialist?.role || ''}
            </div>

            <p style={{ color: 'var(--text-dark)', fontSize: '1.16rem', marginBottom: '20px', lineHeight: 1.68 }}>
              {DATA.specialist?.bioParagraph1 || ''}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.68 }}>
              {DATA.specialist?.bioParagraph2 || ''}
            </p>

            <div className="credentials-row">
              {(DATA.specialist?.credentials || []).map((cred, idx) => (
                <div key={idx} className="credential-item">
                  {cred}
                </div>
              ))}
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
              Agendar Consulta con {(DATA.specialist?.name || DATA.businessName || '').split(' ').slice(0, 2).join(' ')} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. MOSAICO DE INSTALACIONES & PROCESO EN 4 ETAPAS */}
      <section className="experience-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', maxWidth: '640px' }}>
              Un espacio pensado para tu calma desde que cruzas la puerta.
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
              Ubicados en {DATA.contact.address}, combinamos tecnología de última generación con un ambiente privado y relajado.
            </p>
          </div>

          <div className="mosaic-gallery">
            <div className="mosaic-item tall">
              <img src={MEDIA.gallery[0]} alt="Instalaciones principales" loading="lazy" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[1]} alt="Equipamiento especializado" loading="lazy" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[2]} alt="Detalle clínico" loading="lazy" />
            </div>
          </div>

          <div style={{ margin: '48px 0' }}>
            <TechnicalSchematic />
          </div>

          <div className="process-horizontal">
            {DATA.process.map((p, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div className="process-col-num" style={{ marginBottom: 0 }}>{p.step}</div>
                  <BespokeServiceIcon index={idx} size={38} />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '10px', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UBICACIÓN EN SANTO DOMINGO + FAQ + CONTACTO */}
      <section id="ubicacion" className="location-faq-section">
        <div className="container">
          <div className="location-split">
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: '#FFFFFF', marginBottom: '24px' }}>
                Visítanos en Santo Domingo o agenda tu evaluación hoy.
              </h2>

              <div style={{ display: 'grid', gap: '22px', margin: '36px 0' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Dirección en Santo Domingo</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Phone size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Líneas Directas & WhatsApp</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>
                      {DATA.contact.phoneDisplay} {DATA.contact.secondaryPhone ? ` / ${DATA.contact.secondaryPhone}` : ''}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Clock size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Horario de Atención</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact.hours}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                  Escribir por WhatsApp Ahora <ArrowUpRight size={18} />
                </a>
                <a
                  href={DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-editorial"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.28)' }}
                >
                  Ver Instagram @{DATA.handle}
                </a>
              </div>

              <div className="map-frame" style={{ marginTop: '40px' }}>
                <iframe
                  title="Ubicación en Santo Domingo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(DATA.contact.mapQuery)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '28px' }}>
                Preguntas Frecuentes
              </h3>
              <div>
                {(DATA.faqs || []).map((f, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="faq-item-row" onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                      <div className="faq-question">
                        <span>{f.q}</span>
                        <ChevronDown
                          size={20}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            color: 'var(--accent)'
                          }}
                        />
                      </div>
                      {isOpen && <div className="faq-answer">{f.a}</div>}
                    </div>
                  );
                })}
              </div>

              {/* Testimonios integrados sin tarjetas pesadas */}
              <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  LO QUE DICEN NUESTROS PACIENTES EN SANTO DOMINGO
                </div>
                {(DATA.testimonials || []).slice(0, 2).map((t, idx) => (
                  <blockquote key={idx} style={{ marginBottom: '24px' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.4 }}>
                      “{t.quote}”
                    </p>
                    <footer style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.7)', marginTop: '6px' }}>
                      — {t.name} ({t.context})
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <footer style={{ paddingTop: '42px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.9rem', color: 'rgba(248,250,252,0.6)' }}>
            <div>© {new Date().getFullYear()} {DATA.businessName}. Todos los derechos reservados.</div>
            <div>{DATA.contact.address} • {DATA.contact.city}</div>
          </footer>
        </div>
      </section>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={20} /> Agendar por WhatsApp
      </a>
    </div>
  );
}
