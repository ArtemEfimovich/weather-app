import React from 'react';
import s from './Header.module.scss'
import GlobalSvgSelector from "../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'


const Header = () => {
    const options = [
        {value: 'city-1', label: 'Minsk'},
        {value: 'city-2', label: 'Moscow'},
        {value: 'city-3', label: 'Brest'}
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={s.title}>Weather App</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id={'change-theme'}/>
                </div>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    styles={colourStyles}/>
            </div>
        </header>
    );
};

export default Header;