import * as pd from 'pareto-core-data'

import {
    string, member, group,
    array,
    typeReference,
    data,
    boolean,
    sfunc,
    type,
    optional,
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "EscapeString": sfunc(data(typeReference("EscapeStringData")), externalTypeReference("common", "String")),
            "EscapeMultilineString": sfunc(data(typeReference("EscapeMultilineStringData")), externalTypeReference("common", "String")),
        }),
    },
}