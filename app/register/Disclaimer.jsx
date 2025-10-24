'use client'
import React from "react"


const Disclaimer = () => {
    return(
        <div className="w-full bg-red-700 text-white p-4 md:p-8 shadow-md flex flex-col items-start space-y-3">
            <h2 className="text-xl font-semibold border-b border-white/50 pb-1">
                Disclaimer
            </h2>

            <p className="text-sm leading-relaxed text-white/90">
                Kindly be informed that participation in the 
                <span className="font-medium"> Debt Management Consultant Training Programme </span>
                is <span className="font-semibold">free of charge</span>. However, access to the 
                <span className="font-medium"> official reading modules</span>, 
                <span className="font-medium"> comprehensive study materials</span>, 
                and issuance of the <span className="font-medium">Certificate of Completion</span> 
                shall attract a separate fee.
            </p>

            <p className="text-sm leading-relaxed text-white/90">
                This structure ensures that participants benefit from the core training sessions 
                at no cost while reserving the full certification and academic resources for 
                those who complete the requisite payment and assessment process.
            </p>
        </div>

    )
}

export default Disclaimer;