import { profile } from "../../context/users"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

interface InfoMovieProps{
    profile: profile
}

export const InfoMovie = ({profile}: InfoMovieProps) =>{
    return(
        <div className="main-movie">
            <div className="movie-genres"><span className="movie-genre">{profile.main_show.category}</span></div>
            <div className="movie-extra">
                <div className="movie-classification">
                {profile.main_show.classification.map((star, key) =>(
                    <FontAwesomeIcon key={key} className="rating-icon" icon={star === 1 ? faStar : faStarHalfStroke} color='#FFA634'/> 
                )
                )}
                </div>
                <div className="movie-time">
                <FontAwesomeIcon icon={faClock} color="#fff"/> {profile.main_show.time}

                </div>
            </div>
            <p className="movie-title">{profile.main_show.title}</p>
            <p className="movie-desc">{profile.main_show.description}</p>
            <a className="movie-button">Assistir agora</a>
        </div>
    )
}