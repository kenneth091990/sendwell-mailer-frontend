import React from 'react'
import CementedSuppressionList from '../list_components/CementedSuppressionList';
import MyList from '../list_components/MyList';
import SuppresionFiles from '../list_components/SuppressionFiles';





const Lists = () => {


    return (
        <div className="flex flex-col">
            <MyList />
            <SuppresionFiles />
            <CementedSuppressionList />
        </div>
    )
}

export default Lists;