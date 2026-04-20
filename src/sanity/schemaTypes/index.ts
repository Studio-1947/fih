import { type SchemaTypeDefinition } from 'sanity'
import { dynamicSectionSchemas } from '../../../sanity/schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...dynamicSectionSchemas],
}
