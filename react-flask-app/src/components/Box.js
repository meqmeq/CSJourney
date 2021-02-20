import React from 'react'

const box = 
<svg width="125" height="125">
    <defs>
        <linearGradient id="MyGradient">
            <stop  stopColor="pink" /><stop offset="99.9%" stopColor='#ECE6EC' />
        </linearGradient>
    </defs>
    <rect fill="url(#MyGradient)" x="10" y="10" width="100" height="100" rx="15"  />
</svg>

export default box
