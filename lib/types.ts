export interface ProductData {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}

export interface ProductIAte {
  product: Product;
  ateDate: Date;
}

export interface Product {
  _id: string;
  _keywords: string[];
  added_countries_tags: any[];
  additives_n: number;
  additives_old_n: number;
  additives_old_tags: string[];
  additives_original_tags: string[];
  additives_tags: string[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: any[];
  allergens_lc: string;
  allergens_tags: any[];
  amino_acids_tags: any[];
  brands: string;
  brands_tags: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_lc: string;
  categories_old: string;
  categories_properties: CategoriesProperties;
  categories_properties_tags: string[];
  categories_tags: string[];
  category_properties: CategoryProperties;
  checkers_tags: any[];
  ciqual_food_name_tags: string[];
  cities_tags: any[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: number;
  completeness: number;
  correctors_tags: string[];
  countries: string;
  countries_hierarchy: string[];
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_tags: string[];
  debug_param_sorted_langs: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_extended_data: EcoscoreExtendedData;
  ecoscore_extended_data_version: string;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors_tags: string[];
  emb_codes: string;
  emb_codes_tags: string[];
  entry_dates_tags: string[];
  expiration_date: Date;
  food_groups: string;
  food_groups_tags: string[];
  generic_name: string;
  generic_name_en: string;
  generic_name_sv: string;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags: string[];
  ingredients: Ingredient[];
  ingredients_analysis: IngredientsAnalysis;
  ingredients_analysis_tags: string[];
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: string[];
  ingredients_n: number;
  ingredients_n_tags: string[];
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number;
  ingredients_tags: string[];
  ingredients_text: string;
  ingredients_text_en: string;
  ingredients_text_sv: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_en: string;
  ingredients_text_with_allergens_sv: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy: string[];
  labels_lc: string;
  labels_old: string;
  labels_tags: string[];
  lang: string;
  languages: Languages;
  languages_codes: LanguagesCodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  link: string;
  main_countries_tags: any[];
  manufacturing_places: string;
  manufacturing_places_tags: string[];
  max_imgid: string;
  minerals_tags: any[];
  misc_tags: string[];
  no_nutrition_data: string;
  nova_group: number;
  nova_group_debug: string;
  nova_groups: string;
  nova_groups_markers: { [key: string]: Array<string[]> };
  nova_groups_tags: string[];
  nucleotides_tags: any[];
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriscore_data: NutriscoreData;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  origin: string;
  origin_en: string;
  origin_sv: string;
  origins: string;
  origins_hierarchy: any[];
  origins_lc: string;
  origins_old: string;
  origins_tags: any[];
  other_nutritional_substances_tags: any[];
  packaging: string;
  packaging_hierarchy: string[];
  packaging_lc: string;
  packaging_old: string;
  packaging_tags: string[];
  packaging_text: string;
  packaging_text_en: string;
  packaging_text_sv: string;
  packagings: any[];
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  product_name_en: string;
  product_name_sv: string;
  product_quantity: string;
  purchase_places: string;
  purchase_places_tags: string[];
  quantity: string;
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  selected_images: SelectedImages;
  serving_quantity: string;
  serving_size: string;
  sortkey: number;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores: string;
  stores_tags: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: any[];
  traces_lc: string;
  traces_tags: any[];
  unique_scans_n: number;
  unknown_ingredients_n: number;
  unknown_nutrients_tags: any[];
  update_key: string;
  vitamins_tags: any[];
  with_sweeteners: number;
}

export interface CategoriesProperties {
  'agribalyse_food_code:en': string;
  'agribalyse_proxy_food_code:en': string;
  'ciqual_food_code:en': string;
}

export interface CategoryProperties {
  'ciqual_food_name:en': string;
  'ciqual_food_name:fr': string;
}

export interface EcoscoreData {
  adjustments: Adjustments;
  ecoscore_not_applicable_for_category: string;
  scores: Adjustments;
  status: string;
}

export interface Adjustments {}

export interface EcoscoreExtendedData {
  impact: Impact;
}

export interface Impact {
  ef_single_score_log_stddev: number;
  likeliest_impacts: LikeliestImpacts;
  likeliest_recipe: { [key: string]: number };
  mass_ratio_uncharacterized: number;
  uncharacterized_ingredients: UncharacterizedIngredients;
  uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportionClass;
  uncharacterized_ingredients_ratio: UncharacterizedIngredientsMassProportionClass;
  warnings: string[];
}

export interface LikeliestImpacts {
  Climate_change: number;
  EF_single_score: number;
}

export interface UncharacterizedIngredients {
  impact: string[];
  nutrition: any[];
}

export interface UncharacterizedIngredientsMassProportionClass {
  impact: number;
  nutrition: number;
}

export interface Images {
  '1': The1;
  '2': The1;
  '3': The1;
  '4': The1;
  '5': The1;
  '6': The1;
  '7': The1;
  front_sv: Sv;
  ingredients_sv: Sv;
  nutrition_sv: Sv;
}

export interface The1 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}

export interface Sizes {
  '100': The100;
  '400': The100;
  full: The100;
  '200'?: The100;
}

export interface The100 {
  h: number;
  w: number;
}

export interface Sv {
  angle: null | string;
  geometry: string;
  imgid: string;
  normalize: null | string;
  rev: string;
  sizes: Sizes;
  white_magic: null | string;
  x1: null | string;
  x2: null | string;
  y1: null | string;
  y2: null | string;
  coordinates_image_size?: string;
}

export interface Ingredient {
  id: string;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  vegan?: string;
  vegetarian?: string;
  ingredients?: Ingredient[];
}

export interface IngredientsAnalysis {
  'en:maybe-vegan': string[];
  'en:maybe-vegetarian': string[];
}

export interface Languages {
  'en:english': number;
  'en:swedish': number;
}

export interface LanguagesCodes {
  en: number;
  sv: number;
}

export interface NutrientLevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}

export interface Nutriments {
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kcal_value_computed': number;
  'energy-kj': number;
  'energy-kj_100g': number;
  'energy-kj_serving': number;
  'energy-kj_unit': string;
  'energy-kj_value': number;
  'energy-kj_value_computed': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number;
  'nova-group': number;
  'nova-group_100g': number;
  'nova-group_serving': number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
}

export interface NutriscoreData {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_ratio: number;
  saturated_fat_ratio_points: number;
  saturated_fat_ratio_value: number;
  saturated_fat_value: number;
  score: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}

export interface SelectedImages {
  front: Front;
  ingredients: Front;
  nutrition: Front;
}

export interface Front {
  display: Display;
  small: Display;
  thumb: Display;
}

export interface Display {
  sv: string;
}
