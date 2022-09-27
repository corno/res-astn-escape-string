import * as api from "api-astn-escape-string"
import { escapeMultilineStringImp } from "../private/escapeMultilineStringImp"

export const escapeMultilineString: api.FEscapeMultilineString = ($) => {
    return escapeMultilineStringImp($)
}