import { useCallback, useState } from "react"
import { OnChange } from "../types";

export const useChange = (initial = "") => {
  const [value, setValue] = useState(initial);
  const onChange: OnChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  const reset = useCallback(() => {
    setValue("")
  }, [])
  return {
    input: { value, onChange },
    reset
  }
}