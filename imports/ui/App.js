import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Layout from './layout/Layout'

const App = ({ loading, templates = [] }) => {
  if (loading) return null
  return (
    <Layout>
      {/* <ul>{templates.map((template) => <li key={template._id}>{template.title}</li>)}</ul> */}
      <div className='hero'>
        <div className='hero-content px-8'>
          <h1>Thumbnails Without Hassel</h1>
          <p>
            Find the next thumbnail for your blog, video, or series.&nbsp;
            <br className='hidden md:block' />
            Free unlimited downloads, forever!
          </p>
          <button className='btn btn-primary'>Start Browsing</button>
        </div>
        <div className='hero-grid'>
          <div id='parallaxed' data-depth='0.2'>
            {[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ].map(() => (
              <div>
                <img src='https://placehold.it/1280x720' />
              </div>
            ))}
          </div>
        </div>
      </div>
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
