import { useEffect ,  useState }   from "react";

// default currency can be set by passing "USD" as the argument when calling useCurrencyInfo

function useCurrencyInfo(currency) {
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        // .catch((err) => console.error("Failed to fetch currency info", err));

        console.log(data)
        
    },[currency])

    return data;
    

}

export default useCurrencyInfo;

