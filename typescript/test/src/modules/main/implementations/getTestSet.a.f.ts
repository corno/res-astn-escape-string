
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest($: { name: string, actual: string, expected: string }) {
        builder.add($.name, {
            'type': ['test', {
                type: ['short string', {
                    actual: $.actual,
                    expected: $.expected
                }]
            }]
        })
    }
    createTest({
        name: "escaped",
        actual: g_pub.$r.escapeString()({
            str: "bla\nbl'a",
            escapeTabsAndNewLines: true,
            wrapperToEscape: [true, "'"],
        }),
        expected: "bla\\nbl\\'a",
    })
    createTest({
        name: "not escaped",
        actual: g_pub.$r.escapeString()({
            str: "bla\nbl'a",
            escapeTabsAndNewLines: false,
            wrapperToEscape: [true, "'"]
        }),
        expected: "bla\nbl\\'a",
    })

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}