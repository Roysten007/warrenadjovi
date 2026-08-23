import { Project, ExpertiseItem, ServiceItem, PricingPlan, Testimonial } from '../types';

export const STATS_DATA = [
  {
    iconName: 'FaFilm',
    value: '50',
    prefix: '+',
    suffix: '',
    label: 'Vidéos montées',
    sublabel: 'Shorts, Reels & YouTube'
  },
  {
    iconName: 'FaUsers',
    value: '30',
    prefix: '+',
    suffix: '',
    label: 'Clients accompagnés',
    sublabel: 'Créateurs & Marques'
  },
  {
    iconName: 'FaStar',
    value: '98',
    prefix: '',
    suffix: '%',
    label: 'Clients satisfaits',
    sublabel: 'Retours positifs vérifiés'
  }
];

export const EXPERTISES_DATA: ExpertiseItem[] = [
  {
    id: 'montage',
    title: 'Montage Vidéo',
    subtitle: 'Rythme, structure & rétention',
    iconName: 'FaScissors',
    description: "Rythme, structure, storytelling. Je transforme vos rushs bruts en vidéos magnétiques qui captivent l'audience du premier hook jusqu'au call-to-action final.",
    skills: ['Cut chirurgical', 'Gestion du Pacing', 'Storytelling narratif', 'Color Grading cinématique', 'Multi-cam synchro'],
    highlight: 'Optimisé pour maximiser le watchtime et le taux de rétention (+45% en moyenne).'
  },
  {
    id: 'sound',
    title: 'Sound Design',
    subtitle: 'Immersion, texture & impact',
    iconName: 'FaWaveSquare',
    description: "Une vidéo sans son travaillé perd la moitié de son impact émotionnel. J'ajoute la texture sonore, les whooshes, risers et mixages immersifs qui rendent chaque scène mémorable.",
    skills: ['Foley & Bruitages sur-mesure', 'Transitions audio percutantes', 'Nettoyage & Clarté vocale', 'Spatialisation & Mixage', 'Composition d’ambiances'],
    highlight: 'Donne une dimension cinématographique 3D que vos spectateurs ressentent immédiatement.'
  },
  {
    id: 'motion',
    title: 'Motion Design',
    subtitle: 'Animations, titrages & identité',
    iconName: 'FaWandMagicSparkles',
    description: "Titrages dynamiques, transitions personnalisées, kinetic typography et VFX. Le mouvement millimétré qui donne du punch et forge une identité visuelle immédiatement reconnaissable.",
    skills: ['Kinetic Typography', 'Lower Thirds personnalisés', 'Animations de graphiques & schémas', 'Trackings 2D/3D', 'Effets visuels stylisés'],
    highlight: 'Transforme des concepts abstraits en visuels clairs, fluides et esthétiques.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'real-1',
    title: 'Réalisation #01 — Montage Dynamique',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'TikTok',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0000.mp4',
    description: 'Montage rythmé, sous-titres percutants et rétention d’attention maximale.',
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'real-2',
    title: 'Réalisation #02 — Format Podcast / Interview',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'Reels',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0001.mp4',
    description: 'Cadrage dynamique, suppression des silences et mise en valeur des propos clés.',
    software: ['Premiere Pro', 'Audition']
  },
  {
    id: 'real-3',
    title: 'Réalisation #03 — Storytelling & Pacing',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'Shorts',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0002.mp4',
    description: 'Structure narrative fluide, transitions soignées et dynamisme continu.',
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'real-4',
    title: 'Réalisation #04 — Publicité & Lifestyle',
    category: 'motion',
    categoryLabel: 'Motion Design',
    platform: 'Instagram',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0003.mp4',
    description: 'Étalonnage soigné, typographie cinétique et ambiance captivante.',
    software: ['After Effects', 'DaVinci Resolve']
  },
  {
    id: 'real-5',
    title: 'Réalisation #05 — Sport & Action',
    category: 'sound',
    categoryLabel: 'Sound Design',
    platform: 'TikTok',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0004.mp4',
    description: 'Sound design immersif, impacts sonores et synchronisation sur le beat.',
    software: ['Premiere Pro', 'Audition']
  },
  {
    id: 'real-6',
    title: 'Réalisation #06 — Business & Marque',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'Reels',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0005.mp4',
    description: 'Habillage graphique professionnel, sous-titres stylisés et call-to-action percutant.',
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'real-7',
    title: 'Réalisation #07 — Contenu Créateur',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'Shorts',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0011.mp4',
    description: 'Rythme rapide, zooms progressifs et titrages accrocheurs.',
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'real-8',
    title: 'Réalisation #08 — Facecam & Conseils',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'TikTok',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0012.mp4',
    description: 'Mise en avant des arguments clés et animations de texte pop-up.',
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'real-9',
    title: 'Réalisation #09 — Vidéo Promotionnelle',
    category: 'motion',
    categoryLabel: 'Motion Design',
    platform: 'Instagram',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0013.mp4',
    description: 'Transitions créatives et effets visuels engageants.',
    software: ['After Effects', 'Premiere Pro']
  },
  {
    id: 'real-10',
    title: 'Réalisation #10 — Showcase & Présentation',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'Reels',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0015.mp4',
    description: 'Mise en valeur du produit avec un rythme dynamique et une musique entraînante.',
    software: ['Premiere Pro', 'DaVinci Resolve']
  },
  {
    id: 'real-11',
    title: 'Réalisation #11 — Interview & Témoignage',
    category: 'sound',
    categoryLabel: 'Sound Design',
    platform: 'Shorts',
    duration: '0:30',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0016.mp4',
    description: 'Clarté vocale optimale, réduction du bruit et texture sonore riche.',
    software: ['Premiere Pro', 'Audition']
  },
  {
    id: 'real-12',
    title: 'Réalisation #12 — Masterclass & Éducation',
    category: 'montage',
    categoryLabel: 'Montage Vidéo',
    platform: 'YouTube',
    duration: '0:45',
    thumbnail: '',
    videoUrl: '/Video/Realisation/VID-20260823-WA0017.mp4',
    description: 'Pédagogie visuelle avec schémas animés et découpage chirurgical.',
    software: ['Premiere Pro', 'After Effects']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'short-form',
    title: 'Montage Vidéos Short',
    badge: 'REELS · SHORTS · TIKTOK',
    image: '/Video/Services/20260823_005945.jpg',
    promoTag: '-30% Offre de lancement',
    description: 'Des montages de vidéos courtes percutants conçus pour capter l’attention en moins d’une seconde et transformer vos spectateurs en clients fidèles.',
    author: 'Par Warren Adjovi',
    rating: 4.9,
    reviewsCount: 48,
    deliverables: [
      'Hooks visuels et sonores percutants dès la première seconde',
      'Sous-titres animés dynamiques & emojis personnalisés',
      'Sound design texturé (SFX immersifs, whooshes, drops)',
      'Rythme soutenu pour maximiser la rétention (AVD)',
      'Livraison ultra-rapide en 24h à 48h'
    ],
    turnaround: '24h à 48h',
    featured: true
  },
  {
    id: 'motion-design',
    title: 'Montage Motion Design',
    badge: 'ANIMATION 2D/3D · VFX · TITRAGES',
    image: '/Video/Services/20260823_010636.jpg',
    promoTag: '-30% Offre de lancement',
    description: 'Un habillage visuel sur-mesure et des animations cinétiques millimétrées pour forger une identité de marque puissante et mémorable.',
    author: 'Par Warren Adjovi',
    rating: 4.9,
    reviewsCount: 34,
    deliverables: [
      'Kinetic typography & titrages 2D/3D animés sur-mesure',
      'Animations de graphiques, schémas et interfaces dynamiques',
      'Habillage visuel complet, lower thirds et identité de marque',
      'Sound design synchronisé et effets visuels (VFX) premium',
      'Exports haute définition optimisés pour la conversion'
    ],
    turnaround: '48h à 72h',
    featured: false
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'pack-shorts',
    title: 'Pack Créateur Short-Form',
    subtitle: 'Idéal pour booster votre visibilité sur TikTok, Instagram & Shorts',
    price: '150€',
    period: '/ pack de 4 shorts',
    popular: false,
    features: [
      '4 Vidéos courtes (jusqu’à 60s)',
      'Sous-titres dynamiques avec glow & animations',
      'Sound design complet (SFX + musiques libres)',
      'B-rolls de qualité & zooms de rétention',
      'Livraison rapide en 48h',
      '2 rounds de retouches inclus'
    ],
    ctaText: 'Commander ce pack',
    ctaLink: 'https://wa.me/22900000000?text=Bonjour%20Warren,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20Cr%C3%A9ateur%20Short-Form'
  },
  {
    id: 'pack-youtube-pro',
    title: 'Pack YouTube & Production Pro',
    subtitle: 'La formule complète pour un rendu cinématographique et viral',
    price: '280€',
    period: '/ vidéo (8-15 min)',
    popular: true,
    features: [
      'Montage narratif approfondi et dynamique',
      'Sound design cinématographique & mixage voix',
      'Éléments de motion design & titrages personnalisés',
      'Color grading professionnel (profil cinématographique)',
      'Déclinaison de 2 Shorts/Reels offerts',
      'Retouches illimitées jusqu’à validation complète',
      'Communication directe et prioritaire sur WhatsApp'
    ],
    ctaText: 'Démarrer ce projet',
    ctaLink: 'https://wa.me/22900000000?text=Bonjour%20Warren,%20je%20souhaite%20r%C3%A9server%20le%20Pack%20YouTube%20%26%20Production%20Pro'
  },
  {
    id: 'pack-custom',
    title: 'Pack Sur Mesure / Agence',
    subtitle: 'Pour les besoins réguliers, documentaires ou productions de marques',
    price: 'Sur Devis',
    period: 'selon votre volume',
    popular: false,
    features: [
      'Volume mensuel dédié de vidéos',
      'Gestion complète de la chaîne ou du média',
      'Direction artistique, Motion Design 3D & Audio Branding',
      'Gestion de rushs multi-caméras 4K lourds',
      'Accès direct Slack/WhatsApp privé',
      'Délais prioritaires garantis'
    ],
    ctaText: 'Discuter de vos besoins',
    ctaLink: 'https://wa.me/22900000000?text=Bonjour%20Warren,%20j%27aimerais%20discuter%20d%27un%20partenariat%20sur%20mesure'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Gaétan Dossou',
    role: 'Entrepreneur & Créateur',
    channelOrBrand: 'Client Régulier',
    avatarText: 'GD',
    rating: 5,
    content: "Franchement, je tiens à te remercier pour la qualité de ton travail. Tu as monté plusieurs vidéos et à chaque fois, le rendu est propre, dynamique et professionnel. Tu comprends rapidement les consignes et respectes les délais.",
    projectType: 'Montage Vidéo & Shorts',
    date: 'Récemment'
  },
  {
    id: 'test-2',
    name: 'Martial',
    role: 'Producteur de Contenu',
    channelOrBrand: 'Validation Directe',
    avatarText: 'MA',
    rating: 5,
    content: "Wow ! Franchement, je tiens à vous féliciter pour la qualité du travail réalisé. Les illustrations sont pertinentes, bien intégrées et apportent une vraie valeur ajoutée à la vidéo. Le rendu est fluide et professionnel.",
    projectType: 'Motion Design & Montage',
    date: 'Récemment'
  },
  {
    id: 'test-3',
    name: 'Alis France',
    role: 'Marque & E-commerce',
    channelOrBrand: 'Projet International',
    avatarText: 'AF',
    rating: 5,
    content: "Livraison du montage vidéo validé avec un grand succès. Une réactivité exemplaire, des animations au top et un suivi irréprochable. Je recommande les yeux fermés !",
    projectType: 'Reels & TikTok Ads',
    date: 'Récemment'
  },
  {
    id: 'test-4',
    name: 'Karim B.',
    role: 'Créateur Tech & IA',
    channelOrBrand: 'YouTube (+120K abonnés)',
    avatarText: 'KB',
    rating: 5,
    content: "Warren a complètement transformé la dynamique de mes vidéos. Mon taux de rétention moyen a explosé. Son sens du rythme et du sound design apporte un vrai niveau studio pro.",
    projectType: 'Montage YouTube & Shorts',
    date: 'Il y a 2 semaines'
  },
  {
    id: 'test-5',
    name: 'Sarah El-Mansouri',
    role: 'Fondatrice & Directrice Artistique',
    channelOrBrand: 'Studio Paris',
    avatarText: 'SE',
    rating: 5,
    content: "Une collaboration irréprochable ! Warren comprend les briefs à la perfection sans avoir besoin de mille explications. Rendu livré avec un jour d'avance sur le planning.",
    projectType: 'Motion Design & Ads',
    date: 'Il y a 1 mois'
  },
  {
    id: 'test-6',
    name: 'Marc-Aurèle D.',
    role: 'Hôte de Podcast & Auteur',
    channelOrBrand: 'Le Cercle des Bâtisseurs',
    avatarText: 'MD',
    rating: 5,
    content: "Trouver un monteur qui maîtrise à la fois le cut, le traitement du son et les animations graphiques est rare. Warren réunit les trois avec une rigueur et une disponibilité exemplaires.",
    projectType: 'Podcast & Shorts Viraux',
    date: 'Il y a 3 semaines'
  }
];

