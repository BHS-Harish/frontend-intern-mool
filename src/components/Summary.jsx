import React, { useEffect, useState } from "react";
import Success from '../components/Success';
import { IoLockClosed } from "react-icons/io5";
import { PiShieldCheckDuotone } from "react-icons/pi";

function Summary({ billing,setFinish }) {
    const [billingInfo, setBillingInfo] = useState({})
    const [openPromo, setOpenPromo] = useState(false)
    const [promoCode, setPromoCode] = useState("")
    const [promoApplied, setPromoApplied] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [gst, setGst] = useState(0)
    const promoCodes = ["MOOL2024"]
    useEffect(() => {
        setBillingInfo(billing)
        setSubTotal(billing?.numberOfUsers * billing?.selectedPlan?.price)
    }, [billing])
    useEffect(() => {
        setGst(Math.round((subTotal * 18) / 100))
    }, [subTotal])
    useEffect(() => {
        if (promoApplied)
            setDiscount(Math.round((subTotal * 12) / 100))
        else
            setDiscount(0)
    }, [promoApplied, subTotal])
    const validatePromoCode = (e) => {
        e.preventDefault()
        if (promoCodes.includes(promoCode)) {
            setPromoApplied(true)
            alert(`Promocode ${promoCode} applied`)
            setOpenPromo(false)
        }
        else {
            alert("Invalid promocode")
            setPromoCode("")
        }
    }
    return (
        <div className="w-[100%] bg-white p-5 my-2 rounded-lg shadow-md inter">
            <div className="w-full flex items-center gap-3 pb-3 border-b">
                <h2 className="font-semibold text-[18px] inter">Summary</h2>
            </div>
            <h3 className="text-left mt-3 font-medium text-[#1A181E]">Premium</h3>
            <div className="flex justify-between text-sm my-1">
                <p>{billingInfo?.selectedPlan?.price} INR / employee / {billingInfo?.selectedPlan?.duration.toLowerCase()}</p>
                <p>₹{billingInfo?.selectedPlan?.price}</p>
            </div>
            <p className="text-sm font-medium text-[#146EB4] text-left my-2">Change Plan</p>
            <div className="pb-2">
                <p className="text-sm w-fit font-medium pb-1 border-b border-[#000] text-left my-2 cursor-pointer" onClick={() => { setOpenPromo(!openPromo) }}>Enter promo code</p>
                {openPromo && (
                    <form className="flex justify-between" onSubmit={validatePromoCode}>
                        <input className="h-[100%] border border-[1.5px] text-sm md:border-2 p-3 w-[70%] shadow-xs focus:outline-none font-medium rounded-md" placeholder='Promo Code' type="text" value={promoCode} onChange={(e) => {
                            setPromoCode(e.target.value.toUpperCase())
                        }} required disabled={promoApplied ? true : false} />
                        <button type="submit" className="bg-[#146EB4] w-[25%] text-sm rounded-md font-medium text-white" disabled={promoApplied ? true : false}>Apply</button>
                    </form>
                )}
            </div>
            <hr />
            <div className="flex justify-between text-sm my-2">
                <p>Number of Users</p>
                <p>{billingInfo?.numberOfUsers} employees</p>
            </div>
            <div className="flex justify-between text-sm my-2">
                <p>Subtotal</p>
                <p>₹{subTotal}</p>
            </div>
            <div className="flex justify-between text-sm my-2">
                <p>GST (18%)</p>
                <p>₹{gst}</p>
            </div>
            {
                promoApplied && (
                    <div className="flex justify-between text-sm my-2">
                        <p>Promocode applied (12%)</p>
                        <p>- ₹{discount}</p>
                    </div>
                )
            }
            <hr />
            <div className="flex justify-between text-md font-semibold my-2">
                <p>Total</p>
                <p>₹{subTotal + gst - discount}</p>
            </div>
            <button type="submit" className="bg-[#146EB4] flex justify-center items-center py-3 mt-4 w-[100%] text-md rounded-md font-medium text-white" onClick={()=>{setFinish(true)}}>
                <IoLockClosed className="text-lg me-2" />
                Submit Purchase
            </button>
            <div className="my-5 flex justify-center gap-3 items-center">
                <PiShieldCheckDuotone className="text-3xl text-[#60BC57]" />
                <p>Safe & Secure Payment</p>
            </div>
            <p className="text-sm text-left text-[#808080] leading-5">
                By purchasing, you accept the <span className="text-[#146EB4]">Terms of Use </span>and acknowledge reading the <span className="text-[#146EB4]">Privacy Policy</span>. You also agree to auto renewal of your yearly subscription for US$136.99, which can be disabled at any time through your account. Any eligible tax exemptions will be applied when you're charged for your next renewal payment.
                Your card details will be saved for future purchases and subscription renewals.
            </p>
        </div>
    )
}

export default Summary;