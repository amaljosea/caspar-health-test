import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Detail from "./page";
import { useSinglePatient } from "@/hooks/useSinglePatient";
import { useDeletePatient } from "@/hooks/useDeletePatient";

jest.mock("@/hooks/useSinglePatient");
jest.mock("@/hooks/useDeletePatient");

describe("Detail component", () => {
  beforeEach(() => {
    useSinglePatient.mockReturnValue({
      patient_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      gender: "male",
      age: 30,
    });
    useDeletePatient.mockReturnValue(jest.fn());
  });

  it("renders patient details", () => {
    render(
      <Detail
        params={{
          id: "1",
        }}
      />
    );

    // Check if patient details are rendered
    expect(screen.getByText("id: 1")).toBeInTheDocument();
    expect(screen.getByText("first_name: John")).toBeInTheDocument();
    expect(screen.getByText("last_name: Doe")).toBeInTheDocument();
    expect(screen.getByText("email: john@example.com")).toBeInTheDocument();
    expect(screen.getByText("gender: male")).toBeInTheDocument();
    expect(screen.getByText("age: 30")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  it('renders "Back" link', () => {
    render(<Detail params={{ id: "1" }} />);

    // Check if the "Back" link is rendered and has the correct href
    const backButton = screen.getByRole("link", { name: "Back" });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute("href", "/");
  });

  it("renders an error message when patient is not found", () => {
    useSinglePatient.mockReturnValue(undefined);
    render(<Detail params={{ id: "2" }} />);

    // Check if the error message is rendered
    expect(screen.getByText("Error: Patient not found!")).toBeInTheDocument();
  });

  it('calls the deletePatient function when the "Delete" button is clicked', () => {
    const mockDeletePatient = jest.fn();
    useDeletePatient.mockReturnValue(mockDeletePatient);

    render(<Detail params={{ id: "1" }} />);

    // Click the "Delete" button
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));

    // Check if the deletePatient function was called
    expect(mockDeletePatient).toHaveBeenCalled();
  });
});
