import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md"
import { useNavigate,Link } from "react-router-dom";
const AdditionalDetails = () => {
  const [benefits, setBenefits] = useState(["Avoid talking about politics", "Avoid talking about religion"]);
  const [additionalDetails, setAdditionalDetails] = useState([{ attribute: "", value: "" }]);

  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };
  
  const handleBenefitChange = (index, value) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = value;
    setBenefits(updatedBenefits);
  };

  const handleRemoveBenefit = (index) => {
    const updatedBenefits = benefits.filter((_, i) => i !== index);
    setBenefits(updatedBenefits);
  };

  const handleAddDetail = () => {
    setAdditionalDetails([...additionalDetails, { attribute: "", value: "" }]);
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...additionalDetails];
    updatedDetails[index][field] = value;
    setAdditionalDetails(updatedDetails);
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = additionalDetails.filter((_, i) => i !== index);
    setAdditionalDetails(updatedDetails);
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg shadow">
      <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-4">Additional Details</h2>
      <button
          onClick={handleAddBenefit}
          className="text-blue-500 px-4 py-2 font-bold text-lg rounded"
        >
          + Add
        </button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Benefits</h3>
        
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={benefit}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
              placeholder="If anyone want to contact they can go"
              className="flex-1 p-2 border rounded mr-2"
            />
            <button
              onClick={() => handleRemoveBenefit(index)}
              className="text-white bg-red-500 p-4 rounded"
            >
              <MdDeleteOutline />

            </button>
          </div>
        ))}
        
      </div>

      <hr className="my-4" />

 
      <div>
      <div className="flex justify-between">
<h3 className="font-semibold mb-2">Additional Details</h3>
          <button
        onClick={handleAddDetail}
        className="text-blue-500 font-bold px-4 pb-4 text-lg rounded"
      >
        + Add
      </button>
</div>
        {additionalDetails.map((detail, index) => (
         

          <div key={index} className="flex items-center space-x-2 mb-2">
            
            <input
              type="text"
              placeholder="Attribute"
              value={detail.attribute}
              onChange={(e) =>
                handleDetailChange(index, "attribute", e.target.value)
              }
              className="flex-1 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Value"
              value={detail.value}
              onChange={(e) =>
                handleDetailChange(index, "value", e.target.value)
              }
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={() => handleRemoveDetail(index)}
              className="text-white bg-red-500 p-3 rounded"
            >
              <MdDeleteOutline />

            </button>
          </div>

        
        ))}
        
      </div>

      <hr className="my-4" />

     
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <select className="w-full p-2 border rounded">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>

      
      <div className="mt-6">
        <Link to={"/digitalproduct"}>
        <button  className="w-full bg-blue-500 text-white py-2 rounded">
          Next
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default AdditionalDetails;
