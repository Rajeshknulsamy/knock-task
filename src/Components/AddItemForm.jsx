import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/itemSlice";
import { Link } from "react-router-dom";
const AddItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = () => {
    if (!name || !description || !price) return;

    const newItem = {
      id: Date.now(),
      name,
      description,
      price,
      images,
    };
    dispatch(addItem(newItem));
    setName("");
    setDescription("");
    setPrice("");
    setImages([]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-center text-2xl p-3 border m-2">About</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-2 bg-gray-100 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 border bg-gray-100 rounded"
      ></textarea>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Cover Photos (Upload up to 5 photos)
        </label>
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-16 w-full border border-dashed rounded ${
                images[index] ? "bg-gray-200" : "bg-gray-100"
              }`}
            >
              {images[index] ? (
                <img
                  src={URL.createObjectURL(images[index])}
                  alt={`Preview ${index + 1}`}
                  className="h-full w-full object-cover rounded"
                />
              ) : (
                <label className="text-gray-400 cursor-pointer">
                  +
                  <input
                    type="file"
                    onChange={(e) => {
                      const files = [...images];
                      files[index] = e.target.files[0];
                      setImages(files);
                    }}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ))}
        </div>
      </div>
      <label >Price</label>
      <input
        type="number"
        placeholder="$0.00"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-4 p-2 border bg-gray-100 rounded"
      />
      <Link to={"/adddetail"}>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Next
      </button>
      </Link>
      
    </div>
  );
};

export default AddItemForm;
