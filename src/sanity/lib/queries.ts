import { defineQuery } from "next-sanity";

// Query to fetch car details by ID
export const foodById = defineQuery(`
  *[_type == "food" && _id == $id] {
        name,
    category,
    price,
    originalPrice,
    tags,
    "image": image.asset->url,
    description,
    available,
    _id
  }
`);

// Query to fetch all cars
export const allfoods = defineQuery(`
  *[_type == "food"]{
     _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    "image": image.asset->url,
    description,
    available
  }

`);

export const allchefs =defineQuery( `
  *[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    "image": image.asset->url,
    description,
    available
  }`
)

