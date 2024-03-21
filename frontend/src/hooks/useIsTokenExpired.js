import { useState, useEffect } from "react";

const useIsTokenExpired = (token) => {
    const [isExpired, setIsExpired] = useState(true);

    useEffect(() => {
        const checkTokenExpiration = () => {
            if (!token) {
                setIsExpired(true);
                return;
            }

            const decodedToken = JSON.parse(atob(token.split(".")[1]));
           
            const expirationTime = decodedToken.exp * 1000;
            
            setIsExpired(Date.now() >= expirationTime);
        };

        checkTokenExpiration();

        const interval = setInterval(checkTokenExpiration, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [token]);

    return isExpired;
};

export default useIsTokenExpired;
