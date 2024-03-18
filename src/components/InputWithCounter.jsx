import React, { useEffect, useState } from 'react';

function InputWithCounter(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props?.value ?? "");
  }, [props?.value])


  const handleChange = (event) => {

    const inputValue = event.target.value;
    if (inputValue.length <= props.limit) {
      setText(inputValue);
    } else {
      setText(inputValue.slice(0, props.limit));
    }

    if (typeof props?.onChange === "function") {
      props?.onChange(event);
    }
  };

  return (
    <div>
      <div>
        <label className='text-blue'>{props.label}</label>
      </div>
      <div>
        <input
          // value={text} // Control the input with state
          ref={props?.ref}
          onChange={handleChange}
          type="text"
          value={props?.value}
          className={props.className}
          name={props.name}
        />
      </div>
      <div className='text-right text-gray text-sm'>
        {text.length}/{props.limit}
      </div>
    </div>
  );
}

export default InputWithCounter;
