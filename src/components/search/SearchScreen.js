import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {




    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);


    const [formValues, cambioForm] = useForm({
        seachText: q
    });


    const { seachText } = formValues;


    const heroesFilter = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${seachText}`);
    }



    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search  Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find you hero"
                            className="form-control"
                            name="seachText"
                            value={seachText}
                            onChange={cambioForm}
                        />

                        <button
                            className="btn mt-1 btn-outline-info"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    {
                        heroesFilter.map((hero) => {
                            return (
                                <HeroCard hero={hero} key={hero.id} />
                            )
                        })
                    }
                    {
                        (q === '')
                        &&
                        <div className="alert alert-info col-7">
                            Ingrese su busqueda
                    </div>
                    }

                    {
                        (q !== "" && heroesFilter.length === 0)
                        &&
                        <div className="alert alert-danger col-7">
                            El valor {q} no se a encontrado
                    </div>
                    }

                </div>



            </div>
        </div>
    )
}
