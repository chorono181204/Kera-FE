import React, { useCallback, useRef, useState } from 'react'
import {
  Box, Button, InputAdornment, TextField
} from '@mui/material'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Column from './Column/Column.jsx'
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import SearchIcon from '@mui/icons-material/Search.js'
import CloseIcon from '@mui/icons-material/Close.js'
import { toast } from 'react-toastify'

const ListColumns = ({ columns, createColumn, boardId ,createCard }) => {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const [columnTitleValue, setColumnTitleValue]=useState('')
  const toggleOpenNewColumnForm = () => {
    setOpenNewColumnForm(!openNewColumnForm)
    setColumnTitleValue('')
  }
  const addNewColumn= () => {
    if (!columnTitleValue) {
      toast.warn('Please enter a column title')
    }
    const data={
      title:columnTitleValue,
      boardId:boardId
    }
    createColumn(data)
    setOpenNewColumnForm(!openNewColumnForm)
    setColumnTitleValue('')
  }
  return (
    <SortableContext items={columns?.map(column => column.id)} strategy={horizontalListSortingStrategy} >
      <Box sx={{ display: 'flex',
        paddingLeft:'15px',
        paddingTop:'20px',
        paddingBottom:'10px',
        gap:2,
        overflowX: 'auto',
        overflowY: 'hidden',
        height: '100%'
      }}>
        {columns?.map((column, index) => (<Column key={column.id} column={column} index={index} createCard={createCard} />))}
        {!openNewColumnForm ?
          <Button sx={{ color:'text.primary', width:'300px', display:'flex', backgroundColor: 'background.default', height:'50px', minWidth:'300px' }} startIcon={<NoteAddIcon/>} onClick={toggleOpenNewColumnForm}>
                  Add new column
          </Button>
          :<Box sx={{ minWidth:'300px', width:'250px', gap:1, p:1, borderRadius:'6px', height:'fit-content', minHeight:'50px', backgroundColor: 'background.default', display:'flex', flexDirection:'column', paddingX:'16px' }}>
            <TextField id="outlined-column-title"
              placeholder="Enter column title..."
              autoFocus={true}
              type="text" size={'small'}
              variant="outlined"
              value={columnTitleValue}
              onChange={(e) => setColumnTitleValue(e.target.value)}
              InputProps={{ startAdornment:(
                <InputAdornment position="start">

                </InputAdornment>
              ),
              endAdornment:(
                <InputAdornment position="end">
                  <CloseIcon sx={{ color: 'text.primary', fontSize:'18px', cursor:'pointer' }}
                    onClick={() => setColumnTitleValue('')} />
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
              <Button variant='contained' onClick={addNewColumn}>Add column</Button>
              <Button sx={{ width:'36.5px', height:'36.5px', padding:'0px !important' }} onClick={toggleOpenNewColumnForm}>
                <CloseIcon sx={{ color: 'text.primary', fontSize:'25px', cursor:'pointer', padding:0 }}
                />
              </Button>
            </Box>
          </Box>
        }

      </Box>
    </SortableContext>
  )
}
export default ListColumns
