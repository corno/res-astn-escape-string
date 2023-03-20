import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type escapeMultilineString = g_this.SYNC.A.F.EscapeMultilineString
    
    export type escapeString = g_this.SYNC.A.F.EscapeString
}

export type API = {
    readonly 'escapeMultilineString': A.escapeMultilineString
    readonly 'escapeString': A.escapeString
}