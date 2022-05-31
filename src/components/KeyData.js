import React from 'react';
import OneKeyData from './OneKeyData';

const KeyData = ({ keyData }) => {

    return (
        <div className='container-keyData'>
            <OneKeyData keyImg={"../calories-icon.png"} keyData={keyData?.calorieCount.toLocaleString('en') + "kCal"} keyName={" Calories"} />
            <OneKeyData keyImg={"../protein-icon.png"} keyData={keyData?.proteinCount + "g"} keyName={" Proteines"} />
            <OneKeyData keyImg={"../glucide-icon.png"} keyData={keyData?.carbohydrateCount + "g"} keyName={" Glucides"} />
            <OneKeyData keyImg={"../lipide-icon.png"} keyData={keyData?.lipidCount + "g"} keyName={" Lipides"} />
        </div>
    );
};

export default KeyData;