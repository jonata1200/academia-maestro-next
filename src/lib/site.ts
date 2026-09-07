// src/lib/site.ts
// Fonte única de verdade para dados institucionais e contato do site.
// Evita duplicação de telefones/links em UnitsMap, ManutencaoPageClient, layout (JSON-LD) etc.

export const SITE_URL = 'https://www.academiademusicamaestro.com.br';

export type Unit = {
  id: string;
  name: string;
  city: string;
  address: string;
  /** Telefone fixo da unidade (formato internacional, sem formatação) */
  phone: string;
  /** Telefone formatado para exibição na UI (ex.: "(61) 3371-5434") */
  phoneDisplay: string;
  /** Número de WhatsApp da unidade (formato internacional, sem formatação) */
  whatsapp: string;
  /** URL do embed do Google Maps (iframe) */
  mapsEmbed: string;
};

export const UNITS: Unit[] = [
  {
    id: 'ceilandia',
    name: 'Maestro Ceilândia',
    city: 'Ceilândia',
    address: 'St. M CNM 1 Bloco G Sala 315',
    phone: '+556133715434',
    phoneDisplay: '(61) 3371-5434',
    whatsapp: '5561996392573',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61417.86053077997!2d-48.14103086556073!3d-15.824174320945726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccebc2a19a29%3A0x8ec89d8de25bf9c2!2sAcademia%20de%20M%C3%BAsica%20Maestro%20Ceil%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1755189029158!5m2!1spt-BR!2sbr',
  },
  {
    id: 'sobradinho',
    name: 'Maestro Sobradinho',
    city: 'Sobradinho',
    address: 'Quadra 08 Bloco 1 Lote 5 Loja 1',
    phone: '+556133871834',
    phoneDisplay: '(61) 3387-1834',
    whatsapp: '5561983171825',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61471.986106128716!2d-47.8747074783203!3d-15.645034699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a407e75555555%3A0xfd983bc81e58783a!2sEscola%20de%20M%C3%BAsica%20Academia%20Maestro!5e0!3m2!1spt-BR!2sbr!4v1755189252685!5m2!1spt-BR!2sbr',
  },
];

/**
 * Monta o link de WhatsApp com mensagem pré-preenchida.
 * Ex.: whatsappUrl('5561996392573', 'Olá!') =>
 *   https://api.whatsapp.com/send?phone=5561996392573&text=Ol%C3%A1!
 */
export function whatsappUrl(whatsapp: string, message: string): string {
  return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão usada nos CTAs de agendamento */
export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e gostaria de mais informações🎶';

/** Chave do localStorage que guarda o consentimento de cookies (LGPD) */
export const COOKIE_CONSENT_KEY = 'cookie_consent';

/** Evento disparado na window quando o usuário responde ao banner de cookies */
export const COOKIE_CONSENT_EVENT = 'cookie-consent-change';