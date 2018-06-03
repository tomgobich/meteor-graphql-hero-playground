import React, { Component } from 'react'

class Hero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { temps } = this.props
    return (
      <div className='hero'>
        <div className='hero-content px-8'>
          <h1>Thumbnails Without Hassel</h1>
          <p>
            Find the next thumbnail for your blog, video, or series with
            <br className='hidden md:block' />
            our free plan or low priced subscription plan
          </p>
          <button className='btn btn-primary'>Start Browsing for Free</button>
        </div>
        <div className='hero-grid'>
          <div id='parallaxed' data-depth='0.2'>
            {temps.map((temp) => (
              <div key={temp}>
                <img src='https://placehold.it/1280x720' />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
