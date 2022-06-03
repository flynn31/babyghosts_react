import { useEffect } from 'react';

const ImportJs = resourceURL => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceURL;
        script.async = true;
        document.body.appendChild(script);
        return () => {
        }
    }, [resourceURL]);
};

export default ImportJs;