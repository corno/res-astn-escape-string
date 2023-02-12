import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FEscapeMultilineString = ($: T.EscapeMultilineStringData,) => mcommon.T.String

export type FEscapeString = ($: T.EscapeStringData,) => mcommon.T.String