import { $$ as escapeStringImp } from "./escapeString.native"

import { A } from "../api.generated"

export const $$: A.escapeMultilineString = () => {
    return ($) => {
        let index = 0
        const out: string[] = []
        $.lines.__forEach((line) => {
            index += 1
            out.push(`${index === 0 ? "" : $.indentation}${escapeStringImp()({
                str: line,
                escapeTabsAndNewLines: false,
                wrapperToEscape: [true, "`"],
            })}`)
        })
        return out.join("") //???? NO newline needed?
    }
}