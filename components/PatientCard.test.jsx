import React from "react";
import { render } from "@testing-library/react";
import { PatientCard } from "./PatientCard";

const testPatient = {
  patient_id: 1,
  first_name: "John",
  last_name: "Doe",
  gender: "male",
  age: 30,
  email: "",
  avatar: "",
};

describe("PatientCard", () => {
  it("renders patient information correctly", () => {
    const { getByText, getByRole } = render(
      <PatientCard patient={testPatient} />
    );

    // Check if patient information is displayed in the component
    expect(getByText("1")).toBeInTheDocument(); // Assuming '1' is the patient_id
    expect(getByText("John Doe")).toBeInTheDocument();

    // Check if the link with the correct href is present
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "/detail/1"); // Adjust the href as needed
  });
});
