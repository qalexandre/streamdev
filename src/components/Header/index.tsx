import React, {ReactComponentElement} from 'react'

import searchIcon from '../../assets/search.svg'
import notificationIcon from '../../assets/bell.svg'
import profileIcon from '../../assets/profile.svg'
import { profile } from '../../context/users';
import { useNavigate } from 'react-router-dom';

interface HeaderProps{
    profile: profile;
  
}

export const Header = ({profile}: HeaderProps) => {

    const navigate = useNavigate();
    return (
        <div className="header">
            <p  className="header-title">StreamDev</p>
            <div className="header-options">
                <img src={searchIcon} alt="Ícone pesquisa" className="header-icon" />
                <a href=''  className="header-link" onClick={() => navigate('/',{replace: true})} >Início</a>
                <a  className="header-link">Minha lista</a>
                <img src={notificationIcon} alt="Ícone Notificação" className="header-icon" />
                <img  src={profileIcon} alt="Ícone perfil" className="header-icon" />
            </div>
        </div>
    )
}
