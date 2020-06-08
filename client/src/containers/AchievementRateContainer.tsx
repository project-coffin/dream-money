import React, {useState, useCallback, useMemo, useEffect} from 'react';
import AchievementRateForm from '../components/AchievementRateForm';

//TODO: convert "features" to (useState | Redux | GraphQL)
//TODO: 
function AchievementRateContainer(){
    /* TESTCASE */
    //TODO: 데이터 넘어오는 양식 정해지면 수정할 것.
    type featureType1 = {
        name: string,
        money: number,
        purpose: number,
    };
    type featureType2 = {
        deposit: number,
        withdraw: number,
    };
    const feature1 : featureType1 = {
        name: "GANGSTER",
        money: 33_333_333,
        purpose: 100_000_000,
    };
    const feature2 : featureType2 = {
        deposit: 3_000_000,
        withdraw: 2_000_000
    };
    const temporaryFormula1 = () : number =>{ return feature2.deposit - feature2.withdraw; }
    const temporaryFormula2 = () : number =>{ return feature1.money >= 0 ? feature1.money / feature1.purpose : 0 }

    const [difference, achievementRate] : [number, number] = useMemo(()=>{
        return [temporaryFormula1(), temporaryFormula2()];
    }, [feature1, feature2]);

    return(
        <AchievementRateForm difference={difference} rate={achievementRate}/>
    );
}
export default AchievementRateContainer;