import { API } from "./api.generated"
import { $$ as iescapeMultilineString } from "./implementations/escapeMultilineString.native"
import { $$ as iescapeString } from "./implementations/escapeString.native"

export const $api: API = {
    'escapeMultilineString': iescapeMultilineString,
    'escapeString': iescapeString,
}