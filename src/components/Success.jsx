import React from "react";
import { AiTwotoneGift } from "react-icons/ai";

function Success() {
    return (
        <div className="bg-black/75 fixed top-0 left-0 flex justify-center items-center inter" style={{ width: "100vw", height: "100vh" }}>
            <div className="w-[98%] md:w-[40%] py-12 bg-white rounded-2xl flex flex-col items-center">
                <AiTwotoneGift className="text-5xl text-[#146EB4]" />
                <p className="text-lg font-bold my-2 text-[#3180BD]">Successfull</p>
                <p className="text-md my-4">Your subscription added for moolfinance.</p>
                <button type="submit" className="bg-[#862AE3] flex justify-center items-center py-3 mt-4 w-[80%] text-md rounded-md font-medium text-white" onClick={()=>{
                    window.open('/','_self')
                }}>
                    Continue Mool
                </button>
            </div>
        </div>
    )
}

export default Success;