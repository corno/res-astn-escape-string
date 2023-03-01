import { API } from "./api"
import { $$ as iescapeMultilineString } from "./implementations/escapeMultilineString.native"
import { $$ as iescapeString } from "./implementations/escapeString.native"

export const $a: API = {
    'escapeMultilineString': iescapeMultilineString,
    'escapeString': iescapeString,
}