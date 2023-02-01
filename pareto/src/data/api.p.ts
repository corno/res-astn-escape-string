import * as pr from 'pareto-core-raw'
import {
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method, dictionary, group, member, taggedUnion, types, func, data, string, boolean,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "EscapeStringData": group({
                "str": member(string()),
                "escapeTabsAndNewLines": member(boolean()),
                "wrapperToEscape": member(string()),
            }),
            "EscapeMultilineStringData": group({
                "lines": member(array(string())),
                "indentation": member(string()),
            })
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