import React, { useContext} from 'react';

import {TransactionContext} from '../context/TransactionContext';
import DummyData from '../utils/DummyData';

const TransactionCard =({addressTo,addressFrom,timestamp,message,keyword,amount,url,status}) =>{
   return (
    <div className='bg-[#181918]  m-4 flex flex-1
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    flex-col p-4 rounded-md  hover:shadow-2xl 
    '>
      <div className='flex flex-row items-center w-full mt-3  '>
         <div className='  w-full mb-6 p-5 '>
           <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener norefferer">
            <p className='text-white text-base truncate ... mb-2'> <br/>From:{(addressFrom)}</p>
           
            </a> 

          
            <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener norefferer">
            <p className='text-white text-base truncate ... mb-2 '> To:{(addressTo)}</p>
           
            </a> 
           <p className=' text-violet-300  text-base mb-2'> Amount:{amount}ETH

           </p>
         
          
           {message && (
            <>
            <br/>
            <p className='text-white text-base'> Message:{message}

            </p>
            </>
           )}

           <div className='bg-black p-3 px-5 w-max rounded-3xl mt-5 shadow-2xl shadow-cyan-200/50 '>
            <p className='text-[#37c7da] font-bold'>{timestamp}

            </p>
           

           </div>
           <p className=' text-green-400 text-center text-base mb-2 mt-3'> Status: {status}

</p>

         </div>
      </div>

    </div>
   )
}

const Transaction = () => {
  const {currentAccount}= useContext(TransactionContext);
  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
      {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions..
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}
      <div className='flex flex-wrap justify-center items-center mt-10'>
          {DummyData.reverse().map((transaction,i) => (
            <TransactionCard key={i} {...transaction}/>
          ))}
      </div>

      </div>
    </div>
  )
}

export default Transaction