import React from 'react'
import { Routes, Route } from 'react-router-dom'

import TypographyPage from './pages/TypographyPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/typography" element={<TypographyPage />} />
    </Routes>
  )
}

export default App
