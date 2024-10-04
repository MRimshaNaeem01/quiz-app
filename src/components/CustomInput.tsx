

import React from 'react'

const CustomInput = ({ label, type, id, placeholder, register, error }: any) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">
                    {label}
                </label>
            </div>
            <input
                id={id}
                type={type}
                className={`w-full p-5 font-medium border rounded-md ${error ? 'border-red-500' : 'border-slate-300'} placeholder:opacity-60`}
                placeholder={placeholder}
                {...register}
            />
            {error && <p className="text-start mt-[-7px] text-red-500">{error}</p>}
        </div>
    )
}

export default CustomInput
