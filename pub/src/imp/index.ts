import * as api from "astn-serialize-string-api"
import { escapeMultilineString, escapeString } from "./serializeString"

type API = {
    serializeString: api.EscapeString
    serializeMultilineString: api.EscapeMultilineString
}

export const $: API = {
    serializeString: escapeString,
    serializeMultilineString: escapeMultilineString,
}