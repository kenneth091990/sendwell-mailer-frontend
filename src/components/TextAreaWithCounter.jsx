import React, { useState, useEffect } from 'react';

function TextAreaWithCounter(props) {
  const [text, setText] = useState(props?.value ?? "");

  useEffect(() => {
    setText(props?.value ?? "");
  }, [props?.value])

  const handleChange = (event) => {
    if (typeof props?.onChange === "function") {
      props?.onChange(event);
    }
    const inputValue = event.target.value;
    if (inputValue.length <= props.limit) {
      setText(inputValue);
    } else {
      setText(inputValue.slice(0, props.limit));
    }
  };

  return (
    <div>
      <div>
        <label className='text-blue'>{props.label}</label>
      </div>
      <textarea
        value={text} // Control the textarea with state
        onChange={handleChange}
        rows={props.rows}
        required={props.required ?? false}
        cols={props.cols}
        name={props.name}
        ref={props?.ref}
        className={props.className}
      />
      <div className='text-right text-gray text-sm'>
        {text.length}/{props.limit}
      </div>
    </div>
  );
}

export default TextAreaWithCounter;
