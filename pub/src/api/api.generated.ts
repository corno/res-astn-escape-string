import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CescapeMultilineString = gglo.FEscapeMultilineString

export type CescapeString = gglo.FEscapeString

export type API = {
    escapeMultilineString: CescapeMultilineString
    escapeString: CescapeString
}