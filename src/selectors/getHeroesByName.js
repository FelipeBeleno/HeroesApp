import { heroes } from "../data/heroes";

export const getHeroesByName = (superhero = '') => {
    if (superhero === '') {
        return []
    }

    const superheros = superhero.toLocaleLowerCase();


   

    return heroes.filter((hero) => {
        return (
            hero.superhero.toLocaleLowerCase().includes(superheros)
        );
    })

}