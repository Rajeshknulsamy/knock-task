import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItem, removeItem } from "../Store/itemSlice";
import { useNavigate } from "react-router-dom";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleView = (id) => {
    dispatch(selectItem(id));
    navigate(`/detail/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded shadow"
        >
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <div className="mt-2">
            <button
              onClick={() => handleView(item.id)}
              className="bg-green-500 text-white py-1 px-4 mr-2 rounded"
            >
              View
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white py-1 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
