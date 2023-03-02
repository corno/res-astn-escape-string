import * as gthis from "../definition/glossary"

import { $$ as escapeStringImp } from "./escapeString.native"

import { CescapeMultilineString } from "../definition/api.generated"

export const $$: CescapeMultilineString = ($) => {
    let index = 0
    const out: string[] = []
    $.lines.__forEach((line) => {
        index += 1
        out.push(`${index === 0 ? "" : $.indentation}${escapeStringImp({
            str: line,
            escapeTabsAndNewLines: false,
            wrapperToEscape: [true, "`"],
        })}`)
    })
    return out.join("") //???? NO newline needed?
}