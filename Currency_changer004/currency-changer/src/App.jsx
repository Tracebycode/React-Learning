import React, { use } from 'react';
import './App.css';
import './index.css';
import Inputbox from './components/INPUTBOX';
import useCurrencyInfo from './hooks/usecurrencyinf0';


function App() {
  const[from,setfrom] = React.useState('USD');
  const[to,setto] = React.useState('INR');
  const [amount,setamount] = React.useState(0);
  const [convertedAmount, setConvertedAmount] = React.useState(0);
  const currencyinfo = useCurrencyInfo('usd');
  const options = currencyinfo ? Object.keys(currencyinfo) : [];

  const swap = () => {
    setfrom(to)
    setto(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }
  return (
    
    <div className='w-full h-screen flex flex-wrap justify-center items-center '
    style={{backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm  bg-white/30'>
        <form onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <div className='w-full mb-1'>
          <Inputbox
          label={from.toUpperCase()}
          onamountchange={(amount) => setamount(amount)}
          oncurrencychange={(value) => setfrom(value)}
          currencyoptions={options}
          amount={amount}
          selectcurrency={from}
          amountdisabled={false}
          currencydisabled={false}
          className='mb-2'
           />
          </div>
           <div className='relative w-full  h-0.5'>
            <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 bg-blue-600 px-2 text-white border-white'> swap </button>
           </div>
           <div className='w-full mb-1'>
            <Inputbox
            label={to.toUpperCase()}
            selectcurrency={to}
            amount={convertedAmount}
            onamountchange={(value) => setConvertedAmount(value)}
            oncurrencychange={(value) => setto(value)}
            amountdisabled={true}
            currencydisabled={false}
            

            currencyoptions={options}
            />

           </div>
           <button type="submit" onClick={convert} className="w-full bg-blue-600  text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
          

        </form>
        </div>

      </div>

    </div>
  )
}

export default App
