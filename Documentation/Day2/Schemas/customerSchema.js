<<<<<<< HEAD
export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'name', type: 'string', title: 'Full Name' },
      { name: 'email', type: 'string', title: 'Email Address' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'text', title: 'Delivery Address' },
      { name: 'orderHistory', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], title: 'Order History' },
    ],
  };
=======
export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'name', type: 'string', title: 'Full Name' },
      { name: 'email', type: 'string', title: 'Email Address' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'text', title: 'Delivery Address' },
      { name: 'orderHistory', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], title: 'Order History' },
    ],
  };
>>>>>>> 2a81b480c1e7d9bde87fa8f8e60b8a7b820455c4
  