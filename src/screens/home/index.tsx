import { useLocation } from "react-router-dom"
import { Header } from "../../components/Header"
import { InfoMovie } from "../../components/InfoMovie"
import { Populars } from "../../components/Populars"
import { profile } from "../../context/users"

import '../../styles/home.css'

interface CustomizedState{
    profile: profile
}

export const HomeScreen = () => {
    const location = useLocation();
    const state = location.state as CustomizedState;
    const profile = state.profile;

    document.title = 'Home - '+profile.username;
   
    return (
        <div className="screen" style={{background: `linear-gradient(-269.55deg, #1D1D1D 6.76%, rgba(29, 29, 29, 0) 96.54%),linear-gradient(269.55deg, #1D1D1D -40.76%, rgba(29, 29, 29, 0) 90.54%),url(${profile.main_show.background}) repeat-x fixed`}}>
            <Header profile={profile}  />
            <InfoMovie profile={profile} />
            <Populars profile={profile} />
        </div>
    )
}