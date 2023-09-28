"use client";

import { ageOptions, sexOptions, simpleclassName } from "@/constants";
import { useState } from "react";
import { Select } from "./Select";

export const Filter = () => {
  const [sex, setSex] = useState("any");
  const [age, setAge] = useState("any");

  return (
    <div className={simpleclassName}>
      <input placeholder="Search" className={simpleclassName} />
      <Select label="Sex" value={sex} onChange={setSex} options={sexOptions} />
      <Select label="Sex" value={age} onChange={setAge} options={ageOptions} />
    </div>
  );
};
