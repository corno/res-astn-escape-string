import * as api from "api-astn-escape-string"
import { escapeMultilineStringImp } from "../private/escapeMultilineStringImp.p"

export const escapeMultilineString: api.FEscapeMultilineString = ($) => {
    return escapeMultilineStringImp($)
}