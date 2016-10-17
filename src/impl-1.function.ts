
import * as M from './models'
import chalk = require('chalk')

import { CreateGroup } from './create-group.interface'

export const Impl1: CreateGroup =
function (users, langs) {
  let res: M.Group[] = []

  console.log('Langs:', langs.map((lang) => chalk.yellow(lang)).join(', '))

  return res
}
