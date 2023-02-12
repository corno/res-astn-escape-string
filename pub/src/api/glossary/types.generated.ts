import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace EscapeMultilineStringData {
        
        export type indentation = string
        
        export namespace lines {
            
            export type A = string
        }
        
        export type lines = pt.Array<string>
    }
    
    export type EscapeMultilineStringData = {
        readonly 'indentation': string
        readonly 'lines': pt.Array<string>
    }
    
    export namespace EscapeStringData {
        
        export type escapeTabsAndNewLines = boolean
        
        export type str = string
        
        export namespace wrapperToEscape {
            
            export type O = string
        }
        
        export type wrapperToEscape = [ false ] | [ true, string]
    }
    
    export type EscapeStringData = {
        readonly 'escapeTabsAndNewLines': boolean
        readonly 'str': string
        readonly 'wrapperToEscape': [ false ] | [ true, string]
    }
}