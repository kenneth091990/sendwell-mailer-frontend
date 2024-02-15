import React, { useState, useEffect, forwardRef } from 'react';
import Select, { components } from 'react-select';

import arrow_downicon from "./../images/icon/arrow-down-icon.svg";
import arrow_upicon from "./../images/icon/arrow-up-icon.svg";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex w-full flex-col rounded-2xl px-6 max-sm:px-0 py-4 bg-white shadow-2xl max-sm:shadow-none my-1'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
        className='flex w-full'
      >
        <div className="flex-none w-12">
          {!isOpen ? <img src={arrow_downicon} width={'20px'} className='' /> : <img src={arrow_upicon} width={'20px'} className='' />}
        </div>

        {title}
      </div>
      {isOpen && <div className='pt-3'>{content}</div>}
    </div>
  );
}


const Accordion = forwardRef(({ items }, ref) => {
  return (

    <React.Fragment>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </React.Fragment>

  );
});

export default Accordion;