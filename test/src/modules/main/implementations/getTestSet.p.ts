
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as mtest from "lib-pareto-test"
import * as mapi from "../api"
import * as mpub from "../../../../../pub"

export const $$: mapi.CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
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
        actual: mpub.$a.escapeString({
            str: "bla\nbl'a",
            escapeTabsAndNewLines: true,
            wrapperToEscape: [true, "'"],
        }),
        expected: "bla\\nbl\\'a",
    })
    createTest({
        name: "not escaped",
        actual: mpub.$a.escapeString({
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