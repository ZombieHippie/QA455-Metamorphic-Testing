
// Lang is a language that a user speaks
export type Lang = string

export interface User {
  Name: string,
  Langs: Lang[]
}

export interface Group {
  SimilarLang: Lang[]
  Users: User[]
}
