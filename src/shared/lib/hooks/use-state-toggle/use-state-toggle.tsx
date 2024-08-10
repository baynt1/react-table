import { useState } from 'react'

export const useStateToggle = (
  defaultValue?: boolean,
): [boolean, () => void, (value: boolean) => void] => {
  const [state, setState] = useState<boolean>(defaultValue || false)

  const handleStateToggle = () => setState((prev) => !prev)

  return [state, handleStateToggle, setState]
}
