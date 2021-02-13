import React from 'react';
import '../stylesheets/components/options.scss'


export default function Options({
    label,
    options,
    selectedOption,
    setSelectedOption
}) {
    

    return (
        <>
         
                <div className="options text-center">
                    <strong><p>{label}</p></strong>
                    {options.map((option) => (
                        <span key={option.name} className={`option ${selectedOption === option ? "selected" : null } p-1`} onClick={()=>setSelectedOption(option)}>{option.name}</span>

                    ))
                    }
                </div>   
        </>
    );
}