/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: applications
 * Interface for AplikimetSektort
 */
export interface AplikimetSektort {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  sectorName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  keyBenefit?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
}


/**
 * Collection ID: brands
 * Interface for PartnerBrands
 */
export interface PartnerBrands {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  brandName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  logo?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  websiteUrl?: string;
  /** @wixFieldType boolean */
  isExclusive?: boolean;
}


/**
 * Collection ID: certifications
 * Interface for TechnicalCertifications
 */
export interface TechnicalCertifications {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  certificationName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  icon?: string;
  /** @wixFieldType text */
  relevanceForHotels?: string;
  /** @wixFieldType text */
  relevanceForArchitects?: string;
  /** @wixFieldType text */
  relevanceForPublicProjects?: string;
  /** @wixFieldType text */
  relevanceForIndoorHealth?: string;
}


/**
 * Collection ID: educationaltopics
 * Interface for SPCEducationAdvantages
 */
export interface SPCEducationAdvantages {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  topicTitle?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedExplanation?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  illustrativeImage?: string;
  /** @wixFieldType text */
  comparisonHighlight?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: partnerservices
 * Interface for ServicesforArchitects
 */
export interface ServicesforArchitects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  icon?: string;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}


/**
 * Collection ID: products
 * Interface for SPCFlooringProducts
 */
export interface SPCFlooringProducts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  totalThickness?: number;
  /** @wixFieldType number */
  wearLayer?: number;
  /** @wixFieldType text */
  usageClass?: string;
  /** @wixFieldType number */
  acousticRating?: number;
  /** @wixFieldType text */
  clickSystem?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  productImage?: string;
  /** @wixFieldType url */
  technicalDataSheetUrl?: string;
}
