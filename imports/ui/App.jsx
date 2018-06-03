import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Layout from './layout/Layout'
import Home from './home/Home'

const App = ({ loading, templates = [] }) => {
  const temps = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

  if (loading) return null
  return (
    <Layout>
      {/* <ul>{templates.map((template) => <li key={template._id}>{template.title}</li>)}</ul> */}
      <Home temps={temps} />
    </Layout>
  )
}

const templatesQuery = gql`
  query Templates {
    templates {
      _id
      title
    }
  }
`

export default graphql(templatesQuery, {
  props: ({ data }) => ({ ...data })
})(App)
