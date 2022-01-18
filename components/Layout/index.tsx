import { FC } from 'react'

import { Nav } from './Nav'

export const Layout: FC = ({ children }) => {
  return (
    <div className="flex bg-bodyImage">
      <Nav />
      {children}
    </div>
  )
}
