import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CescapeMultilineString = gthis.FEscapeMultilineString

export type CescapeString = gthis.FEscapeString

export type API = {
    escapeMultilineString: CescapeMultilineString
    escapeString: CescapeString
}