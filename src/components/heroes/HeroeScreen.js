import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';



export const HeroeScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(()=>getHeroesById(heroeId), [heroeId])

    if (!hero) {
        return <Redirect to="./" />;
    }


    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    /* const handleReturn2 = () => {
        switch (publisher) {
            case 'DC Comics':
                history.push('/dc')
                break;

            case 'Marvel Comics':
                history.push('/Marvel')
                break;

            default:
                history.push('/')
                break;
        }
    } */

    const handleReturn = () => {

        if (history.length <= 0) {
            history.push('/')
        } else {
            history.goBack();

        }
    }

    return (
        <div className="row mt-5 ">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: {alter_ego}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: {publisher}</b>
                    </li>
                    <li className="list-group-item">
                        <b>First Appearence: {first_appearance}</b>
                    </li>
                </ul>

                <h5>Charactes: </h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                > Return </button>

            </div>
        </div>
    )
}
