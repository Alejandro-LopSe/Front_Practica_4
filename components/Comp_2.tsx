

import { Signal } from "@preact/signals";

import { FunctionComponent } from "preact";
import { User } from "../islands/Page.tsx";



export const Comp_2: FunctionComponent<{P:Signal,p:Signal,s:Signal} >=  ({P,p,s})=>{
    return (
        <div class={"Comp_2"}>
        <input placeholder={"Buscar"} name={"Buscar_Comp_1"} onFocus={(e)=>{s.value=e.currentTarget.value}} onInput={(e)=>{s.value=e.currentTarget.value}}></input>
        <div class={"data"}>
            {P.value.length>0 && P.value.map((pokemon: User) => (
                <div key={pokemon.id} class="pokemon">
                    <p>Name: {pokemon.name}</p>
                    <p >Username: {pokemon.username}</p>
                    <p>Created_at: {pokemon.created_at}</p>
                </div>
            ))}
            {P.value.length==0 && <p class={ "pokemon"}>Sin datos</p>}
        </div>
        <div class={"button"}>
    
            {p.value>1 && <button name={"anterior"} type={"button"} onClick={(e)=>{p.value=p.value-1}}>Anterior</button>}
            {P.value.length>0 && <button name={"siguiente"} type={"button"} onClick={(e)=>{p.value=p.value+1}}>Siguiente</button>}
    
        </div>
        </div>
        )
}