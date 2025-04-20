import React, { useState } from 'react'
import {
  Box,
  Button, InputAdornment,
  Menu,
  MenuItem, TextField,
  Tooltip,
  Typography
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AddCardIcon from '@mui/icons-material/AddCard'
import ListCards from './ListCards/ListCards.jsx'
import { mapOrder } from '../../../../../utils/sorts.js'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import CloseIcon from '@mui/icons-material/Close'
import {toast} from 'react-toastify';




const Column = ({ column , createCard }) => {
  const orderedCards=mapOrder(column?.cards)
  const { attributes, listeners, setNodeRef, transform, transition, isDragging }=useSortable(
    {
      id:column.id,
      data:{ ...column }
    }
  )
  const dndKitColumnStyles = {
    transform:CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    height: 'calc(100vh - 166px)'


  }

  const [anchorEl, setAnchorEl] = React.useState(null )
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const [cardTitleValue, setCardTitleValue]=useState('')
  const toggleOpenNewCardForm = () => {
    setOpenNewCardForm(!openNewCardForm)
    setCardTitleValue('')
  }
  const addNewColumn= () => {
    if (!cardTitleValue) {
      toast.warn('Please enter a card title')

    }
    const data={
      columnId:column.id,
      title:cardTitleValue,
    }
    createCard(data)
    setOpenNewCardForm(!openNewCardForm)
    setCardTitleValue('')
  }
  const COLUMN_HEADER_HEIGHT = '50px'
  const COLUMN_FOOTER_HEIGHT = !openNewCardForm? '50px':'100px'
  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes} >
      <Box
        {...listeners}
        sx={{
          minWidth:'300px',
          maxWidth:'300px',
          backgroundColor: 'background.default',
          borderRadius:'6px',
          height:'fit-content',
          maxHeight: (theme) => `calc(${theme.customProperties.boardContentHeight} - ${theme.spacing(6)})`
        }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer' }}>{column?.title}</Typography>
          <Box>
            <Tooltip title='More options'>
              <Button
                id="basic-button-workspaces"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ filter: 'brightness(100%)', // Độ sáng ban đầu
                  display: 'flex', justifyContent: 'center', alignItems: 'center', color:'text.primary' }}
              >
                <MoreHorizIcon/>
              </Button>
            </Tooltip>
            <Menu
              id="basic-menu-workspaces"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-workspaces'
              }}
              sx={{ width: '100%' }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
        <ListCards cards={orderedCards} openNewCardForm={openNewCardForm} createCard={createCard} columnId={column.id} />

        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',

        }}>
          {!openNewCardForm?

            <Button sx={{ color:'text.primary', width:'100%', display:'flex', justifyContent:'start' }} startIcon={<AddCardIcon/>} onClick={toggleOpenNewCardForm}>
                Add new card
            </Button>

            :
            <Box sx={{ width:'100%', gap:1, p:1, display:'flex', flexDirection:'column',paddingX:'0px',paddingBottom:'16px',paddingTop:'16px' }}>
              <TextField id="outlined-column-title"
                placeholder="Enter card title..."
                autoFocus={true}
                type="text" size={'small'}
                variant="outlined"
                value={cardTitleValue}
                onChange={(e) => setCardTitleValue(e.target.value)}
                InputProps={{ startAdornment:(
                  <InputAdornment position="start">

                  </InputAdornment>
                ),
                endAdornment:(
                  <InputAdornment position="end">
                    <CloseIcon sx={{ color: 'text.primary', fontSize:'18px', cursor:'pointer' }}
                      onClick={() => setCardTitleValue('')} />
                  </InputAdornment>
                )
                }}

                sx={{ width:'268px'
                  , '& label': { color:'text.primary' }
                  , '& input': { color:'text.primary' }
                  , '& label.Mui-focused': { color:'text.primary' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'text.primary' // Border mặc định (xám nhạt)
                    },
                    '&:hover fieldset': {
                      borderColor: 'text.primary' // Border khi hover (xanh của Jira)
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'text.primary' // Border khi focus (xanh của Jira)
                    }
                  }
                }}/>
              <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', gap:1 }}>
                <Button variant='contained' onClick={addNewColumn}>Add card</Button>
                <Button sx={{ width:'36.5px', height:'36.5px', padding:'0px !important' }} onClick={toggleOpenNewCardForm}>
                  <CloseIcon sx={{ color: 'text.primary', fontSize:'25px', cursor:'pointer', padding:0 }}
                  />
                </Button>
              </Box>
            </Box>
          }
        </Box>
      </Box>
    </div>
  )
}
export default Column
