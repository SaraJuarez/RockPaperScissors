import React from 'react';
import rockIcon from '../../Images/icon-rock.svg';
import '../../Styles/GameButton.scss';

function GameButton (props) {

    const {icon} = props;

    return (
        <div className='gameButton-container'>
            <img src={rockIcon}/>
        </div>
        )
}


export default GameButton;