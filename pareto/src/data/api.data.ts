import * as pd from 'pareto-core-data'
import {
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method, dictionary, group, member, taggedUnion, types, func, data, string, boolean, type, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "EscapeStringData": type(group({
                "str": member(string()),
                "escapeTabsAndNewLines": member(boolean()),
                "wrapperToEscape": member(optional(string())),
            })),
            "EscapeMultilineStringData": type(group({
                "lines": member(array(string())),
                "indentation": member(string()),
            })),
        }),
        'interfaces': d({
        }),
        'functions': d({
            "EscapeString": func(typeReference("EscapeStringData"), null, null, data(typeReference("common", "String"), false)),
            "EscapeMultilineString": func(typeReference("EscapeMultilineStringData"), null, null, data(typeReference("common", "String"), false)),
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "escapeMultilineString": algorithm(definitionReference("EscapeMultilineString")),
            "escapeString": algorithm(definitionReference("EscapeString")),
        })
    },
}