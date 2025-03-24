import React from 'react';

const Filter = () => {
  return (
    <div className="w-64 p-4 border-r border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Select Price Range</h3>
        <input
          type="range"
          min="12400"
          max="101000"
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Select Seats Range</h3>
        <input
          type="range"
          min="12400"
          max="101000"
          className="w-full"
        />
      </div>
      <select className="w-full p-2 border border-gray-300 rounded">
        <option value="">province</option>
        <option value="Bangkok">Bangkok</option>
        <option value="Chiang Mai">Chiang Mai</option>
      </select>
    </div>
  );
};

export default Filter;