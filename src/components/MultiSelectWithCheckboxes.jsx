import React, { useState, useEffect, forwardRef } from 'react';
import Select, { components } from 'react-select';
import SearchIcon from "./../images/nav/SearchIcon.png";

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={SearchIcon} height={17} width={17} />
    </components.DropdownIndicator>
  );
};

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'pear', label: 'Pear' },

];


const CheckboxOption = ({ children, isChecked, onChange, ...props }) => {
  const handleClick = (e) => {
    // Prevent the click event from bubbling up to the parent
    e.stopPropagation();

    if (props.value === 'all' && e.target.checked) {
      const containerElem = e.target.closest('.react-select-container');

      const checkboxes = containerElem.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    }
  };

  const checkboxStyle = {
    'position': 'absolute',
    'right': '5px',
    'height': '17px',
    'width': '17px',
    'accentColor': '#3C72AB',
    'OAppearance': 'none',
    'border': '1px solid #BBBDBF!important',
    'borderRadius': '2px'
  }

  const containerStyle = () => {

    if (props.value == 'all') {
      return {
        'color': '#2382d8',
        'borderBottom': '1px solid #BBBDBF',
        'paddingBottom': '10px',
        'marginBottom': '10px'
      }
    }

  }


  return (
    <div style={containerStyle()}>
      <label className={`flex items-center tracking-tighter ${props.value == 'all' ? 'bold' : 'font-light'}`}>{children}
        <input type="checkbox" checked={isChecked} onChange={onChange} onClick={handleClick} style={checkboxStyle} value={props.value} />
      </label>
    </div>

  );
};


const CheckboxMenu = ({ children, ...props }) => {
  const optionNodes = React.Children.map(children, (child) =>

    React.cloneElement(child, {
      isSelected: props.getValue().some((val) => val.value === child.props.data.value),
      onSelect: () => props.setValue(child.props.data),
    })
  );

  return <div>{optionNodes}</div>;
};

const MultiSelectWithCheckboxes = forwardRef(({ label, placeholder, labelClassName, isMulti, hasCheckbox = false, hasSelectAll = false }, ref) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    console.log('dddd');
  };

  const allOption = { value: 'all', label: 'Select All' };

  return (

    <React.Fragment>
      {label && <label className={labelClassName}>
        {label}
      </label>}
      <Select
        isMulti={isMulti}
        options={hasSelectAll ? [allOption, ...options] : options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
        isSearchable
        className="react-select-container"
        classNamePrefix="react-select"
        components={hasCheckbox ? { Option: CheckboxOption, Menu: CheckboxMenu, DropdownIndicator, IndicatorSeparator: () => null } : { DropdownIndicator, IndicatorSeparator: () => null }}
      />
    </React.Fragment>

  );
});

export default MultiSelectWithCheckboxes;