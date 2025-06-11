import React from  'react';

function INPUTBOX( label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions,
    selectcurrency='usd',
    currencydisabled=false,
    amountdisabled=false,
    className) {
return (
    <div className={`bg-white rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
        <label className='text-gray-500 text-xs inline-block'>label</label>
        <input className='outline-none bg-transparent  py-1.5 ' placeholder='Amount' type='number ' disabled={amountdisabled} value={amount} onClick={(e)=>onamountchange && onamountchange(Number(e.target.value))}></input>
        </div>
        <div className=' w-1/2 flex flex-wrap justify-end  text-right'>
        <p className='text-blue-600 w-full mb-2'>Currency type</p>
        <select className='px-1 py-1 cursor-pointer outline-none bg-gray-100' value={selectcurrency} onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)} disabled={currencydisabled}>
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
