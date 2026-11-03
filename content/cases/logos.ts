/** Client logos by company name, cut from the Plug and Play Summit deck (vShare slide 4). Names allowed since 2026-10-30. */
export const clientLogos: Record<string, { src: string; w: number; h: number }> = {
  Northexzone: { src: '/logos/clients/northexzone.png', w: 384, h: 152 },
  'MicroAge Canada': { src: '/logos/clients/microage.png', w: 320, h: 240 },
  'Futura-Tec': { src: '/logos/clients/futura-tec.png', w: 384, h: 132 },
  'Edu Journey': { src: '/logos/clients/edu-journey.png', w: 328, h: 63 },
  EPC: { src: '/logos/clients/epc.png', w: 201, h: 227 },
  'Mirr Oils': { src: '/logos/clients/mirr-oils.png', w: 336, h: 98 },
  Welektrik: { src: '/logos/clients/welektrik.png', w: 378, h: 153 },
};

/**
 * Real photos of each client (CC-60, user 2026-11-01: use the client's own photos). Put the file in
 * public/cases/ and add it here under the case route slug (e.g. 'lubricants-manufacturer-uae'); until then the drawn scene
 * (components/ds/CaseArt.tsx) is shown. Needs the client's permission. Example:
 *   'lubricants-manufacturer-uae': { src: '/cases/mirr-oils.jpg', w: 1600, h: 900, alt: 'The blending plant in Hamriyah' },
 */
export const clientPhotos: Record<string, { src: string; w: number; h: number; alt: string }> = {
  // CC-79 (user, 2026-11-02): sector photographs from Unsplash (free licence) until the clients' own photos
  // arrive (OQ-43). They show each client's kind of work, not the client's own site; alt text says so.
  'it-network-canada': { src: '/cases/it-network-canada.webp', w: 1200, h: 674, alt: 'A data centre: the kind of infrastructure an IT and managed-services network runs' },
  'industrial-manufacturer-istanbul': { src: '/cases/industrial-manufacturer-istanbul.webp', w: 1200, h: 800, alt: 'A factory floor with an automated production line' },
  'lubricants-manufacturer-uae': { src: '/cases/lubricants-manufacturer-uae.webp', w: 1200, h: 799, alt: 'Industrial storage tanks under a clear sky' },
  'electrical-equipment-supplier-istanbul': { src: '/cases/electrical-equipment-supplier-istanbul.webp', w: 1200, h: 799, alt: 'An open electrical control panel with breakers and wiring' },
  'technology-reseller-frankfurt': { src: '/cases/technology-reseller-frankfurt.webp', w: 1200, h: 803, alt: 'Fibre-optic cables patched into network equipment' },
  'dental-education-consulting-texas': { src: '/cases/dental-education-consulting-texas.webp', w: 1200, h: 802, alt: 'A modern dental treatment room' },
  'software-provider-europe': { src: '/cases/software-provider-europe.webp', w: 1200, h: 798, alt: 'A construction site with a tower crane: the projects an EPC software provider serves' },
};
