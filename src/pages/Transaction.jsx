/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { setTransaction } from '../feature/TransactionSlice'
import { setAmount } from '../feature/WalletSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Transaction = () =>
{
    const transaction = useSelector( ( state ) => state.transaction.transactions )
    const dispatch = useDispatch();
    const Name = useSelector( ( state ) => state.user.name )
    useEffect( () =>
    {
        if ( localStorage.getItem( `${ Name }transaction` ) )
        {
            dispatch( setTransaction( JSON.parse( localStorage.getItem( `${ Name }transaction` ) ) ) )
            dispatch( setAmount( JSON.parse( localStorage.getItem( `${ Name }wallet` ) ) ) )
        }
    }, [] )
    // const handleDelete = (index) =>
    // {
    //     const payload = transaction.filter( ( _, i ) => i !== index );
    //     // dispatch( setTransaction( payload ) )
    // }
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center p-4  ">
                <div className='grid grid-cols-4 w-3/4 text-center h-10 bg-gray-100 '>
                    <div className='font-bold text-md text-gray-900 my-auto'>DATE</div>
                    <div className='font-bold text-md text-gray-900 my-auto'>TRANSACTION TYPE</div>
                    <div className='font-bold text-md text-gray-900 my-auto'>AMOUNT</div>
                    <div className='font-bold text-md text-gray-900 my-auto'>REASON</div>
                    {/* <div className='font-bold text-md text-gray-900 my-auto'>ACTIONS</div> */}
                </div>
                { transaction?.map( ( data, index ) => ( <div key={ index } className=' grid grid-cols-4 w-3/4 text-center border-b py-1 text-md text-gray-800'>
                    <div>{ data.date }</div>
                    <div>{ data.action }</div>
                    <div className={ ` ${ data.action === "income" ? "text-green-800 bg-green-100 w-20 mx-auto rounded-md" : "text-red-600 bg-red-100 w-20 mx-auto rounded-md" }` }> ₹ { data.amount }</div>
                    <div>{ data.reason }</div>
                    {/* <div className='flex justify-center'>
                        <div className='bg-gray-100 w-10 rounded-md hover:bg-gray-200' onClick={ () => { handleDelete(index) } }>

                        <FontAwesomeIcon icon={ faTrash } style={ { color: "#325fa2" } } />
                        </div>
                    </div> */}
                </div> ) ) }
            </div>
        </>
    )
}

export default Transaction
