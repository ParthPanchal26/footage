import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/footage/' exact element={<Feed />} />
        <Route path='/footage/video/:id' exact element={<VideoDetail />} />
        <Route path='/footage/channel/:id' element={<ChannelDetail />} />
        <Route path='/footage/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)


export default App