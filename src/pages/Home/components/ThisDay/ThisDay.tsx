import React from 'react';
import s from './ThisDay.module.scss'
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

const ThisDay = () => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}> 20°</div>
                    <div className={s.this__day_name}>Today</div>
                </div>
                <GlobalSvgSelector id='sun'/>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Time: <span> 7:00 pm</span>
                </div>
                <div className={s.this__city}>
                    City: <span> Minsk</span>
                </div>
            </div>
        </div>
    );
};

export default ThisDay;