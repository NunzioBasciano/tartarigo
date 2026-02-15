"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function TestPage() {
  // State to manage form input data
  const [formData, setFormData] = useState({
    data: "",
  });

  // Handle change for text inputs (name, email, etc.)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => console.log(formData), [formData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/data", {
        formData,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">data</label>
        <input onChange={handleChange} type="text" name="data" id="data" />
        <input type="submit" value="submit" />
      </form>

      <div></div>
    </div>
  );
}
