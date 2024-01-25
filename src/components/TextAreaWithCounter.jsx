import React, { useState, useEffect, forwardRef } from 'react';

const TextAreaWithCounter = forwardRef((props, ref) => {

    const [text, setText] = useState('');
    const characterCount = text.length;
   
    const handleChange = (event) => {
        
        const inputValue = event.target.value;
        ref.current.value = inputValue.slice(0, props.limit);
        setText(ref.current.value)
    };

    useEffect(() => {
        setText(ref.current?  ref.current.value : '');
    }, [ref]);
      
    return (
    <div>
      
      <div>
          <label className='text-blue'>{props.label}</label>
      </div>
      <textarea
        ref={ref}
        onChange={handleChange}
        rows={props.rows}
        cols={props.cols}
        className={props.className}
      />
      <div className='text-right text-gray text-sm'>
        {characterCount}/{props.limit} 
      </div>
    </div>
  );
});

export default TextAreaWithCounter;