import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="main" />} />
        <Route path="main" element={<div>main</div>} />
        <Route path="id" element={<div>id</div>} />
        <Route path="*" element={<Navigate to="main" />} />
      </Routes>
    </div>
  )
}
