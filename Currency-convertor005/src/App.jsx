import './App.css'
import React from 'react'
import InputBox from './components/InputBox';
import useCurrencyinfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount]=React.useState(0);
  const [from,setfrom]=React.useState("usd");
  const [to,setto]=React.useState("inr");
  const [convertedamount,setconvertedamount]=React.useState(0);
  const currencyinfo = useCurrencyinfo(from);

const options = Object.keys(currencyinfo[from] || {});
  

  const swapCurrency=()=>{
   setfrom(to);
setto(from);

setconvertedamount(amount === "" ? "" : Number(amount));
setAmount(convertedamount === "" ? "" : Number(convertedamount));

  }


  const convert = () => {
 const rate = currencyinfo[from]?.[to];
  if (!rate || isNaN(rate) || isNaN(amount)) {
    setconvertedamount(0);  // NaN ko 0 se replace
    return;
  }

  setconvertedamount(amount * rate);
  }
  return (
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                            amount={amount === "" ? "" : Number(amount)}
                                currencyoptions={options}
                                selectedCurrency={from}
                                onAmountChange={(val) => setAmount(val)}
onCurrencyChange={(cur) => setfrom(cur)}                                  
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrency}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                            amount={convertedamount === "" ? "" : Number(convertedamount)}
                                currencyoptions={options}
                                selectedCurrency={to}
                       onCurrencyChange={(cur) => setto(cur)} 
                                  amountDisabled
                            />
                          
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
