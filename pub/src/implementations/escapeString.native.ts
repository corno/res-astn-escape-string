import * as pi from 'pareto-core-internals'

import * as api from "../api"

export const $$: api.CescapeString = ($) => {
    let out = ""
    for (let i = 0; i !== $.str.length; i += 1) {
        const curChar = $.str.charCodeAt(i)

        function padStart(str: string, targetLength: number, padString: string) {
            targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
            padString = String(typeof padString !== 'undefined' ? padString : ' ');
            if (str.length > targetLength) {
                return String(str);
            } else {
                targetLength = targetLength - str.length;
                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
                }
                return padString.slice(0, targetLength) + String(str);
            }
        }


        //solidus characters ( / ) are not escaped!

        //backspace and form feed are escaped using the hexadecimal notation, not the shorthands \b and \f

        if ($.str[i] === "\\") {
            out += "\\\\"
        } else if ($.str[i] === "\n") {
            out += $.escapeTabsAndNewLines ? "\\n" : $.str[i]
        } else if ($.str[i] === "\r") {
            out += $.escapeTabsAndNewLines ? "\\r" : $.str[i]
        } else if ($.str[i] === "\t") {
            out += $.escapeTabsAndNewLines ? "\\t" : $.str[i]
        } else if ($.str.charCodeAt(i) < 32) {
            //control character (some of them have already been escaped above)
            out += "\\u" + padStart(curChar.toString(16).toUpperCase(), 4, "0")
        } else {
            if ($.wrapperToEscape[0] === true) {
                const str = $.str
                pi.cc($.wrapperToEscape[1], ($) => {

                    if (str[i] === $) {
                        out += "\\" + $
                    } else {
                        out += str[i]
                    }
                })
            } else {
                out += $.str[i]
            }
        }
    }
    return out
}
