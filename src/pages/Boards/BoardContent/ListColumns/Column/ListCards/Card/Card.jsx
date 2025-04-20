import React from 'react'
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group.js'
import CommentIcon from '@mui/icons-material/Comment.js'
import AttachmentIcon from '@mui/icons-material/Attachment.js'
import { Card as MuiCard } from '@mui/material'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
const Card = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging }=useSortable(
    {
      id:card.id,
      data:{ ...card }
    }
  )
  const dndKitCardStyles = {
    transform:CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined
  }
  const shouldShowCardActions = !!card?.memberIds?. length || !!card?.comments?.length || !!card?.attachments?.length
  return (
    <MuiCard
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer',
        p:1.5,
        overflow:'unset',
        opacity: card?.FE_PlaceholderCard ? '0' : '1',
        minWidth: card.FE_PlaceholderCard ? '280px' : 'unset',
        pointerEvents: card.FE_PlaceholderCard ? 'none' : 'unset',
        position: card.FE_PlaceholderCard ? 'fixed' : 'unset'
      }}>
      {card?.cover&&(<CardMedia sx={{ height: 200, borderRadius:'4px' }} image={card.cover}/>)}
      <CardContent sx={{ p:'10px !important' }} >
        <Typography >
          {card.title}
        </Typography>
      </CardContent>
      {shouldShowCardActions && (
        <CardActions sx={{ p:' 0 4px 8px 4px' }} >
          {!!card?.memberIds?.length&&(<Button sx={{ color:'text.primary' }} size='small' startIcon={<GroupIcon/>}>{card?.memberIds?.length}</Button>)}
          {!!card?.comments?.length&&(<Button sx={{ color:'text.primary' }} size='small' startIcon={<CommentIcon/>}>{card?.comments?.length}</Button>)}
          {!!card?.attachments?.length&&(<Button sx={{ color:'text.primary' }} size='small' startIcon={<AttachmentIcon/>}>{card?.attachments?.length}</Button>)}
        </CardActions>
      )}

    </MuiCard>
  )
}
export default Card
