import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

import Logo from '../assets/mool-logo.png'
function Plan({billing,setBilling}) {
    const plans = [
        {
            duration: "Month",
            price: 199
        },
        {
            duration: "Year",
            price: 2199
        }
    ]
    const changeUsersCount=(type)=>{
        if(type=="+")
            setBilling({...billing,numberOfUsers:billing.numberOfUsers+1})
        else
            setBilling({...billing,numberOfUsers:billing.numberOfUsers-1})
    }
    return (
        <div className="w-[100%] bg-white p-5 my-2 rounded-lg shadow-md inter">
            <div className="w-full flex items-center gap-3 pb-3 border-b">
                <div className="p-2 bg-gradient-to-b from-[#5187EE] to-[#324C7E] rounded">
                    <img src={Logo} width={20} alt="moolfinance" />
                </div>
                <h2 className="font-semibold text-[18px] inter">Your products</h2>
                <FaCircleCheck className='text-[14px] md:text-[18px] text-[#146EB4]' />
            </div>
            <div className="flex items-center gap-2 mt-3">
                <h3 className="font-medium">Select the number of users</h3>
                <IoIosInformationCircleOutline className="text-[#146EB4] text-[20px]" />
            </div>
            <p className="text-left text-[12px] text-[#808080]">The minimum amount is 1 user.</p>
            <div className="my-3 flex">
                <div className="h-[40px] flex">
                    <input className="h-[100%] border border-[1.5px] md:border-2 p-1 px-3 w-[160px] shadow-xs focus:outline-none font-medium rounded-s-lg" type="text" value={billing.numberOfUsers} />
                    <button className="h-full px-4 border-y border-y-[1.5px] md:border-y-2 text-2xl text-[#ccc]" onClick={()=>{changeUsersCount("-")}} disabled={billing.numberOfUsers<2?true:false}>-</button>
                    <button className="h-full px-4 border border-[1.5px] md:border-2 text-2xl text-[#ccc] rounded-s-lg flex item-center" dir="rtl" onClick={()=>{changeUsersCount("+")}}>+</button>
                </div>
            </div>
            <h3 className="text-left font-medium">Select a subscription cycle</h3>
            <div className="w-[100%] flex flex-col md:flex-row justify-between gap-6 md:gap-0 pt-4 pb-2">
                {
                    plans && plans.map((plan, index) => {
                        return (
                            <div className={`w-[100%] md:w-[48%] flex flex-col gap-1 items-start border ${billing?.selectedPlan?.duration==plan.duration?"border-[#146EB4]":"border"} p-4 rounded-lg cursor-pointer`} onClick={()=>{
                                setBilling({...billing,selectedPlan:plan})
                            }} key={index}>
                                <p className="text-sm">{plan.duration}ly</p>
                                <h1 className="text-2xl font-bold">₹{plan.price}</h1>
                                <p className="text-xs text-left text-[#808080] font-medium">/{plan.duration.toLowerCase()}/user, billed {plan.duration.toLowerCase()}ly</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Plan;