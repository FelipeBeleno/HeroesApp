import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {



    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`El dato enviado "${publisher}" es invalido los publisher correctos son: 
        ${validPublisher.map((corr) => {
            return corr
        })}
         `)
    }
    return heroes.filter((hero) => {

        return (hero.publisher === publisher)

    })
}