import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";

const getAddressDetails = async (address) => {
    const res = await Axios.get(`https://blockchain.info/rawaddr/${address}`,{ crossdomain: true });
    const data = res.data;
    console.log("data: " + data);
    return data;
}

const Details = () => {
    
    const router = useRouter();

    const address = router.query.id;
    console.log("address: " + address);

    const [addressDetails, setAddressDetails] = useState([]);

    useEffect(() => {
        if (address !== undefined || address !== "") {
            const addressDetails = getAddressDetails(address);
            setAddressDetails(addressDetails);
        }
      }, [address]);

    return ( 
        <div>
            <h1>Details</h1>
        </div>
     );
}
 
export default Details;