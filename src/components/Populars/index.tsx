import { profile } from "../../context/users"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

interface PopularProps {
    profile: profile;
}


export const Populars = ({ profile }: PopularProps) => {
    
    return (
        <div className="populars">
            <div className="populars-title">
                <div className="text">Populares</div>
                <div className="bar"></div></div>
            <div className="populars-list">
                {profile.shows.map((show, key) => (
                    <div key={key} className="show" style={{backgroundImage: ` linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, rgba(24, 24, 24, 0.8) 80.79%), url(${show.poster})`}}>
                        <div className="show-category">{show.category}</div>
                        <div className="show-classification">
                        {show.classification.map((star, key) =>(
                    <FontAwesomeIcon key={key} size={"sm"} className="rating-icon" icon={star === 1 ? faStar : faStarHalfStroke} color='#FFA634'/> 
                )
                )}
                        </div>
                        <div className="show-title">{show.title}</div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}