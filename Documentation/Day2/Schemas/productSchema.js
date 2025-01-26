export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price (USD)' },
      { name: 'stock', type: 'number', title: 'Stock Quantity' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'image', type: 'image', title: 'Product Image' },
    ],
  };
  