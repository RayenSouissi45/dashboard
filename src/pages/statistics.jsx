import React, { useState } from 'react';
import OrderStatistics from '../components/order-statistics';


const Statistics = () => {
  const orderData = [
    { date: '2022-01-01', orders: 10 },
    { date: '2022-01-02', orders: 15 },
    { date: '2022-01-03', orders: 20 },
    // more data here
  ];

  const [selectedUnit, setSelectedUnit] = useState('7d'); // Default selected unit is set to '7d'

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div className="statistics-page p-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Suivi des statistiques des commandes</h2>
        <div className="mb-4">
          <label htmlFor="unit">Time Unit:</label>
          <select id="unit" value={selectedUnit} onChange={handleUnitChange}>
            <option value="7d">7j</option>
            <option value="1m">1m</option>
            <option value="6m">6m</option>
            <option value="1y">year</option>
            <option value="5y">5years</option>
          </select>
        </div>
        <OrderStatistics data={orderData} selectedUnit={selectedUnit} />
      </div>
    </div>
  );
};

export default Statistics;
