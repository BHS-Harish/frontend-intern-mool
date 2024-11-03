import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import {states} from '../assets/data'

function InvoiceDetails({invoice,setInvoice}) {
    return (
        <div className="w-[100%] bg-white p-5 mt-8 rounded-lg shadow-md inter">
            <div className="flex items-center gap-2 mt-3">
                <h2 className="font-semibold text-[18px] inter">Invoice details</h2>
                <IoIosInformationCircleOutline className="text-[#146EB4] text-[20px]" />
            </div>
            <div className='flex flex-col items-start gap-1 my-3'>
                <p className='text-sm text-[#4D4D4D]'>Address Line 1</p>
                <input className="h-[100%] border border-[1.5px] text-sm md:border-2 p-3 w-[100%] md:w-[80%] shadow-xs focus:outline-none font-medium rounded-md" placeholder='Eg: HSR Layout' type="text" value={invoice?.address} onChange={(e)=>{
                    setInvoice({...invoice,address:e.target.value.toUpperCase()})
                }} />
            </div>
            <div className='flex flex-col items-start gap-1 my-3'>
                <p className='text-sm text-[#4D4D4D]'>Address Line 2 ( Landmark )</p>
                <input className="h-[100%] border border-[1.5px] text-sm md:border-2 p-3 w-[100%] md:w-[80%] shadow-xs focus:outline-none font-medium rounded-md" placeholder='Near apollo' type="text" value={invoice?.landmark} onChange={(e)=>{
                    setInvoice({...invoice,landmark:e.target.value.toUpperCase()})
                }} />
            </div>
            <div className='flex flex-col items-start gap-1 my-3'>
                <p className='text-sm text-[#4D4D4D]'>Pincode</p>
                <input className="h-[100%] border border-[1.5px] text-sm md:border-2 p-3 w-[100%] md:w-[80%] shadow-xs focus:outline-none font-medium rounded-md" placeholder='Eg: 626117' type="number" min={100000} max={999999} value={invoice?.pincode} onChange={(e)=>{
                    setInvoice({...invoice,pincode:e.target.value})
                }} />
            </div>
            <div className='flex flex-col items-start gap-1 my-3'>
                <p className='text-sm text-[#4D4D4D]'>Office working location</p>
                <select className="h-[100%] bg-white border border-[1.5px] text-sm md:border-2 p-3 w-[100%] md:w-[80%] shadow-xs focus:outline-none font-medium rounded-md" placeholder='Eg: 626117' onChange={(e)=>{
                    setInvoice({...invoice,state:e.target.value})
                }}>
                    {
                        states.map((state,index)=>{
                            return(
                                <option value={state?.name} key={index}>{state?.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default InvoiceDetails;