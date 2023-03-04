import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> =  {
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
    'builders': d({
    }),
    'interfaces': d({
    }),
    'functions': d({
        "EscapeString": func(typeReference("EscapeStringData"), null, null, data(typeReference("common", "String"), false)),
        "EscapeMultilineString": func(typeReference("EscapeMultilineStringData"), null, null, data(typeReference("common", "String"), false)),
    }),
}