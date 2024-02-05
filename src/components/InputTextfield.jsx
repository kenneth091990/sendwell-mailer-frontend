import React, { forwardRef } from 'react'

const InputTextfield = forwardRef(({ inputProps, label, iconComponent }, ref) => {

    return (
        <React.Fragment>
            {label && <label className="mb-2.5 block font-medium text-black">
                {label}
            </label>}
            <div className="relative">
                <input
                    ref={ref}
                    {...inputProps}
                    className="w-full rounded-md border-2 border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                />
                {iconComponent && <span className="absolute right-0 top-0">
                    {iconComponent}
                </span>}
            </div>
        </React.Fragment>
    )
})

export default InputTextfield;