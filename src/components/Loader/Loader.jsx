import React from 'react';

const Loader = ({ className = '', width = 150, height = 150 }) => {
    return (
        <div className={'positionRelative center-position ' + className}>
            <img
                className='img-fluid'
                src={require('../../assets/loading.gif')}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Loader;
