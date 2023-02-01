import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TEscapeMultilineStringData = t.UEscapeMultilineStringData

export type TEscapeStringData = t.UEscapeStringData

export type FEscapeMultilineString = ($: TEscapeMultilineStringData,) => mcommon.TString

export type FEscapeString = ($: TEscapeStringData,) => mcommon.TString