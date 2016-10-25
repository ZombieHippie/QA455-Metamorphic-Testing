
// Trait is the base type for anything that a user "has"
export type Trait = string

export interface User {
  Name: string,
  Traits: Trait[]
}

export interface Group {
  SimilarTrait: Trait[]
  Users: User[]
}
