import { useState, useEffect } from 'react';

export const useOrientation = () => {
    const type = window.screen.orientation.type.split('-')[0]
    const [orientation, setOrientation] = useState(type);

    useEffect(() => {
        const handleOrientationChange = () => {
        setOrientation(type);
        };

        window.screen.orientation.addEventListener('change', handleOrientationChange);

        return () => {
        window.screen.orientation.removeEventListener('change', handleOrientationChange);
        };
    }, []);

    return orientation;
};