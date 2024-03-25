import React from "react";

const AllergensComponent = ({ allergens, setAllergens, title }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={title}
        value={title}
        checked={allergens.includes(title)}
        onChange={() => {
          if (allergens.includes(title)) {
            setAllergens(allergens.filter((allergen) => allergen !== title));
          } else {
            setAllergens([...allergens, title]);
          }
        }}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default AllergensComponent;
