
import * as M from './models'
import chalk = require('chalk')

import { CreateGroup } from './create-group.interface'

export const Impl1: CreateGroup =
function (users, traits) {
  let res: M.Group[] = []

  console.log('Traits:', traits.map((trait) => chalk.yellow(trait)).join(', '))

  return res
}
