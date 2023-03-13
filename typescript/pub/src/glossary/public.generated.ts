import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace F {
    
    export type EscapeMultilineString = ($: T.EscapeMultilineStringData,) => g_common.T.String
    
    export type EscapeString = ($: T.EscapeStringData,) => g_common.T.String
}