import { useNavigate } from 'react-router-dom';
import { profile, profiles } from '../../context/users';


export const SelectProfile = () =>{

    const navigate = useNavigate();

    const setProfile = (profile: profile) =>{
        navigate('/home',{
            replace: true,
            state: {profile}
        })
    }

    return( <>{Object.entries(profiles).map(([key,value]) =>{
        return(
            <a key={key} href='' onClick={() => setProfile(value)} className="profile">
                <div className="profile-image ">
                <img src={value.image.source} alt={value.image.alt} />
                </div>
                
                <span>{value.username}</span>
            </a>
        )
    })}</>)
}