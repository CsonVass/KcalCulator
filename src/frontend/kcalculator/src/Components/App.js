import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'

const App = () => {
  const [userId, setUserId] = useState("abc")

  return (
    <div className="App">
      <Header userId={userId}/>
      <Main userId={userId}/>
      <Footer />
    </div>
  )
}

export default App
