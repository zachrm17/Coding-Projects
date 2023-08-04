import {createSchema} from 'sanity'
import {schemaTypes} from '.'

import product from './product'
import banner from './banner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner]),
})
