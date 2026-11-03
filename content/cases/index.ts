import { industrialManufacturerIstanbul } from './industrial-manufacturer-istanbul';
import { technologyResellerFrankfurt } from './technology-reseller-frankfurt';
import { softwareProviderEurope } from './software-provider-europe';
import { itNetworkCanada } from './it-network-canada';
import { electricalEquipmentSupplierIstanbul } from './electrical-equipment-supplier-istanbul';
import { mirrOils } from './mirr-oils';
import { dentalEducationConsultingTexas } from './dental-education-consulting-texas';

export {
  industrialManufacturerIstanbul,
  technologyResellerFrankfurt,
  softwareProviderEurope,
  itNetworkCanada,
  electricalEquipmentSupplierIstanbul,
  dentalEducationConsultingTexas,
  mirrOils,
};

/**
 * The case pages, in the user's order (2026-10-31): the largest and most important clients first.
 * German Mirror (Mirr Oils) is third; its story is a scenario written for the user (CC-59, OQ-42).
 * Rhyton is never listed.
 */
export const casePages = [
  itNetworkCanada,
  industrialManufacturerIstanbul,
  mirrOils,
  electricalEquipmentSupplierIstanbul,
  technologyResellerFrankfurt,
  dentalEducationConsultingTexas,
  softwareProviderEurope,
];