export const WHATSAPP_CHATS = [
  {
    clientName: "David K. — YouTuber Finance",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    messages: [
      {
        sender: 'warren',
        text: "Salut David ! Voici la V1 de la vidéo avec le nouveau sound design et les titrages animés sur la partie investissement 🎬👇",
        time: "14:15",
        status: 'read'
      },
      {
        sender: 'client',
        text: "Franchement Warren... C'est une DINGUERIE 🔥🔥 Le rythme est parfait, et les transitions sonores donnent un côté hyper immersif !",
        time: "14:22"
      },
      {
        sender: 'client',
        text: "On valide direct sans aucune retouche. Tu es dispo pour les 3 prochains épisodes du mois ?",
        time: "14:23"
      },
      {
        sender: 'warren',
        text: "Merci David ! Toujours un plaisir. C'est calé pour les 3 prochains, envoie les rushs dès que tu as fini de tourner 🤝",
        time: "14:28",
        status: 'read'
      }
    ]
  },
  {
    clientName: "Élodie — Brand Manager",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    messages: [
      {
        sender: 'client',
        text: "Warren, le Reel qu'on a posté hier a déjà dépassé les 400k vues sur Insta !! Le hook avec l'animation 3D a super bien fonctionné 🚀",
        time: "09:40"
      },
      {
        sender: 'warren',
        text: "Énorme ! Bravo pour les chiffres 🎉 Le watchtime a tenu sur les 20 premières secondes ?",
        time: "09:45",
        status: 'read'
      },
      {
        sender: 'client',
        text: "Oui +72% jusqu'au CTA ! Nos DM explosent de demandes. On prépare la suite pour la semaine prochaine !",
        time: "09:50"
      }
    ]
  }
];
