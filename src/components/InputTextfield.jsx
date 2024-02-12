import React, { forwardRef } from 'react'

const InputTextfield = forwardRef(({ inputProps, label, iconComponent, className, labelClassName,type }, ref) => {
    return (
        <React.Fragment>
            {label && <label className={labelClassName}>
                {label}
            </label>}
            <div className="relative">
                <input
                    type={type}
                    ref={ref}
                    {...inputProps}
                    className={className}
                />
                {iconComponent && <span className="absolute right-0 top-0">
                    {iconComponent}
                </span>}
            </div>
        </React.Fragment>
    )
})

export default InputTextfield;