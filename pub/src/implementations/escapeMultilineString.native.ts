import * as api from "../api"
import { $$ as escapeStringImp } from "./escapeString.native"

export const $$: api.CescapeMultilineString = ($) => {
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