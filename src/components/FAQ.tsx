import React, { useState } from 'react';
import { FaChevronDown, FaPlus, FaMinus, FaCircleQuestion, FaWhatsapp } from 'react-icons/fa6';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Délais & Organisation',
    question: 'Quels sont vos délais moyens de livraison ?',
    answer: 'Pour les vidéos courtes (Shorts, Reels, TikTok), le délai moyen est de 24h à 48h. Pour les formats longs YouTube ou documentaires (8 à 20 min), comptez entre 3 et 5 jours ouvrés. En cas d’urgence, un traitement express prioritaire est possible sur demande.'
  },
  {
    category: 'Workflow & Fichiers',
    question: 'Comment vous envoyer mes rushs et fichiers volumineux ?',
    answer: 'Vous pouvez partager vos dossiers de rushs via Google Drive, WeTransfer, Dropbox ou Frame.io. Je vous fournis une structure de dossier simple et optimisée pour que le transfert soit rapide et sans perte de qualité.'
  },
  {
    category: 'Outils & Logiciels',
    question: 'Quels logiciels utilisez-vous pour le montage et les effets ?',
    answer: 'Je travaille sur la suite professionnelle Adobe (Premiere Pro pour le montage narratif et le rythme, After Effects pour le motion design 2D/3D et les VFX, Audition pour le sound design et le nettoyage audio) ainsi que DaVinci Resolve pour l’étalonnage colorimétrique de haute précision.'
  },
  {
    category: 'Retouches & Révisions',
    question: 'Combien de retouches sont incluses dans vos prestations ?',
    answer: 'Chaque prestation inclut des révisions (2 rounds complets pour les packs créateurs, et retouches illimitées jusqu’à validation finale sur le pack Pro). Mon objectif est que vous soyez 100% fier et convaincu du résultat final avant publication.'
  },
  {
    category: 'Paiement & Facturation',
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Les paiements s’effectuent de manière totalement sécurisée par Virement bancaire, PayPal, Stripe ou Mobile Money (selon votre localisation géographique). Un acompte à la commande et le solde à la livraison finale avec facture professionnelle.'
  },
  {
    category: 'Collaboration Long Terme',
    question: 'Proposez-vous des forfaits mensuels pour créateurs ou agences ?',
    answer: 'Absolument ! La majorité de mes clients collaborent avec moi sous forme de forfait mensuel récurrent (ex: 8 à 15 vidéos par mois). Cela vous garantit des créneaux de montage réservés en priorité, des tarifs dégressifs et une cohérence visuelle parfaite sur votre chaîne.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
            <span>FOIRE AUX QUESTIONS</span>
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Tout ce que vous devez{' '}
            <span className="italic text-[#84cc16] font-extrabold">savoir</span>.
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg">
            Réponses claires aux questions fréquentes sur notre méthode de travail et nos livraisons.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#09090b] border-[#84cc16] shadow-[0_0_25px_rgba(132,204,22,0.2)]'
                    : 'bg-[#09090b]/80 backdrop-blur-xl border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84cc16] flex-shrink-0" />
                    <span className="font-display font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-chartreuse text-charcoal-900' : 'bg-charcoal-800 text-textMuted'
                  }`}>
                    {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 animate-fadeIn">
                    <p className="text-textMuted text-sm sm:text-base leading-relaxed pl-5 border-l-2 border-chartreuse/40">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact WhatsApp helper card */}
        <div className="mt-12 p-6 rounded-2xl bg-charcoal-card border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-sm text-textLight">Vous avez une autre question spécifique ?</h4>
            <p className="text-xs text-textMuted mt-0.5">Je réponds directement à toutes vos interrogations sur WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/2290162569665?text=Bonjour%20Warren,%20j%27ai%20une%20question%20sur%20tes%20prestations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal-800 hover:bg-chartreuse/15 border border-chartreuse/40 text-chartreuse text-xs font-bold uppercase tracking-wider transition-all"
          >
            <FaWhatsapp className="text-sm" />
            <span>Poser ma question</span>
          </a>
        </div>

      </div>
    </section>
  );
}
