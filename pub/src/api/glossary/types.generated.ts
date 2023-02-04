import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GEscapeMultilineStringData {
    
    export namespace Plines {}
    export type Plines = pt.Array<string>
}
export type GEscapeMultilineStringData = {
    readonly 'indentation': string
    readonly 'lines': GEscapeMultilineStringData.Plines
}
export type UEscapeMultilineStringData = GEscapeMultilineStringData

export namespace GEscapeStringData {
    
    export namespace PwrapperToEscape {}
    export type PwrapperToEscape = MOptional<string>
}
export type GEscapeStringData = {
    readonly 'escapeTabsAndNewLines': boolean
    readonly 'str': string
    readonly 'wrapperToEscape': GEscapeStringData.PwrapperToEscape
}
export type UEscapeStringData = GEscapeStringData