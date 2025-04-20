import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import ModeToggle from '../../components/ModeSelect/index.jsx'
import AppBar from '../../components/AppBar/index.jsx'
import BoardBar from './BoardBar/index.jsx'
import BoardContent from './BoardContent/index.jsx'
import { mockData } from '../../apis/mock-data.js'
import { useDispatch, useSelector } from 'react-redux'

import PageLoadingSpinner from '../../components/Loading/PageLoadingSpinner.jsx'
import { cloneDeep } from 'lodash'
import { createCardAPI, createColumnAPI, fetchBoardDetailsAPI, moveCardInColumnAPI } from '../../apis/index.js'
import { useParams } from 'react-router-dom'

const Board = () => {


  const [board, setBoard] = useState(null)
  const { boardId }=useParams()
  useEffect(() => {
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [boardId])
  const createColumn=(data) => {
    createColumnAPI(data).then(column => {
      let newBoard={ ...board }
      newBoard.columns.push(column)
      setBoard(newBoard)
    })
  }
  const createCard=(data) => {
    createCardAPI(data).then(card => {
      let newBoard={ ...board }
      let newColumn=newBoard.columns.find(column => column.id===data.columnId)
      newColumn.cards.push(card)
      console.log(newColumn)
      console.log(newBoard)


      setBoard(newBoard)
    })
  }
  if (!board) {
    return <PageLoadingSpinner caption='Loading Board...' />
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'background.paper', overflowY:'hidden !important' }} >
      <AppBar />
      <BoardBar board = {board} />
      <BoardContent board = {board} createColumn = {createColumn} createCard = {createCard} />
    </Container>

  )
}
export default Board
