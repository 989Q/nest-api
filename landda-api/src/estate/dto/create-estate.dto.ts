export class CreateEstateDto {
    // estate_id: number;
    property_type: string;
    property_status: string;
    post_status: string;
    title: string;
    description: string;
    location: {
      address: string;
      subdistrict: string;
      district: string;
      province: string;
      postcode: string;
      country: string;
    };
    price: number;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    size: number;
    images: string[];
  }
