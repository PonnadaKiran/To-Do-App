import React, { useState } from "react";

function PrioritySelector({ selectedPriority, setSelectedPriority }) {
  const priorityColors = {
    Low: "yellow",
    Medium: "green",
    High: "red",
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPriority(selectedValue);
  };

  const selectStyle = {
    backgroundColor: priorityColors[selectedPriority],
    color: "white",
  };

  return (
    <select
      className="select"
      value={selectedPriority}
      onChange={handleChange}
      style={selectStyle}
    >
      <option value="" disabled hidden>
        Select priority
      </option>
      <option value="Low" style={{ backgroundColor: "white", color: "yellow" }}>Low</option>
      <option value="Medium" style={{ backgroundColor: "white", color: "green" }}>Medium</option>
      <option value="High" style={{ backgroundColor: "white", color: "red" }}>High</option>
    </select>
  );
}

export default PrioritySelector;