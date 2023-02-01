
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../api"

import * as pub from "../../../../../pub/dist"

export const $$: api.CgetTestSet = () => {

    const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
    function createTest($: { name: string, actual: string, expected: string }) {
        builder.add($.name, {
            type: ["test", {
                type: ["short string", {
                    actual: $.actual,
                    expected: $.expected
                }]
            }]
        })
    }
    createTest({
        name: "escaped",
        actual: pub.$a.escapeString({
            str: "bla\nbl'a",
            escapeTabsAndNewLines: true,
            wrapperToEscape: "'"
        }),
        expected: "bla\\nbl\\'a",
    })
    createTest({
        name: "not escaped",
        actual: pub.$a.escapeString({
            str: "bla\nbl'a",
            escapeTabsAndNewLines: false,
            wrapperToEscape: "'"
        }),
        expected: "bla\nbl\\'a",
    })

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}