import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({results}) => (
    <ResponsiveBar 
        data={results}
        indexBy="id"
        keys={[ 'GAP Impact', 'Pre Harvest Impact', 'At Harvest Impact', 'Process Impact', 'Finished Product Impact']}
        colors={{ scheme: 'nivo' }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: '', enabled: false }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        maxValue={1}
    />
);

export default MyResponsiveBar;