import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get value from localStorage by key
            const item = window.localStorage.getItem(key);

            return item ?? initialValue;
        } catch (error) {
            // If error
            // console.error("ERROR: [useLocalStorage]", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            // Allow value to be a function so we have some API as useState
            const valueToStore = typeof storedValue === "function" ?
                storedValue(storedValue) : storedValue;

            // Save state
            window.localStorage.setItem(key, valueToStore);
        } catch (error) {
            // If error
            // console.error("ERROR: [useLocalStorage|useEffect]", error);
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue];
}

export default useLocalStorage;