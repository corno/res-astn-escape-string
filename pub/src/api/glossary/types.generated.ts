import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GEscapeMultilineStringData {
    
    export namespace Plines {}
    export type Plines = pt.Array<string>
}
export type GEscapeMultilineStringData = {
    readonly 'indentation': string
    readonly 'lines': GEscapeMultilineStringData.Plines
}
export type UEscapeMultilineStringData = GEscapeMultilineStringData

export namespace GEscapeStringData {}
export type GEscapeStringData = {
    readonly 'escapeTabsAndNewLines': boolean
    readonly 'str': string
    readonly 'wrapperToEscape': string
}
export type UEscapeStringData = GEscapeStringData