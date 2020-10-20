import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {


    const heroes = getHeroesByPublisher(publisher);


    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (

                    <HeroCard hero={hero} key={hero.id}/>
                ))
            }

        </div >
    )
}
