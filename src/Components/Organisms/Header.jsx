import React from 'react';
import ScoreTitle from '../Atoms/ScoreTitle';
import ScoreSquare from '../Atoms/ScoreSquare';
import '../../Styles/Header.scss';

function Header() {
    return (
        <div className='header'>
            <ScoreTitle/>
            <ScoreSquare/>
        </div>
        )
}

export default Header;