import React from 'react'

function Props({ 
  renderButton, 
  renderComponentFromOutside, 
  renderComponentByDirect: RenderComponentByDirect, 
  content,
  children,
  ...rest 
}) {
  console.log('Props: ', rest)
  return (
    <div>
      Render button: {renderButton} <br />
      renderComponentFromOutside: {renderComponentFromOutside} <br />
      renderComponentByDirect: {<RenderComponentByDirect />}

      {content}

      <h5>Children props</h5>
      {children}
    </div>
  )
}

export default Props

// rest operator