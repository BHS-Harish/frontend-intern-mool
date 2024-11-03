import React from "react";
import Feature from "./Feature";

function Title(){
    return(
        <div className="py-8 pb-32 w-[100%] bg-gradient-to-r from-[#86BAE380] to-[#3180BD80]">
            <h4 className="text-[20px] font-semibold text-[#124974] inter">Complete Your Purchase</h4>
            <div className="w-100 my-4 flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
                <p className="inter font-normal text-[16px] text-[#124974]">Your plan includes:</p>
                <div className="flex gap-4 md:gap-6 flex-wrap justify-center px-4">
                    <Feature featureName={"Personalized reports"}/>
                    <Feature featureName={"Tax Optimization"}/>
                    <Feature featureName={"24/7 customer care"}/>
                </div>
            </div>
        </div>
    )
}

export default Title;