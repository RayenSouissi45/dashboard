import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      orderDate: '2023-05-01',
      totalAmount: 50.99,
      orderStatus: 'En cours de traitement',
      paymentStatus: 'Payé',
      shippingAddress: '123 Rue Principale, Ville, Pays',
      items: [
        { id: 1, name: 'Produit 1', quantity: 2, price: 10.99 },
        { id: 2, name: 'Produit 2', quantity: 1, price: 19.99 },
      ],
    },
    // Add more orders here
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2023-05-02',
      totalAmount: 35.5,
      orderStatus: 'En attente',
      paymentStatus: 'Payé',
      shippingAddress: '456 Rue Secondaire, Ville, Pays',
      items: [
        { id: 3, name: 'Produit 3', quantity: 3, price: 5.99 },
        { id: 4, name: 'Produit 4', quantity: 2, price: 9.99 },
      ],
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      orderDate: '2023-05-03',
      totalAmount: 82.0,
      orderStatus: 'Livraison en cours',
      paymentStatus: 'Payé',
      shippingAddress: '789 Rue Tertiaire, Ville, Pays',
      items: [
        { id: 5, name: 'Produit 5', quantity: 1, price: 32.0 },
        { id: 6, name: 'Produit 6', quantity: 4, price: 12.0 },
      ],
    },
    {
      id: 4,
      customerName: 'Robert Davis rararar',
      orderDate: '2023-05-04',
      totalAmount: 45.25,
      orderStatus: 'En attente',
      paymentStatus: 'Non payé',
      shippingAddress: '321 Rue Troisième, Ville, Pays',
      items: [
        { id: 7, name: 'Produit 7', quantity: 2, price: 12.99 },
        { id: 8, name: 'Produit 8', quantity: 1, price: 19.99 },
      ],
    },
    {
      id: 5,
      customerName: 'Emily Wilson',
      orderDate: '2023-05-05',
      totalAmount: 60.0,
      orderStatus: 'Terminée',
      paymentStatus: 'Payé',
      shippingAddress: '987 Rue Quatrième, Ville, Pays',
      items: [
        { id: 9, name: 'Produit 9', quantity: 3, price: 15.0 },
        { id: 10, name: 'Produit 10', quantity: 2, price: 12.0 },
      ],
    },
  ];

  return (
    <div className="orders-page">
          <h1 className="text-2xl font-bold mb-4">Liste des commandes</h1>
      <table className="w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              ID de Commande
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Nom du Client
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Date de Commande
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Montant Total
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Statut de Commande
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Statut de Paiement
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Adresse de Livraison
            </th>
            <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Articles Commandés
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">{order.id}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.customerName}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.orderDate}</td>
              <td className="py-3 px-4 border-b border-gray-200">
                {order.items.length > 1 ? order.totalAmount : ''}
              </td>
              <td className="py-3 px-4 border-b border-gray-200">{order.orderStatus}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.paymentStatus}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.shippingAddress}</td>
              <td className="py-3 px-4 border-b border-gray-200">
                <ul className="list-disc pl-6">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex items-center">
                      <span className="mr-2">{item.name}</span>
                      <span className="text-gray-500">
                        {item.quantity > 1 ? `${item.quantity}x` : ''}
                      </span>
                      <span className="ml-1">{item.price}$</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
