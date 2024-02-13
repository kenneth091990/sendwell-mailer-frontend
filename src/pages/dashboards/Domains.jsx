import React from 'react'
import ConnectedDomains from '../domain_lists/ConnectedDomains';
import SesProfiles from '../domain_lists/SesProfiles';

const Domains = () => {

    return (
        <div className="flex flex-col">
            <ConnectedDomains />
            <SesProfiles />
            {/* <div className="flex flex-col items-center">
                <CircularProgressBar />
            </div> */}
        </div>
    )
}

export default Domains;