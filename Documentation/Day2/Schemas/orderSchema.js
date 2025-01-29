<<<<<<< HEAD
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'customerId', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
      { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
      { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Shipped', 'Delivered'] } },
      { name: 'createdAt', type: 'datetime', title: 'Order Date' },
    ],
  };
=======
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'customerId', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
      { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
      { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Shipped', 'Delivered'] } },
      { name: 'createdAt', type: 'datetime', title: 'Order Date' },
    ],
  };
>>>>>>> 2a81b480c1e7d9bde87fa8f8e60b8a7b820455c4
  