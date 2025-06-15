import React, { useState } from "react";
import Food from './Food';

const Specials = () => {
  const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)"
};
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOrderClick = (id) => {
    setSelectedItem(id);
    setShowModal(true);
  };

  const confirmOrder = () => {
    console.log(`Order confirmed for item ${selectedItem}`);
    setShowModal(false);
    alert("Order placed!");
  };

  return (
    <div className="special-container">
      <div className="special-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="cards">
        {Food.map((recipe) => (
          <div key={recipe.id} className="special-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="special-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button onClick={() => handleOrderClick(recipe.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>


      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h3>Confirm order</h3>
            <p>You won’t be able to undo your confirmation.</p>
            <button onClick={confirmOrder} style={{ marginRight: "1rem" }}>Confirm</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specials;