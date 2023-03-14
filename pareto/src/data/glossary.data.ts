import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    boolean,
    sfunc,
    type,
    optional,
    number,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({})
    }),
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
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "EscapeString": sfunc(sdata(typeReference("EscapeStringData")), sdata(externalTypeReference("common", "String"))),
            "EscapeMultilineString": sfunc(sdata(typeReference("EscapeMultilineStringData")), sdata(externalTypeReference("common", "String"))),
        }),

    }],
}