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
  