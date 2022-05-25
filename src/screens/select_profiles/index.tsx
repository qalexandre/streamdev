import { useState } from 'react'

import { SelectProfile } from '../../components/SelectProfile'

import '../../styles/selectProfile.css'

import moment from 'moment'



export const SelectProfileScreen = () => {

    document.title = 'StreamDev'

    return (
        <div className='main'>
            <div className="header">
                <div className="header-title">StreamDev</div>
                <div className="header-time">{moment().format('LT').toLowerCase()}</div>
            </div>
            <div className="body">
            <div className="text">
                <div className="text-welcome">Bem-vindo de volta ao StremDev</div>
                <div className="text-choice">Quem está usando?</div>
            </div>
            <div className="profiles">
                <SelectProfile />
            </div>
            </div>
            
        </div>
    )
}