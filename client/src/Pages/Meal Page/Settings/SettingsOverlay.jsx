import React, { useState } from "react";
import RestrictionsComponent from "./RestrictionsComponent";
import AllergensComponent from "./AllergensComponent";
import { restrictions, allergensArray } from "../../../Utils/RestrictionsLists";

const SettingsOverlay = ({ setSettings, setDietaryPreferencesArray }) => {
  const [dietaryPreference, setDietaryPreference] = useState("None");
  const [allergens, setAllergens] = useState([]); // [allergen1, allergen2, ...
  const [calories, setCalories] = useState(""); // [calories, protein, ...

  const onSubmit = (e) => {}; //handle submit

  return (
    <div className="w-4/5 h-4/5 fixed z-10 bg-slate-500 flex flex-col">
      <div className="flex justify-between px-10">
        <h1>Settings</h1>
        <button onClick={() => setSettings(false)}>Close</button>
      </div>
      <form>
        <hr className="w-full border-2 border-black" />
        <div className="grid grid-cols-2">
          <div>
            {/* Leftmost grid */}
            {restrictions.map((type) => (
              <RestrictionsComponent
                key={type}
                type={type}
                setDietaryPreference={setDietaryPreference}
                dietaryPreference={dietaryPreference}
              />
            ))}
            <input
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(e) => {
                if (/^[0-9\b]+$/.test(e.target.value)) {
                  setCalories(e.target.value);
                }
              }}
            />
            {/* HELP FIX ONCHANGE*/}
          </div>
          <div>
            {/* Rightmost grid */}
            {allergensArray.map((allergen) => (
              <AllergensComponent
                key={allergen}
                allergens={allergens}
                setAllergens={setAllergens}
                title={allergen}
              />
            ))}
          </div>
        </div>
      </form>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default SettingsOverlay;
