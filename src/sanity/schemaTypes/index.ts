import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {cardType} from './card'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {serviceType} from './serviceType'
import {homepageType} from './homepage'
import {servicePageType} from './servicePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    cardType,
    categoryType,
    postType,
    authorType,
    serviceType,
    homepageType,
    servicePageType,
  ],
}
