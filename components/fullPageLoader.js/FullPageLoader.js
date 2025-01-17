import React from 'react'

const FullPageLoader = () => {
  return (
    <> 
      <div className="fullpage-loader-holder">
        <div className="fullpage-loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </>
  )
}

export default FullPageLoader