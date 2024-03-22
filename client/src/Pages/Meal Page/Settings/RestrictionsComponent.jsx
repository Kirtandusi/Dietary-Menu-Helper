import React from "react";

const RestrictionsComponent = ({
  type,
  setDietaryPreference,
  dietaryPreference,
}) => {
  return (
    <div>
      <input
        type="radio"
        id={type}
        value={type}
        checked={dietaryPreference === type}
        onChange={() => setDietaryPreference(type)}
      />
      <label htmlFor={type}>{type}</label>
    </div>
  );
};

export default RestrictionsComponent;
