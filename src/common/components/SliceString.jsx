import React from 'react';

function SliceString({ text, maxLength=25 }) {
    // Function to slice the string into substrings of max length 30
    const sliceString = (str) => {
        if (str.length <= maxLength) {
            return str; // Return the original string if it's within or equal to the maxLength
        } else {
            return str.substring(0, maxLength) + "..."; // Otherwise, truncate and add ellipsis
        }
    };

    // Call the sliceString function to get the sliced substrings
    const strings = sliceString(text);

    return (
        <div>
            {strings}
        </div>
    );
}

export default SliceString;