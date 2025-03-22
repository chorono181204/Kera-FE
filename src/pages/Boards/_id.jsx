import React from 'react'
import { Box, Container } from '@mui/material'
import ModeToggle from '../../components/ModeSelect/index.jsx'
import AppBar from '../../components/AppBar/index.jsx'
import BoardBar from './BoardBar/index.jsx'
import BoardContent from './BoardContent/index.jsx'

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'background.paper' }} >
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>

  )
}
export default Board
