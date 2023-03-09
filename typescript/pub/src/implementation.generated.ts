import { API } from "./api.generated"
import { $$ as iescapeMultilineString } from "./implementations/escapeMultilineString.native"
import { $$ as iescapeString } from "./implementations/escapeString.native"

export const $r: API = {
    'escapeMultilineString': iescapeMultilineString,
    'escapeString': iescapeString,
}