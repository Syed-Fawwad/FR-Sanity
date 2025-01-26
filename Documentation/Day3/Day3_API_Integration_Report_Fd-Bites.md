
# Day 3 - API Integration Report: Fd-Bites

## **Overview**
The focus of Day 3 was to integrate APIs into the Fd-Bites project and ensure seamless interaction between the frontend and the backend. Additionally, schemas for `food` and `chef` were set up in Sanity CMS to manage and display relevant data. This report documents the API integration process, schema details, queries, and validation rules.

---

## **API Integration Process**

### **Data Sources**
Data is managed and fetched from the following Sanity CMS schemas:  
1. **Food**: Contains details like food name, category, price, tags, and availability.  
2. **Chef**: Stores information about chefs, their positions, experiences, specialties, and bios.  

API endpoints were created using token-based authentication for secure access to data.

---

## **Schema Details**

### **1. Food Schema**
The `food` schema was designed to store and manage data related to food items. Validation rules were implemented for consistency.  

```typescript
export default {
  name: 'food',
  type: 'document',
  title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Food Name',
      validation: (Rule: Rule) => Rule.required().min(5).max(50),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      validation: (Rule: Rule) => Rule.required().min(3),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Current Price',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Price before discount (if any)',
      validation: (Rule: Rule) => Rule.optional().min(0),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
      validation: (Rule: Rule) => Rule.unique(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Food Image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the food item',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Availability status of the food item',
    },
  ],
};
```

### **2. Chef Schema**
The `chef` schema was created to store detailed profiles of chefs associated with the project.  

```typescript
export default {
  name: 'chef',
  type: 'document',
  title: 'Chef',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Chef Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
      description: 'Role or title of the chef (e.g., Head Chef, Sous Chef)',
    },
    {
      name: 'experience',
      type: 'number',
      title: 'Years of Experience',
      description: 'Number of years the chef has worked in the culinary field',
    },
    {
      name: 'specialty',
      type: 'string',
      title: 'Specialty',
      description: 'Specialization of the chef (e.g., Italian Cuisine, Pastry)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Chef Image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short bio or introduction about the chef',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Currently Active',
      description: 'Availability status of the chef',
    },
  ],
};
```

---

## **API Queries**

### **1. Fetch Food by ID**
Fetches details of a single food item based on its ID.  

```typescript
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
```

### **2. Fetch All Foods**
Retrieves all food items from the database.  

```typescript
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
```

### **3. Fetch All Chefs**
Retrieves all chef profiles from the database.  

```typescript
export const allchefs = defineQuery(`
  *[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    "image": image.asset->url,
    description,
    available
  }
`);
```

---

## **Conclusion**
The schemas and queries successfully enable seamless data management and retrieval from Sanity CMS. The next steps include optimizing API performance and ensuring security measures are maintained for all endpoints.

---
