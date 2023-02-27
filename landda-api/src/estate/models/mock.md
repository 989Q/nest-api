```js
db.createCollection("Properties")

db.Properties.insertOne({
  "user_id": ObjectId("614d5b5d43c02aaf6efdcf22"),

  "title": "Spacious 2BR Apartment with Balcony",
  "description": "This beautiful 2-bedroom apartment has a large balcony with stunning views of the city. The bedrooms are spacious and the living area is perfect for entertaining guests. The building has a pool and gym for residents to use.",
  "address": "123 Main St",
  "city": "Los Angeles",
  "state": "CA",
  "country": "USA",
  "zip_code": "90001",
  "price": 2000.00,

  "bedrooms": 2,
  "bathrooms": 2,
  "parking": 2,
  "square_feet": 1200,

  "property_type": "Apartment",
  "status": "Available",
  "created_at": new Date(),
  "updated_at": new Date(),
  "images": [
    ObjectId("614d5c7043c02aaf6efdcf25"),
    ObjectId("614d5c7e43c02aaf6efdcf26")
  ]
})
```

### Thailand

```js
 {
    "property_type": "House",
    "property_status": "Sold",
    "post_status": "Available",

    "title": "Spacious 3-Bedroom House in Chiang Mai",
    "description": "Beautifully designed and spacious house with a big yard and outdoor pool. Perfect for families or those who love to entertain guests.",
    "location": {
        "address": "123 Main Street",
        "subdistrict": "Khlong Toei",
        "district": "Khlong Toei",
        "province": "Bangkok",
        "postcode": "10110",
        "country": "Thailand",
    },
    "price": 10000000,

    "bedrooms": 3,
    "bathrooms": 3,
    "parking": ,
    "size": 200,
    "images": [
      "https://example.com/image4.jpg",
      "https://example.com/image5.jpg",
      "https://example.com/image6.jpg"
    ],
    "created_at": new Date(),
    "updated_at": new Date(),

    "agent_id": ObjectId("6179c81371cc3f4c4a22f0bf")
  },
```

@ObjectType()
export class Estate {
  @Field(() => ID)
  id: string;

  @Field()
  property_type: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Location)
  location: Location;

  @Field()
  price: number;

  @Field()
  bedrooms: number;

  @Field()
  bathrooms: number;

  @Field()
  size: number;

  @Field(() => [String])
  images: string[];

  @Field(() => ID)
  agent_id: string;
}

@ObjectType()
export class Location {
  @Field()
  address: string;

  @Field()
  subdistrict: string;

  @Field()
  district: string;

  @Field()
  province: string;

  @Field()
  postcode: string;

  @Field()
  country: string;

  @Field(() => Coordinates)
  coordinates: Coordinates;
}