import React from 'react';
import AchievementRateContainer from '../containers/AchievementRateContainer';
import RegularSavingsNotiContainer from '../containers/RegularSavingsNotiContainer';
//TOOD: *
function DashBoard(){
    return(
        <div>
            <AchievementRateContainer/>
            <RegularSavingsNotiContainer/>
        </div>
    );
    /*
    <fullpage>
        <header/>
        <content>
            <subtitle/>
            (...)
            <AchievementRateContainer />
            <RegularSavingsNotiContainer />
            (...)
        </content>
    </fullpage>
    */
}

export default DashBoard;