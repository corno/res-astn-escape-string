import * as pi from "pareto-core-internals"

import * as api from "api-astn-escape-string"
import { escapeStringImp } from "./escapeStringImp"

export const escapeMultilineStringImp: api.FEscapeMultilineString = ($) => {
    let index = 0
    const out: string[] = []
    $.lines.forEach((line) => {
        index += 1
        out.push(`${index === 0 ? "" : $.indentation}${escapeStringImp({
            str: line,
            escapeTabsAndNewLines: false,
            wrapperToEscape: "`",
        })}`)
    })
    return out.join("") //???? NO newline needed?
}