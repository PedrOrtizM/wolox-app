export interface IPokemonResponse{
    count: number;
    next: string | null;    
    previous:string | null;
    results: Array<IPokemon>
}

export interface IPokemonDetail{
    name:string;
    height:number;
    id:number;
    weight:number;
    sprites:{
        front_default:string;
    }
    types:Array<IType>
    moves:Array<IMove>
}

interface IType{
    type:{
        name:string;
    };
    slot:number;
}


interface IMove{
    move:{
        name:string;
    };
}

export interface IPokemon{
    name:string;
    url:string;
}