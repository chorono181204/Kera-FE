import React, { useCallback, useEffect, useRef } from 'react'
import {
  Box

} from '@mui/material'

import ListColumns from './ListColumns/ListColumns.jsx'
import { mapOrder } from '../../../utils/sorts.js'
import {
  closestCorners,
  DndContext,
  DragOverlay, getFirstCollision,

  pointerWithin,

  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column.jsx'
import Card from './ListColumns/Column/ListCards/Card/Card.jsx'
import { cloneDeep, isEmpty } from 'lodash'
import { generatePlaceHolderCard } from '../../../utils/formatter.js'
import { moveCardInBoardAPI, moveCardInColumnAPI, moveColumnInBoardAPI } from '../../../apis/index.js'
import { MouseSensor, TouchSensor } from '../../../customLibraries/dndKitSensors.js'

const ACTIVE_DRAG_ITEM_TYPE={
  COLUMN:'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD:'ACTIVE_DRAG_ITEM_TYPE_CARD'
}
const BoardContent = ({ board,createColumn,createCard }) => {
  //const pointerSensor=useSensor(PointerSensor, { activationConstraint:{ distance:10 } })
  const mouseSensor=useSensor(MouseSensor, { activationConstraint:{ distance:10 } })
  const touchSensor=useSensor(TouchSensor, { activationConstraint:{ delay:250, tolerance:5 } })
  //const sensors=useSensors(pointerSensor)
  const sensors=useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = React.useState([])
  const [activeDragItemId, setActiveDragItemId] = React.useState(null)
  const [activeDragItemType, setActiveDragItemType] = React.useState(null)
  const [activeDragItemData, setActiveDragItemData] = React.useState(null)
  const [oldColumnDraggingCard, setOldColumnDraggingCard] = React.useState(null)
  const lastOverId = useRef(null)
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns).map(column => {
      if (!column.cards || isEmpty(column.cards)) {
        return {
          ...column,
          cards: [generatePlaceHolderCard(column)]
        };
      }
      return column;
    }));
  }, [board]);

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column.cards.map(card => card.id)?.includes(cardId))
  }
  const moveCardBetweenDifferentColumn=(overColumn, overCardId, active, over, activeColumn, activeDraggingCardId, activeDraggingCardData) => {
    let oldColumn
    let newColumn
    setOrderedColumns(prevColumns => {
      const overCardIndex=overColumn?.cards?.findIndex(card => card.id===overCardId)
      let newCardIndex
      const isBelowOverItem = active. rect.current.translated &&
              active.rect.current.translated.top > over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier: overColumn?.cards?.length + 1
      const nextColumns=cloneDeep(prevColumns)
      const nextActiveColumn=nextColumns.find(column => column.id===activeColumn.id)
      const nextOverColumn=nextColumns.find(column => column.id===overColumn.id)

      if (nextActiveColumn) {
        nextActiveColumn.cards=nextActiveColumn.cards.filter(card => card.id!==activeDraggingCardId)
        if (isEmpty(nextActiveColumn.cards)) {
          nextActiveColumn.cards=[generatePlaceHolderCard(nextActiveColumn)]
        }
        //nextActiveColumn.cardOrderIds=nextActiveColumn.cards.map(card => card.id)
        for (let i=0;i<nextActiveColumn.cards.length;i++) {
          nextActiveColumn.cards[i].orderIndex=i
        }
      }
      oldColumn = activeColumn

      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(card => card.id !== activeDraggingCardId)
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, { ...activeDraggingCardData })
        nextOverColumn.cards = nextOverColumn.cards.filter(card => !card.FE_PlaceholderCard)
        for (let i = 0; i < nextOverColumn.cards.length; i++) {
          nextOverColumn.cards[i].orderIndex = i
        }
      }
      newColumn = nextOverColumn
      return nextColumns
    }
    )
    return { oldColumn, newColumn }
  }
  const handleDragStart=(event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.cards? ACTIVE_DRAG_ITEM_TYPE.COLUMN:ACTIVE_DRAG_ITEM_TYPE.CARD)
    setActiveDragItemData(event?.active?.data?.current)
    if (!event?.active?.data?.current?.cards) {
      setOldColumnDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }
  const handleDragOver=(event) => {
    if (activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    const { active, over }=event
    if (!over||!active) return
    const { id:activeDraggingCardId, data:{ current:activeDraggingCardData } } = active
    const { id:overCardId }=over
    const activeColumn=findColumnByCardId(activeDraggingCardId)
    const overColumn=findColumnByCardId(overCardId)
    if (!activeColumn||!overColumn) return
    if (activeColumn.id!==overColumn.id) {
      moveCardBetweenDifferentColumn(overColumn, overCardId, active, over, activeColumn, activeDraggingCardId, activeDraggingCardData)
    }

  }

  const handleDragEnd=(event) => {
    const { active, over }=event
    if (!over||!active) return
    if (activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id:activeDraggingCardId, data:{ current:activeDraggingCardData } } = active
      const { id:overCardId }=over
      const activeColumn=findColumnByCardId(activeDraggingCardId)
      const overColumn=findColumnByCardId(overCardId)
      if (!activeColumn||!overColumn) return
      if (oldColumnDraggingCard.id!==overColumn.id) {


        moveCardBetweenDifferentColumn(overColumn, overCardId, active, over, activeColumn, activeDraggingCardId, activeDraggingCardData)

        const cardId=activeDraggingCardId
        const newColumn = findColumnByCardId(cardId)
        const oldColumn = orderedColumns.find(column => column.id===oldColumnDraggingCard.id)
        const updateData={
          cardId:cardId,
          oldColumnId:oldColumn?.id,
          newColumnId:newColumn?.id,
          oldColumnCardIds:oldColumn?.cards?.filter(card => !card.FE_PlaceholderCard).map(card => card.id),
          newColumnCardIds:newColumn?.cards?.filter(card => !card.FE_PlaceholderCard).map(card => card.id)
        }
        moveCardInBoardAPI(updateData)
      } else {
        const oldCardIndex = oldColumnDraggingCard?.cards?.findIndex(col => col.id === activeDragItemId)
        const newCardIndex = overColumn?.cards?.findIndex(col => col.id === overCardId)
        const dndOrderedCards = arrayMove(oldColumnDraggingCard?.cards, oldCardIndex, newCardIndex)
        if (oldCardIndex!==newCardIndex) {
          const updateData={
            columnId:findColumnByCardId(activeDragItemId).id,
            cardIds:dndOrderedCards.filter(card => !card.FE_PlaceholderCard).map(card => card.id),
          }
          moveCardInColumnAPI(updateData)
          setOrderedColumns(prevColumns => {
            const nextColumns = cloneDeep(prevColumns)
            const targetColumn = nextColumns.find(column => column.id === overColumn.id)
            for (let i = 0; i < dndOrderedCards.length; i++) {
              dndOrderedCards[i].orderIndex = i
            }
            targetColumn.cards = dndOrderedCards


            return nextColumns
          })
        }
      }
    }
    if (activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN&&active.id !== over.id) {
      const oldColumnIndex = orderedColumns.findIndex(col => col.id === active.id)
      const newColumnIndex = orderedColumns.findIndex(col => col.id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
      for (let i=0;i<dndOrderedColumns.length;i++) {
        dndOrderedColumns[i].orderIndex=i
      }

      const updateData={
        boardId:board?.id,
        columnIds:dndOrderedColumns.map(c => c.id)
      }
      moveColumnInBoardAPI(updateData)
      setOrderedColumns(dndOrderedColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnDraggingCard(null)
  }
  // const dropAnimation={
  //   sideEffects:defaultDropAnimationSideEffects({ styles:{ active: { opacity:'0.5' } } })
  // }
  const dropAnimationConfig = {
    keyframes: ({ transform }) => [
      { transform: `translate(${transform.initial.x}px, ${transform.initial.y}px) scale(1)` },
      { transform: `translate(${transform.final.x}px, ${transform.final.y}px) scale(0.98)` }
    ],
    duration: 250,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    sideEffects: ({ active }) => {
      active.node.style.opacity = '0.5'
      active.node.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.25s ease'
      return () => {
        active.node.style.opacity = '1'
        active.node.style.transition = ''
      }
    }
  }
  const collisionDetectionStrategy = useCallback((args) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return closestCorners({ ...args })
    }
    const pointerIntersections = pointerWithin(args)
    if (!pointerIntersections?.length) return

    let overId = getFirstCollision(pointerIntersections, 'id')
    if (overId) {
      const intersectColumn = orderedColumns.find(col => col.id === overId)
      if (intersectColumn) {
        overId = closestCorners({
          ...args,
          droppableContainers: args.droppableContainers.filter(container =>
            container.id !== overId && intersectColumn.cards.some(card => card.id === container.id)
          )
        })[0]?.id
      }
      lastOverId.current = overId
      return [{ id: overId }]
    }
    return lastOverId.current ? [{ id: lastOverId.current }] : []
  }, [activeDragItemType])
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} onDragStart={handleDragStart} onDragOver={handleDragOver} collisionDetection={collisionDetectionStrategy}>
      <Box sx={{
        width: '100%',
        height: `calc(100vh - ${(theme) => theme.customProperties.boardContentHeight})`,
        backgroundColor: 'background.paper'
      }}>

        <ListColumns columns={orderedColumns} createColumn={createColumn} createCard={createCard} boardId={board.id} />
        <DragOverlay dropAnimation={dropAnimationConfig}>
          {!activeDragItemType&&null}
          {(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN) &&<Column column={activeDragItemData}/>}
          {(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.CARD) &&<Card card={activeDragItemData}/>}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
export default BoardContent
