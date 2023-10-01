import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { useFilteredPatients } from "@/hooks/useFilteredPatients";

jest.mock("@/hooks/useFilteredPatients", () => ({
  useFilteredPatients: jest.fn(),
}));

const mockPatients = [
  {
    patient_id: 1,
    first_name: "John",
    last_name: "Doe",
    gender: "male",
    age: 30,
  },
  {
    patient_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    gender: "female",
    age: 40,
  },
];

describe("Home component", () => {
  beforeEach(() => {
    useFilteredPatients.mockReturnValue({ patients: mockPatients });
  });

  it("renders patient list", () => {
    render(<Home />);

    // Check if the patient list is rendered with patient cards
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it('renders "No patients for the applied filter" when no patients are available', () => {
    useFilteredPatients.mockReturnValue({ patients: [] });
    render(<Home />);

    // Check if the "No patients for the applied filter" message is rendered
    expect(
      screen.getByText("No patients for the applied filter")
    ).toBeInTheDocument();
  });
});
