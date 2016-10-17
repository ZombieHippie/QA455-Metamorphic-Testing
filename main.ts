
import * as M from './src/models'

import { Impl1 } from './src/impl-1.function'

const
  chn = "chn",
  eng = "eng",
  esp = "esp",
  fra = "fra",
  ger = "ger",
  por = "por"

const
  u0A = NewUser("A", [ chn, eng, fra ]),
  u0B = NewUser("B", [ chn, fra ]),
  u0C = NewUser("C", [ fra ]),
  u0D = NewUser("D", [ eng ]),
  u0E = NewUser("E", [ eng, fra ]),
  u0F = NewUser("F", [ eng ])

const impl1_0 = Impl1(
  [ u0A, u0B, u0C, u0D, u0E, u0F ],
  [ chn, eng, esp, fra, ger, por ]
)

console.log(impl1_0)


function NewUser (name: string, langs: M.Lang[]): M.User {
  return { Name: name, Langs: langs }
}
