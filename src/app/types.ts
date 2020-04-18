export type Movie = {
    id: number,
    name: string,
    score: number
}

export type Query = {
    allMovie: Movie[]
}