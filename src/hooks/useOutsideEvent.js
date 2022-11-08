import { useEffect } from "react";

export default function useOutsideEvent(ref, eventTrigger) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) 
        eventTrigger()
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref])
}