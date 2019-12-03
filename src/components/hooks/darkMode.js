import React, { useEffect } from 'react';
import { LocalStorage } from './localStorage';

export function DarkMode () {
    const [ darkValue, setDarkValue ] = LocalStorage('value', false);

    useEffect(() => {
        if(darkValue) {
            document.querySelector('body').classList.remove('darkMode')
        } else {
            document.querySelector('body').classList.add('darkMode')
        }
    }, [darkValue]);

    return [ darkValue, setDarkValue ];
}