import React from 'react'
import Header from '../../Header'
import Sidebar from '../../Sidebar'

type Props = {
  children: any
}

const DefaultLayout = (props: Props) => {
  const {children} = props
  return (
    <>
      <Header/>
      <div className="container">
        <Sidebar/>
        <div className="content">
          {children}
        </div>
      </div>
    </>

  )
}

export default DefaultLayout