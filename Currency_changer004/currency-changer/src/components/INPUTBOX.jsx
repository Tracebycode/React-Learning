import React from  'react';
import { useId } from 'react';

function INPUTBOX( {label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions,
    selectcurrency='usd',
    currencydisabled=false,
    amountdisabled=false,
    className}) {
           const amountInputId = useId()

return (
    <div className={`bg-white/50 px-2 border-black w-full rounded-lg text-md flex ${className}`}>
        <div className='w-1/2 '>
        <label className='text-red-500 mb-2 inline-block' htmlFor={amountInputId} >{label}</label>
        <input 
            className='outline-none w-full bg-transparent  py-1.5 '
            placeholder='Amount' 
            id={amountInputId}
            type='number' 
            disabled={amountdisabled} 
            value={amount} 
            onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}>

        </input>
        </div>
        <div className=' w-1/2 flex flex-wrap justify-end  text-right'>
        <p className='text-blue-600 w-full mb-2'>Currency type</p>
        <select className='px-1 py-1  rounded-lg cursor-pointer outline-none bg-gray-100' value={selectcurrency} onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)} disabled={currencydisabled}>
            {Array.isArray(currencyoptions) && currencyoptions.map((option) => (
            <option key={option} value={option}>
                {option.toUpperCase()}
            </option>
            ))}
            </select>
        </div>
    </div>
)
}

export default INPUTBOX
