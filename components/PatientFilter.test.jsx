import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PatientFilter } from "./PatientFilter";
import { PatientContext } from "@/context/PatientContext";

const mockPatientFilterControls = {
  patientFilter: {
    sort: "asc",
    search: "",
    gender: "any",
    age: "any",
  },
  changePatientFilter: jest.fn(),
};

describe("PatientFilter component", () => {
  it("renders select options and input fields", () => {
    render(
      <PatientContext.Provider
        value={{ patientFilterControls: mockPatientFilterControls }}
      >
        <PatientFilter />
      </PatientContext.Provider>
    );

    // Check if the select options and input fields are rendered
    expect(screen.getByLabelText("Sort")).toBeInTheDocument();
    expect(screen.getByLabelText("Gender")).toBeInTheDocument();
    expect(screen.getByLabelText("Age")).toBeInTheDocument();
  });

  it("calls changePatientFilter when options are changed", () => {
    render(
      <PatientContext.Provider
        value={{ patientFilterControls: mockPatientFilterControls }}
      >
        <PatientFilter />
      </PatientContext.Provider>
    );

    // Change the sort option
    fireEvent.change(screen.getByLabelText("Sort"), {
      target: { value: "desc" },
    });

    // Check if changePatientFilter was called with the correct arguments
    expect(mockPatientFilterControls.changePatientFilter).toHaveBeenCalledWith({
      sort: "desc",
    });

    // Change the age option
    fireEvent.change(screen.getByLabelText("Age"), {
      target: { value: "18to20" },
    });

    // Check if changePatientFilter was called with the correct arguments
    expect(mockPatientFilterControls.changePatientFilter).toHaveBeenCalledWith({
      age: "18to20",
    });
  });
});
