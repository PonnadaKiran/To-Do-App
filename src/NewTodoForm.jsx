import React, { useState } from "react";
import PrioritySelector from "./PrioritySelector";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState(""); // State for Due Date
  const [description, setDescription] = useState(""); // State for Description
  const [selectedPriority, setSelectedPriority] = useState(""); // State for Priority

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    // Create a new to-do item object with all the properties
    const newTodo = {
      title: newItem,
      dueDate: dueDate,
      description: description,
      priority: selectedPriority,
      completed: false, // You can set the default value for completed here
    };

    onSubmit(newTodo); // Pass the new to-do item object to the onSubmit function

    // Reset the form fields
    setNewItem("");
    setDueDate("");
    setDescription("");
    setSelectedPriority("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <div className="form-item">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <div className="form-item">
          <label htmlFor="priority">Priority</label>
          <PrioritySelector
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
          />
        </div>
        <div className="form-item">
          <label htmlFor="dueDate">Due Date</label>
          <input
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            type="date"
            id="dueDate"
          />
        </div>
      </div>

      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          name="description"
        />
      </div>

      <button className="btn">Add</button>
    </form>
  );
}
