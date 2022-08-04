import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const BusinessSum = () => {
    return (
        <div>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <div className="text-center">
                        <h1 className='text-4xl'>{isVisible ? <CountUp end="100" /> : null}+</h1>
                        <h1 className='text-xl'>Name</h1>
                    </div>

                )}
            </VisibilitySensor>
        </div>
    );
};

export default BusinessSum;