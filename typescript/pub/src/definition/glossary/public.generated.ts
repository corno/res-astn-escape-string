import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FEscapeMultilineString = ($: T.EscapeMultilineStringData,) => gcommon.T.String

export type FEscapeString = ($: T.EscapeStringData,) => gcommon.T.String