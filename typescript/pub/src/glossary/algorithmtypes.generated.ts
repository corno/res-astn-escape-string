import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {
        
        
        export namespace F {
            export type EscapeMultilineString = ($: T.EscapeMultilineStringData) => g_common.T.String
        }
        
        
        export namespace F {
            export type EscapeString = ($: T.EscapeStringData) => g_common.T.String
        }
    }
}