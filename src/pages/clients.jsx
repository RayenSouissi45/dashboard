import React, { useState } from 'react';

const Clients = () => {
    const clients = [
        {
          id: 1,
          name: 'Client 1',
          contact: {
            phone: '123-456-7890',
            email: 'client1@example.com',
          },
          purchaseHistory: [
            {
              productId: 1,
              productName: 'Produit 1',
              date: '2023-05-01',
              transactionId: 'ABC123',
            },
            {
              productId: 2,
              productName: 'Produit 2',
              date: '2023-05-05',
              transactionId: 'DEF456',
            },
          ],
          feedback: {
            rating: 4.5,
            comment: 'Excellent service !',
          },
          totalSpend: 100.99,
          lastInteraction: '2023-05-10',
        },
        {
          id: 2,
          name: 'Client 2',
          contact: {
            phone: '987-654-3210',
            email: 'client2@example.com',
          },
          purchaseHistory: [
            {
              productId: 3,
              productName: 'Produit 3',
              date: '2023-04-28',
              transactionId: 'GHI789',
            },
          ],
          feedback: {
            rating: 3.8,
            comment: 'Bons produits de qualité.',
          },
          totalSpend: 75.5,
          lastInteraction: '2023-05-12',
        },
        {
          id: 3,
          name: 'Client 3',
          contact: {
            phone: '555-555-5555',
            email: 'client3@example.com',
          },
          purchaseHistory: [],
          feedback: {
            rating: 0,
            comment: '',
          },
          totalSpend: 0,
          lastInteraction: '2023-05-15',
        },
        {
          id: 4,
          name: 'Client 4',
          contact: {
            phone: '111-111-1111',
            email: 'client4@example.com',
          },
          purchaseHistory: [
            {
              productId: 4,
              productName: 'Produit 4',
              date: '2023-05-10',
              transactionId: 'JKL012',
            },
            {
              productId: 5,
              productName: 'Produit 5',
              date: '2023-05-12',
              transactionId: 'MNO345',
            },
            {
              productId: 4,
              productName: 'Produit 6',
              date: '2023-05-15',
              transactionId: 'PQR678',
            },
            {
                productId: 6,
                productName: 'Produit 6',
                date: '2023-05-15',
                transactionId: 'PQR678',
              },
              {
                productId: 7,
                productName: 'Produit 6',
                date: '2023-05-18',
                transactionId: 'PQR678',
              },
          ],
          feedback: {
            rating: 4.2,
            comment: 'Bon service client.',
          },
          totalSpend: 50.25,
          lastInteraction: '2023-05-18',
        },
        {
          id: 5,
          name: 'Client 5',
          contact: {
            phone: '222-222-2222',
            email: 'client5@example.com',
          },
          purchaseHistory: [
            {
              productId: 7,
              productName: 'Produit 7',
              date: '2023-05-10',
              transactionId: 'STU901',
            },
          ],
          feedback: {
            rating: 5,
            comment: 'Super expérience dachat ! ',
          },
          totalSpend: 80.0,
          lastInteraction: '2023-05-18',
        },
      ];
  const [expandedClientId, setExpandedClientId] = useState(null);

  const handleExpandClick = (clientId) => {
    setExpandedClientId(clientId === expandedClientId ? null : clientId);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Liste des Clients</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nom du Client</th>
            <th className="px-4 py-2">Coordonnées</th>
            <th className="px-4 py-2">Historique des Achats</th>
            <th className="px-4 py-2">Commentaires</th>
            <th className="px-4 py-2">Dépense Totale</th>
            <th className="px-4 py-2">Dernière Interaction</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border px-4 py-2">{client.name}</td>
              <td className="border px-4 py-2">
                <p>Téléphone: {client.contact.phone}</p>
                <p>Email: {client.contact.email}</p>
              </td>
              <td className="border px-4 py-2">
                <div>
                  {client.purchaseHistory.length > 0 ? (
                    <>
                      <button
                        className="text-blue-500 underline"
                        onClick={() => handleExpandClick(client.id)}
                      >
                        {expandedClientId === client.id ? 'Cacher' : 'Afficher'}
                        {' ('}
                        {client.purchaseHistory.length}
                        {')'}
                      </button>
                      {expandedClientId === client.id && (
                        <div className="mt-2">
                          {client.purchaseHistory.map((purchase) => (
                            <div key={purchase.transactionId}>
                              {purchase.date} - {purchase.productName}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <p>Aucun achat</p>
                  )}
                </div>
              </td>
              <td className="border px-4 py-2">
                <p>Note: {client.feedback.rating}</p>
                <p>Commentaire: {client.feedback.comment}</p>
              </td>
              <td className="border px-4 py-2">{client.totalSpend} €</td>
              <td className="border px-4 py-2">{client.lastInteraction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
