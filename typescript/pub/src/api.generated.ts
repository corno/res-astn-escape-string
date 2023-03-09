import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type escapeMultilineString = g_this.F.EscapeMultilineString

export type escapeString = g_this.F.EscapeString

export type API = {
    escapeMultilineString: escapeMultilineString
    escapeString: escapeString
}