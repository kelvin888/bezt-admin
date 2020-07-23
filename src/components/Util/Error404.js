import React from 'react'

const Error404 = () => {
    return (
        <div style={{"color":"#555","width":"300px","height":"auto","margin":"40px auto", "textAlign":"center"}}>
          <h1 style={{"fontSize":"21px", "margin":"0", "color":"#DB3824"}}>ERROR</h1>
          <h1 style={{"fontSize":"151px","margin":"0"}}>404</h1>
          <p style={{"margin":"10px 0px 50px"}}>Page you are looking for doesn't exist</p>
          <a href="/" className="home-a-404">Back to Home</a>
        </div>
    )
}

export default Error404
