import React, { Component } from 'react'
import Header from './Header'

export default ({ children }) => (
  <div className='h-full bg-grey-lighter'>
    <Header />
    {children}
  </div>
)
