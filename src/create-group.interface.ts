
import * as M from './models'

export interface CreateGroup {
  (users: M.User[], langs: M.Lang[]): M.Group[]
}
