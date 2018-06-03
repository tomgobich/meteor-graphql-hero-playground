import React, { Component } from 'react'

import Hero from './Hero'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { temps } = this.props
    const categories = [
      {
        title: 'Gaming',
        subtitle: 'Thumbnails for the latest and greatest titles in gaming',
        cover: 'https://placehold.it/1280x720'
      },
      {
        title: 'Theme',
        subtitle: 'Theme specific thumbnails, from New Years to wedding announcements',
        cover: 'https://placehold.it/1280x720'
      },
      {
        title: 'Series',
        subtitle: 'Made with series in mind, these thumbnails are meant for episodic content',
        cover: 'https://placehold.it/1280x720'
      },
      {
        title: 'Universal',
        subtitle: 'Thumbnails easily usable for anything and everything',
        cover: 'https://placehold.it/1280x720'
      }
    ]
    return (
      <div>
        <Hero temps={temps} />
        <div className='mx-8 -mt-8 flex flex-wrap bg-grey-lightest rounded overflow-hidden md:mb-4 md:shadow-lg'>
          {categories.map((cat) => (
            <div
              key={cat.title}
              className='cat-card w-full h-64 md:w-auto flex-auto relative'
              style={{ backgroundImage: `url(${cat.cover})` }}
            >
              <div className='cat-card_details w-full px-4 py-6 text-green-lightest absolute pin-b pin-l'>
                <div className='relative z-10'>
                  <h4 className='uppercase mb-2'>{cat.title}</h4>
                  <p className='opacity-75'>{cat.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
