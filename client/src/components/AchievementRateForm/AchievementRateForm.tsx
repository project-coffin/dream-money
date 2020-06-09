import React from 'react';
// TODO: styledComponents나 material-ui 같은 모듈 사용하나?
//import './AchievementRateFormTest.css';
import './AchievementRateFormTest2.css';
// import { makeStyles } from '@material-ui/core';

type AchievementRateFormProps = {
    difference: number,
    rate: number
}
function AchievementRateForm({difference, rate} : AchievementRateFormProps){
    const isTesting2 = 1;
    return <>
        <div>{difference}, {rate}</div>
        {
            isTesting2 &&
            <div className="circle">
                <span className="text">
                    ₩ x,xxx to ₩ x,xxx.. {rate}%
                </span>
            <div className="fill" style={{ height: `${rate}%`}}></div>
            </div>
        }
    </>;
}
export default AchievementRateForm;