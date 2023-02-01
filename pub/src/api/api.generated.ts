import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CescapeMultilineString = glo.FEscapeMultilineString

export type CescapeString = glo.FEscapeString

export type API = {
    escapeMultilineString: CescapeMultilineString
    escapeString: CescapeString
}