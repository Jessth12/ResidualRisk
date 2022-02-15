import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 50, right: 75, bottom: 50, left: 75 }}
        startAngle={0}
        activeOuterRadiusOffset={8}
        colors={['#7DA6CA', '#95B8D1', '#8AB8BC', '#94C9AF', '#87B79F', '#B4647B']}
        colorBy="index"
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}

        startAngle={-90}
        endAngle={90}
        innerRadius={.5}

        theme={{
            fontSize: '20px'
        }}

    />
);

export default MyResponsivePie;