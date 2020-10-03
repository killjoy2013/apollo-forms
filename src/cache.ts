
import { InMemoryCache, makeVar } from '@apollo/client';
import { Car, City } from './graphql/types';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies:{
        Query:{
            fields:{
                carForm(){
                    return carFormVar();
                },
                cityForm(){
                    return cityFormVar();
                }
            }
        }
    }
});

export const carFormVar = makeVar<Car>({
    brand: "",
    model: "",
    year: "",
    fastEnough: false
})

export const cityFormVar = makeVar<City>({
    name: "",
    country: "",
    population: null
})