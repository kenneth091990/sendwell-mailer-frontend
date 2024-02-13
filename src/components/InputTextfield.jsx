import React, { forwardRef } from 'react'

const InputTextfield = forwardRef(({ containerClass, inputProps, label, iconComponent, className, labelClassName, type }, ref) => {
    return (
        <div className={containerClass}>
            {label && <label className={labelClassName}>
                {label}
            </label>}
            <div className="flex w-full">
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
            </div>
        </div>
    )
})

export default InputTextfield;