import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = (hero/* {id, superhero, publisher, alter_ego, first_appearance, characters} */) => {

    const { id, superhero,  alter_ego, first_appearance, characters } = hero.hero;



    return (
        <div className="card ms-3  " style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img animate__animated animate__fadeIn" alt={superhero}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (characters !== alter_ego) && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>

                        </p>

                        <Link className="btn btn-primary" to={`./hero/${id}`}>
                        Mas info...
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
