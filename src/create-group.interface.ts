
import * as M from './models'

export interface CreateGroup {
  (users: M.User[], traits: M.Trait[]): M.Group[]
}
