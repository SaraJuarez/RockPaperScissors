import React from 'react';
import '../Styles/Home.scss';
import Header from '../Components/Organisms/Header';
import GameButton from '../Components/Atoms/GameButton';
function Home () {
    return (
        <div className='homeContainer'>
           <Header/>
           <div className='firstRow'>
                <GameButton/>
                <GameButton/>
            </div>
            <div className='secondRow'>
                <GameButton/>
            </div>
        </div>
    )

}

export default Home;