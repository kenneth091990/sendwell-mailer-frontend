import React from 'react'
import CementedSuppressionList from '../suppresions/CementedSuppressionList';
import SuppresionFiles from '../list_components/SuppressionFiles';





const Suppresions = () => {


    return (
        <div className="flex flex-col">
            <SuppresionFiles />
            <CementedSuppressionList /> 
        </div>
    )
}

export default Suppresions;