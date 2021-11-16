import React from 'react';
import { Route } from 'react-router-dom';

function Niu({match}) {
    return (
        <div>
            Article ID: {match.params.id}
        </div>
    )
};
export default Niu;

