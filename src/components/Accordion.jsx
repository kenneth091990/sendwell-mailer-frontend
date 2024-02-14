import React, { useState, useEffect, forwardRef } from 'react';
import Select, { components } from 'react-select';

function AccordionItem({ title, content }){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex w-full flex-col rounded-2xl px-6 max-sm:px-0 py-4 bg-white shadow-2xl max-sm:shadow-none my-1'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
        className='flex w-full'
      >
        <div className="flex-none w-12">
           {!isOpen ?  <img src='/src/images/icon/arrow-down-icon.svg' width={'20px'} className=''/> :  <img src='/src/images/icon/arrow-up-icon.svg' width={'20px'} className=''/>}
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