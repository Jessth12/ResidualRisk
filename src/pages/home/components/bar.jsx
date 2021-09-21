import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({results}) => (
    <ResponsiveBar 
        data={results}
        indexBy="id"
        keys={[ 'stage1_impact', 'stage2_impact', 'stage3_impact', 'stage4_impact']}
        colors={{ scheme: 'nivo' }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: '', enabled: false }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
    />
);

export default MyResponsiveBar;