import { useState, useCallback } from 'react';

const useStorage = (key) => {

    const [state, setState] = useState((item = localStorage.getItem(key)) => item && JSON.parse(item));

    const set = useCallback(newValue => {
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }, [key]);

    const remove = useCallback(() => {
        setState(undefined);
        localStorage.removeItem(key)
    }, [key]);

    return [state, set, remove];
}

export default useStorage;