import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  toggleNav = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <header>
        <div className='h-14 flex flex-wrap justify-between'>
          <div className='h-full w-2/5 md:w-1/5'>
            <a className='logo-link' href='/'>
              ThumbTemps
            </a>
          </div>
          <div className='w-3/5 md:w-3/5'>
            <nav className='flex md:hidden'>
              <a className={this.state.isActive ? 'is-active' : ''} onClick={this.toggleNav}>
                <ion-icon name='menu' />
                <span className='pl-2'>Menu</span>
              </a>
            </nav>
            <nav className={`menu ${this.state.isActive ? 'is-active' : ''}`}>
              <a href='#'>Browse</a>
              <a href='#'>Tutorials</a>
              <a href='#'>Coming Soon</a>
              <a href='#'>License</a>
              <a href='#'>Contact</a>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
