import React from 'react'
import CementedSuppressionList from '../suppresions/CementedSuppressionList';
import SuppresionFiles from '../suppresions/SuppressionFiles';





const Suppresions = () => {


    return (
        <div className="flex flex-col">
            <SuppresionFiles />
            <CementedSuppressionList /> 
        </div>
    )
}

export default Suppresions;