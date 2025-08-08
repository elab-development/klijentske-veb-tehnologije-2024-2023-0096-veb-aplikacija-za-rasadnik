export interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  price: number;
  description?: string;
  bibliography?: string;
  family?: string;
  family_common_name?: string;
  image_url?: string;
  sun?: string;
  maintenance?: string;
}
