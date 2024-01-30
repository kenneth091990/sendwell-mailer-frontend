import React from 'react'
import CementedSuppressionList from '../list_components/CementedSuppressionList';
import MyList from '../list_components/MyList';



const Lists = () => {


    return (
        <div className="flex flex-col">
            <MyList />
            <CementedSuppressionList />
        </div>
    )
}

export default Lists;