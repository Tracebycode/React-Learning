import React from "react";


function INPUTBOX({
    label,
    amount,
    onAmountchange,
    oncurencychange,
    currencyoption=[],
    selectCurrency="usd",
    amountdisable="false",
    currencydisable="false",

    classname=""
}){
    return(
        <div className={`bg-white rounded-lg p-3 text-sm flex ${classname}`}>

            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block">
                {label}
                </label>
                <input className="outline-none w-full bg-transparent py-1.5 "
                type="number"
                placeholder="amount"
                disabled={amountdisable}
                value={amount}
                onChange={(e)=> onAmountchange && onAmountchange(Number(e.target.value))}/>
                 </div>


                 <div className="w-1/2 flex wrap justify-end text-right">
                 <p  className="text-black/40 mb-3 w-full">Currency Type</p>
                 <select
                 className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e)=>oncurencychange &&  oncurencychange(e.target.value)}
                 disabled={currencydisable}
                 >
                   {currencyoption.map((Currency)=>(
                    <option value={Currency}>{Currency}</option>
                   ))}
                 </select>
                 </div>

        
        </div>
    )


}

export default INPUTBOX;