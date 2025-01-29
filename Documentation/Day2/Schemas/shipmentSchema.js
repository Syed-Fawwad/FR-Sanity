<<<<<<< HEAD
export default {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      { name: 'shipmentId', type: 'string', title: 'Shipment ID' },
      { name: 'orderId', type: 'reference', to: [{ type: 'order' }], title: 'Order' },
      { name: 'status', type: 'string', title: 'Shipment Status', options: { list: ['In Transit', 'Delivered'] } },
      { name: 'assignedDriver', type: 'string', title: 'Assigned Driver' },
      { name: 'deliveryZone', type: 'reference', to: [{ type: 'deliveryZone' }], title: 'Delivery Zone' },
    ],
  };
=======
export default {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      { name: 'shipmentId', type: 'string', title: 'Shipment ID' },
      { name: 'orderId', type: 'reference', to: [{ type: 'order' }], title: 'Order' },
      { name: 'status', type: 'string', title: 'Shipment Status', options: { list: ['In Transit', 'Delivered'] } },
      { name: 'assignedDriver', type: 'string', title: 'Assigned Driver' },
      { name: 'deliveryZone', type: 'reference', to: [{ type: 'deliveryZone' }], title: 'Delivery Zone' },
    ],
  };
>>>>>>> 2a81b480c1e7d9bde87fa8f8e60b8a7b820455c4
  