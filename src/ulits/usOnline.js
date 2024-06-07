import  { useEffect, useState } from 'react'


// TODO: ADD isOnline feature 
const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);
    
    useEffect( () => {
    // const handleOnline = () => {
    //     setIsOnline(true);
    // };
    // const handleOffline = () => {
        //     setIsOnline(false);
        // };
        function handleOnline ()  {
            setIsOnline(true);
        };
        function handleOffline ()  {
            setIsOnline(false);
        };

        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)
        // window.addEventListener("online", (event) => {setIsOnline(true); console.log("Network connected");})
    // window.addEventListener("offline",(event) => {setIsOnline(false); console.log("Network Not connected");})
    
    return () => {
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }

    },[]);

    return isOnline;

};
export default useOnline