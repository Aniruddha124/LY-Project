import React from 'react';
import dynamic from 'next/dynamic';

// const ReactSpeedometer = dynamic(
//     () => import('react-d3-speedometer'),
//     { ssr: false },
// );

const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), { ssr: false });

function Speedometer() {
    return (
        <div>
            <ReactSpeedometer
                width={500}
                needleHeightRatio={0.7}
                value={777}
                customSegmentStops={[0, 250, 750, 1000]}
                segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
                currentValueText="How are you?"
                customSegmentLabels={[
                    {
                        text: 'Good',
                        position: 'OUTSIDE',
                        color: '#d8dee9',
                    },
                    {
                        text: 'Great',
                        position: 'OUTSIDE',
                        color: '#d8dee9',
                    },
                    {
                        text: 'Awesome!',
                        position: 'OUTSIDE',
                        color: '#d8dee9',
                    },
                ]}
                ringWidth={47}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={'#a7ff83'}
                textColor={'#d8dee9'}
            />
        </div>
    );
}

export default Speedometer;