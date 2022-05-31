import React from 'react';

const OneKeyData = ({ keyImg, keyData, keyName }) => {

    return (
        <div className='OneKeyData'>
            <img src={keyImg} alt={keyImg} className='icon'></img>
            <div className='container-number-name'>
                <span className='number'>{keyData}</span>
                <span className='name'>{keyName}</span>
            </div>
        </div>
    );
};

export default OneKeyData;