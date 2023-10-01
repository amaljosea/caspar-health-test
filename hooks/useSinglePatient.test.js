import { renderHook } from "@testing-library/react";
import { PatientContext } from "@/context/PatientContext";
import { useSinglePatient } from "./useSinglePatient";

// Create a mock context value with sample patient data
const mockPatientContextValue = {
  patients: [
    { patient_id: 1, name: "Patient 1" },
    { patient_id: 2, name: "Patient 2" },
    { patient_id: 3, name: "Patient 3" },
  ],
};

// Wrap the hook with the mock context provider
const wrapper = ({ children }) => (
  <PatientContext.Provider value={mockPatientContextValue}>
    {children}
  </PatientContext.Provider>
);

test("useSinglePatient returns the correct patient", () => {
  // Define the ID of the patient you want to find
  const idToFind = "2";

  // Render the hook with the wrapper and the ID
  const { result } = renderHook(() => useSinglePatient({ id: idToFind }), {
    wrapper,
  });

  // Extract the result from the hook
  const patient = result.current;

  // Check if the hook returns the expected patient
  expect(patient).toEqual({ patient_id: 2, name: "Patient 2" });
});
