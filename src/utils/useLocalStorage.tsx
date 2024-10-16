import { useEffect, useState } from "react";

export const useLocalStorageState = (key: string, defaultValue: any) => {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key) {
                setState(event.newValue ? JSON.parse(event.newValue) : defaultValue);
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => window.removeEventListener("storage", handleStorageChange);
    }, [key, defaultValue]);

    return [state, setState] as const;
};