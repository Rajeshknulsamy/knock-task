import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItemForm from "./Components/AddItemForm";
import ItemList from "./Components/ItemList";
import ItemDetail from "./Components/ItemDetail";
import AdditionalDetails from "./Components/AdditionalDetails";
import DigitalProducts from "./Components/DigitalProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddItemForm />} />
        <Route path="/list" element={<ItemList />} />
        <Route path="/detail/:id" element={<ItemDetail />} />
        <Route path="/adddetail" element={<AdditionalDetails/>}/>
        <Route path="/digitalproduct" element={<DigitalProducts/>}/>
      </Routes>
    </Router>
  );
};

export default App;
