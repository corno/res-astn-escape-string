
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"

import { CgetTestSet } from "../definition/api.generated"

export const $$:CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
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
        actual: gpub.$r.escapeString({
            str: "bla\nbl'a",
            escapeTabsAndNewLines: true,
            wrapperToEscape: [true, "'"],
        }),
        expected: "bla\\nbl\\'a",
    })
    createTest({
        name: "not escaped",
        actual: gpub.$r.escapeString({
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