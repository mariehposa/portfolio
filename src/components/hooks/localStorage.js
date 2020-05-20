import { useState } from 'react';

export function LocalStorage (key, initialValue) {
    const [ storedValue, setStoredValue ] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? item : initialValue;
    })

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, (value));
    }
    return [ storedValue, setValue ];
}