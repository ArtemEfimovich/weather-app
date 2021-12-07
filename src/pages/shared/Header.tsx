import React from 'react';
import s from './Header.module.scss'
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={s.title}>Weather App </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id={'change-theme'}/>
                </div>
            </div>
        </header>
    );
};

export default Header;