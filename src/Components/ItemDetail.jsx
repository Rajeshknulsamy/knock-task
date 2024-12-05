import React from "react";
import { useSelector } from "react-redux";

const ItemDetail = () => {
  const selectedItem = useSelector((state) => state.items.selectedItem);

  if (!selectedItem) {
    return <p className="p-4 text-center">No item selected.</p>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{selectedItem.name}</h2>
      <p className="mb-4">{selectedItem.description}</p>
      <p className="mb-4">${selectedItem.price}</p>
      <div>
        {selectedItem.images.map((file, idx) => (
          <img
            key={idx}
            src={URL.createObjectURL(file)}
            alt={selectedItem.name}
            className="w-32 h-32 object-cover mr-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;
