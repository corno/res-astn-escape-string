import * as pl from "pareto-core-lib"
import * as lib from "../../../pub"


pl.logDebugMessage("no tests yet")

pl.logDebugMessage(lib.$.serializeString({
    str:"bla\nbl'a",
    escapeTabsAndNewLines: true,
    wrapperToEscape: "'"
}))

pl.logDebugMessage(lib.$.serializeString({
    str:"bla\nbl'a",
    escapeTabsAndNewLines: false,
    wrapperToEscape: "'"
}))
