import React, { useState } from "react";
import MealPlanChart from "./Meal Page Components/MealPlanChart";
import SettingsOverlay from "./Settings/SettingsOverlay";

const MealPlanMain = () => {
  const [settings, setSettings] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [dietaryPreferencesArray, setDietaryPreferencesArray] = useState([]);

  return (
    <div className="bg-back h-screen flex flex-col items-center">
      <button onClick={() => setSettings(true)}>Settings</button>
      <MealPlanChart
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <button onClick={() => setButtonClicked(true)}>Generate Meal Plan</button>
      {settings && (
        <SettingsOverlay
          setSettings={setSettings}
          setDietaryPreferencesArray={setDietaryPreferencesArray}
        />
      )}
    </div>
  );
};

export default MealPlanMain;
