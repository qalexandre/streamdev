import { useNavigate } from 'react-router-dom';
import { profile, profiles } from '../../context/users';


export const SelectProfile = () => {

    
    const navigate = useNavigate();

    const setProfile = (profile: profile) => {
        navigate('/home', {
            replace: true,
            state: { profile }
        })
    }

    return (<>{Object.entries(profiles).map(([key, value]) => {
        return (
            <div key={key} className="profile">
                <div onClick={() => setProfile(value)} className="profile-image circle" style={{background:`linear-gradient(225deg, ${value.color1}  40%, ${value.color2} 100%)`}}>
                    <img src={value.image.source} alt={value.image.alt} />
                </div>

                <span>{value.username}</span>
            </div>
        )
    })}</>)
}