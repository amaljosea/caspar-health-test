import { renderHook, act } from "@testing-library/react-hooks";
import { usePatientFilterControls } from "./usePatientFilterControls";

describe("usePatientFilterControls", () => {
  it("should initialize with default filter values", () => {
    const { result } = renderHook(() => usePatientFilterControls());

    expect(result.current.patientFilter).toEqual({
      gender: "any",
      age: "any",
      sort: "asc",
      search: "",
    });
  });

  it("should update the filter values when changePatientFilter is called", () => {
    const { result } = renderHook(() => usePatientFilterControls());

    act(() => {
      result.current.changePatientFilter({ gender: "male", age: "31to45" });
    });

    expect(result.current.patientFilter).toEqual({
      gender: "male",
      age: "31to45",
      sort: "asc",
      search: "",
    });
  });

  it("should merge changes with the current filter state", () => {
    const { result } = renderHook(() => usePatientFilterControls());

    act(() => {
      result.current.changePatientFilter({ gender: "male" });
      result.current.changePatientFilter({ age: "31to45", sort: "desc" });
    });

    expect(result.current.patientFilter).toEqual({
      gender: "male",
      age: "31to45",
      sort: "desc",
      search: "",
    });
  });
});
