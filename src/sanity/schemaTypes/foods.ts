import { Rule } from "sanity";
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
        description:
          'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
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
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
        validation: (Rule: Rule) => Rule.unique(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
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










// import { Rule } from 'sanity';

// export default {
//   name: 'food',
//   type: 'document',
//   title: 'Food',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Food Name',
//       validation: (Rule: Rule) => Rule.required().min(5).max(50),
//     },
//     {
//       name: 'category',
//       type: 'string',
//       title: 'Category',
//       description:
//         'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
//       validation: (Rule: Rule) => Rule.required().min(3),
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Current Price',
//       validation: (Rule: Rule) => Rule.required().min(0),
//     },
//     {
//       name: 'originalPrice',
//       type: 'number',
//       title: 'Original Price',
//       description: 'Price before discount (if any)',
//       validation: (Rule: Rule) => Rule.optional().min(0),
//     },
//     {
//       name: 'tags',
//       type: 'array',
//       title: 'Tags',
//       of: [{ type: 'string' }],
//       options: {
//         layout: 'tags',
//       },
//       description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
//       validation: (Rule: Rule) => Rule.unique(),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Food Image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       description: 'Short description of the food item',
//     },
//     {
//       name: 'available',
//       type: 'boolean',
//       title: 'Available',
//       description: 'Availability status of the food item',
//     },
//   ],
// };