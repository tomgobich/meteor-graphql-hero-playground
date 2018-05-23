import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import TemplateSchema from '../../api/templates/templates.graphql'
import TemplateResolvers from '../../api/templates/resolvers'

const testSchema = `
type Query {
  hi: String
  templates: [Template]
}
`

const typeDefs = [ testSchema, TemplateSchema ]

const testResolvers = {
  Query: {
    hi() {
      return 'Hello Level Up'
    }
  }
}

const resolvers = merge(testResolvers, TemplateResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })
