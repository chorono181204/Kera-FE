
import ModeToggle from '../ModeSelect/index.jsx'
import { Badge, Box, Button, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import WorkSpaces from './Menus/WorkSpaces.jsx'
import Recent from './Menus/Recent.jsx'
import { HelpOutline, HelpOutlined, LibraryAdd, NotificationsNone, Star } from '@mui/icons-material'
import Templates from './Menus/Templates.jsx'
import Stared from './Menus/Stared.jsx'
import Profiles from './Menus/Profiles.jsx'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
const AppBar = () => {
  const [searchValue, setSearchValue]=useState('')
  return (
    <Box sx={{ backgroundColor: 'background.default',
      height: (theme) => theme.customProperties.appBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingX:'20px',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <Button sx={{ display:'flex', alignItems:'center', gap:'5px', justifyContent:'center', padding:'0px !important', color:'text.primary' }}>
          <DashboardIcon/>
          <Typography variant="span" sx={{ fontSize:'18px', fontWeight:'bold', paddingTop:'2px' }}>Kera</Typography>
        </Button>
        <WorkSpaces/>
        <Recent/>
        <Stared/>
        <Templates/>
        <Button variant="contained" startIcon={<LibraryAdd/>}>Create</Button>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <TextField id="outlined-search"
          label="Search....."
          type="text" size={'small'}
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{ startAdornment:(
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'text.primary' }}  />
            </InputAdornment>
          ),
          endAdornment:(
            <CloseIcon sx={{ color: 'text.primary', fontSize:'18px', cursor:'pointer' }}
              onClick={() => setSearchValue('')} />
          )
          }}

          sx={{ width:'200px'
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
        <ModeToggle/>
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot">
            <NotificationsNone />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}
export default AppBar
