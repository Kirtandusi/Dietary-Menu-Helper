import React, { useState } from "react";
import RestrictionsComponent from "./RestrictionsComponent";

const SettingsOverlay = ({ setSettings, setDietaryPreferencesArray }) => {
  const [dietaryPreference, setDietaryPreference] = useState("None");
  const restrictions = [
    "None",
    "Pescitarian",
    "Halal",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
  ];
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
            {restrictions.map((type) => (
              <RestrictionsComponent
                key={type}
                type={type}
                setDietaryPreference={setDietaryPreference}
                dietaryPreference={dietaryPreference}
              />
            ))}
          </div>
          <div></div>
        </div>
      </form>
      <button>Submit</button>
    </div>
  );
};

export default SettingsOverlay;
