import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

 
 export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(()=> {
        //logic to get user to the room
    }, [name])
    return <div>
        hi {name}
    </div>
 }