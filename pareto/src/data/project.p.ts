import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "resource for escaping ASTN strings",
    'license': "ISC",
    
    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}