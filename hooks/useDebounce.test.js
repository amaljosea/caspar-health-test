import { useDebounce } from "./useDebounce";
import { renderHook, waitFor } from "@testing-library/react";

describe("useDebounce", () => {
  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initialValue", 500));
    expect(result.current).toBe("initialValue");
  });

  it("should return the updated value after the specified delay", async () => {
    const { result, rerender } = renderHook(
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

    // Should have the updated value after the delay
    await waitFor(() => expect(result.current).toBe("updatedValue"));
  });

  it("should clear the timeout on unmount", async () => {
    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");
    const { unmount } = renderHook(() => useDebounce("initialValue", 500));

    // Ensure the clearTimeout function was called when unmounting
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
