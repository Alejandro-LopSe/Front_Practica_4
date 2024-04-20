import { FunctionComponent, h } from "preact";
import { Comp_1 } from "../components/Comp_1.tsx";
import { Comp_2 } from "../components/Comp_2.tsx";
import { Comp_3 } from "../components/Comp_3.tsx";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export type Pokemon = {
    id: number;
    name: string;
    type: string;
    base_experience: number;
}
export type User = {
    id: number;
    name: string;
    username: string;
    created_at: string;
}
export type Quote = {
    id: number;
    quote: string
}

export const Page: FunctionComponent = () => {
    const c1_page = useSignal<number>(1);
    const c1_search = useSignal<string>("");
    const P = useSignal<Pokemon[]>([]);

    const c2_page = useSignal<number>(1);
    const c2_search = useSignal<string>("");
    const U = useSignal<User[]>([]);

    const c3_page = useSignal<number>(1);
    const c3_search = useSignal<string>("");
    const Q = useSignal<Quote[]>([]);

    const getPokemonsbypage = async (page: number) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/pokemon?page=${page}`);
        const data = await response.json();
        return data;
    };
    const getPokemonsbysearch = async (page: string) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/pokemon?query=${page}`);
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        const loadPokemons = async () => {
            const pokemons = await getPokemonsbypage(c1_page.value);
            P.value = pokemons;
        };

        loadPokemons();
    }, [c1_page.value]);
    useEffect(() => {
        const loadPokemons = async () => {
            const pokemons = await getPokemonsbysearch(c1_search.value);
            P.value = pokemons;
        };

        loadPokemons();
    }, [c1_search.value]);
//--------------------------------------------------------------------------------------------
    

    const getQuotebypage = async (page: number) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/quotes?page=${page}`);
        const data = await response.json();
        return data;
    };
    const getQuotebysearch = async (page: string) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/quotes?query=${page}`);
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        const loadPokemons = async () => {
            const pokemons = await getQuotebypage(c3_page.value);
            Q.value = pokemons;
        };

        loadPokemons();
    }, [c3_page.value]);
    useEffect(() => {
        const loadPokemons = async () => {
            const pokemons = await getQuotebysearch(c3_search.value);
            Q.value = pokemons;
        };

        loadPokemons();
    }, [c3_search.value]);
//--------------------------------------------------------------------------------------------
    const getUsersbypage = async (page: number) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/users?page=${page}`);
        const data = await response.json();
        return data;
    };
    const getUsersbysearch = async (page: string) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/users?query=${page}`);
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        const loadPokemons = async () => {
            const pokemons = await getUsersbypage(c2_page.value);
            U.value = pokemons;
        };

        loadPokemons();
    }, [c2_page.value]);
    useEffect(() => {
        const loadPokemons = async () => {
            const pokemons = await getUsersbysearch(c2_search.value);
            U.value = pokemons;
        };

        loadPokemons();
    }, [c2_search.value]);

    return (
        <div class={"Page"}>
            
            
            
            <Comp_1 P={P} p={c1_page} s={c1_search}></Comp_1>
            <div class={"Panel"}>
                <Comp_2 P={U} p={c2_page} s={c2_search}></Comp_2>
                <Comp_3 P={Q} p={c3_page} s={c3_search}></Comp_3>
            </div>
        </div>
    );
};
