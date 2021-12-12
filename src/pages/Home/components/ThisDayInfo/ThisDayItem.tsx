import React from 'react';
import {ItemType} from "./ThisDayInfo";
import s from './ThisDayInfo.module.scss'
import {IndicatorSvgSelector} from "../../../../assets/icons/Indicators/IndicatorSvgSelector";

type PropsType = {
    item: ItemType;
}


const ThisDayItem = ({item}: PropsType) => {

    const {icon_id, name, value} = item

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};

export default ThisDayItem;