import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import SearchIcon from "./../images/nav/SearchIcon.png";

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={SearchIcon} height={17} width={17} />
        </components.DropdownIndicator>
    );
};

const Option = props => {
    const isChecked = props.isSelected || (props.data.isSelectAll && props.selectProps.value.length === props.selectProps.options.length - 1);

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


    return (
        <div style={containerStyle()}>
            <components.Option {...props}>
                <label className={`flex items-center tracking-tighter ${props.data.value == 'all' ? 'bold' : 'font-light'}`} >
                    {props.label}
                    {console.log(props)}
                    <input
                        type="checkbox"
                        style={checkboxStyle}
                        checked={isChecked}
                        onChange={() => null} // Dummy handler to satisfy React's controlled input requirement
                    // style={{ marginRight: '10px' }}
                    />
                </label>
            </components.Option>
        </div>
    );
};

const MultiSelectDropdown = ({ options, label, placeholder, labelClassName, isMulti, hasCheckbox = false, hasSelectAll = false }) => {
    const [selectedValues, setSelectedValues] = useState([]);
    // Adjusted to work with objects for correct label display
    const selectAllOption = {
        value: "all",
        label: "Select All",
        isSelectAll: true // Custom property to identify this special option
    };

    const handleChange = (selectedOptions, actionMeta) => {
        if (actionMeta.option?.isSelectAll) {
            if (selectedValues.length < options.length) {
                setSelectedValues(options); // Select all options as objects
            } else {
                setSelectedValues([]); // Deselect all
            }
        } else {
            setSelectedValues(selectedOptions || []);
        }
    };

    useEffect(() => {
        // Optionally, uncomment to auto-select all options initially or when options change
        // setSelectedValues([...options]);
    }, [options]);

    const formattedOptions = hasSelectAll ? [selectAllOption, ...options] : options;

    return (
        <React.Fragment>
            {label && <label className={labelClassName}>
                {label}
            </label>}
            <Select
                options={formattedOptions}
                value={selectedValues}
                placeholder={placeholder}
                onChange={handleChange}
                isMulti={isMulti}
                closeMenuOnSelect={hasCheckbox ? false : true}
                isClearable={false}
                // menuIsOpen={true}
                hideSelectedOptions={false}
                components={hasCheckbox ? { Option, DropdownIndicator, IndicatorSeparator: () => null } : { DropdownIndicator, IndicatorSeparator: () => null }}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
            />
        </React.Fragment>
    );
};

export default MultiSelectDropdown;
