export interface SystembolagetData {
  metadata: Metadata;
  products: SystembolagetProduct[];
  filters: Filter[];
  filterMenuItems: any[];
}

export interface Filter {
  name: string;
  type: string;
  displayName: string;
  description: null | string;
  summary: null | string;
  legalText: null | string;
  isMultipleChoice: boolean;
  isActive: boolean;
  isSubtitleTextVisible: boolean;
  isExpanded: boolean;
  searchModifiers: SearchModifier[];
  child: Child | null;
}

export interface Child {
  name: string;
  type: string;
  displayName: string;
  description: null | string;
  summary: null;
  legalText: null;
  isMultipleChoice: boolean;
  isSubtitleTextVisible: boolean;
  isActive: boolean;
  isExpanded: boolean;
  searchModifiers: SearchModifier[];
  child: Child | null;
}

export interface SearchModifier {
  value: string;
  count: number;
  isActive: boolean;
  friendlyUrl: null | string;
  subtitleText: null | string;
}

export interface Metadata {
  docCount: number;
  fullAssortmentDocCount: number;
  nextPage: number;
  priceRange: Range;
  volumeRange: Range;
  alcoholPercentageRange: Range;
  sugarContentRange: Range;
  sugarContentGramPer100mlRange: Range;
  didYouMeanQuery: null;
}

export interface Range {
  min: number;
  max: number;
}

export interface SystembolagetProduct {
  productId: string;
  productNumber: string;
  productNameBold: string;
  productNameThin: null | string;
  category: null;
  productNumberShort: string;
  producerName: string;
  supplierName: string;
  isKosher: boolean;
  bottleText: string;
  restrictedParcelQuantity: number;
  isOrganic: boolean;
  isSustainableChoice: boolean;
  isClimateSmartPackaging: boolean;
  isEthical: boolean;
  ethicalLabel: null;
  isWebLaunch: boolean;
  productLaunchDate: Date;
  sellStartTime: string;
  isCompletelyOutOfStock: boolean;
  isTemporaryOutOfStock: boolean;
  alcoholPercentage: number;
  volumeText: string;
  volume: number;
  price: number;
  country: string;
  originLevel1: null | string;
  originLevel2: null | string;
  categoryLevel1:
    | "Alkoholfritt"
    | "Öl"
    | "Vin"
    | "Sprit"
    | "Cider & blanddrycker";
  categoryLevel2: "Cider" | "Blanddryck";
  categoryLevel3: string;
  categoryLevel4: null | string;
  customCategoryTitle: string;
  assortmentText: string;
  usage: null | string;
  taste: null | string;
  tasteSymbols: string[];
  tasteClockGroupBitter: null;
  tasteClockGroupSmokiness: null;
  tasteClockBitter: number;
  tasteClockFruitacid: number;
  tasteClockBody: number;
  tasteClockRoughness: number;
  tasteClockSweetness: number;
  tasteClockSmokiness: number;
  tasteClockCasque: number;
  assortment: string;
  recycleFee: number;
  isManufacturingCountry: boolean;
  isRegionalRestricted: boolean;
  packagingLevel1: string;
  isNews: boolean;
  images: Image[];
  isDiscontinued: boolean;
  isSupplierTemporaryNotAvailable: boolean;
  sugarContent: number;
  sugarContentGramPer100ml: number;
  seal: string[];
  vintage: null;
  grapes: any[];
  otherSelections: null;
  tasteClocks: TasteClock[];
  color: null | string;
  dishPoints: null;
}

export interface Image {
  imageUrl: string;
  fileType: null;
  size: null;
}

export interface TasteClock {
  key: string;
  value: number;
}
