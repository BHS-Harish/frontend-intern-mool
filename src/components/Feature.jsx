import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function Feature({featureName}){
    return(
        <div className='w-auto flex gap-2 items-center'>
            <FaCircleCheck className='text-[14px] md:text-[18px] text-[#146EB4]'/>
            <p className='text-[#1A181E] text-[12px] md:text-[16px]'>{featureName}</p>
        </div>
    )
}
export default Feature;