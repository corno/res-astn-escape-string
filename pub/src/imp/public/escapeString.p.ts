import * as api from "api-astn-escape-string"
import { escapeStringImp } from "../private/escapeStringImp"

export const escapeString: api.FEscapeString = ($) => {
    return escapeStringImp($)
}
