import { renderHook, act } from "@testing-library/react-hooks";
import { useDebounce } from "./useDebounce"; // Import the hook to be tested

describe("useDebounce", () => {
  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initialValue", 500));
    expect(result.current).toBe("initialValue");
  });

  it("should return the updated value after the specified delay", async () => {
    const { result, rerender, waitForNextUpdate } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: {
          value: "initialValue",
          delay: 500,
        },
      }
    );

    // Initial value
    expect(result.current).toBe("initialValue");

    // Update the value and wait for the debounce
    rerender({ value: "updatedValue", delay: 500 });
    await waitForNextUpdate();

    // Should have the updated value after the delay
    expect(result.current).toBe("updatedValue");
  });

  it("should clear the timeout on unmount", async () => {
    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");
    const { unmount } = renderHook(() => useDebounce("initialValue", 500));

    // Ensure the clearTimeout function was called when unmounting
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
