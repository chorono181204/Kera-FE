import React from 'react'
import { AvatarGroup, Box, Button, Chip } from '@mui/material'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import PublicIcon from '@mui/icons-material/Public'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const BoardBar = () => {
  return (
    <Box sx={{ backgroundColor:'background.paper' ,
      width: '100%',
      height: (theme) => theme.customProperties.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      overflowX: 'auto',
        borderBottom: (theme) => `1px solid ${theme.palette.background.default}`,
      justifyContent: 'space-between',
      paddingX:'20px'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:'15px' }}>
        <Chip icon={<SpaceDashboardIcon />}
          label='My board'
          clickable sx ={{ color : 'text.primary',
            backgroundColor:'background.paper',
            borderRadius:'4px',
            paddingX:'0px',
            '& .MuiSvgIcon-root': {
              color:'text.primary'
            }
          }} />

        <Chip icon={<PublicIcon/>}
          label='Public'
          clickable sx ={{ color : 'text.primary',
            backgroundColor:'background.paper',
            borderRadius:'4px',
            paddingX:'0px',
            '& .MuiSvgIcon-root': {
              color:'text.primary'
            }
          }} />

        <Chip icon={<AddToDriveIcon />}
          label='Add to drive'
          clickable sx ={{ color : 'text.primary',
            backgroundColor:'background.paper',
            borderRadius:'4px',
            paddingX:'0px',
            '& .MuiSvgIcon-root': {
              color:'text.primary'
            }
          }} />

        <Chip icon={<BoltIcon />}
          label='Automation'
          clickable sx ={{ color : 'text.primary',
            backgroundColor:'background.paper',
            borderRadius:'4px',
            paddingX:'0px',
            '& .MuiSvgIcon-root': {
              color:'text.primary'
            }
          }} />
        <Chip icon={<FilterListIcon />}
          label='Filter'
          clickable sx ={{ color : 'text.primary',
            backgroundColor:'background.paper',
            borderRadius:'4px',
            paddingX:'0px',
            '& .MuiSvgIcon-root': {
              color:'text.primary'
            }
          }} />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:'15px' }}>
          <Button variant="contained" startIcon={<PersonAddIcon/>} >Invite </Button>
        <AvatarGroup max={6} sx={{  gap:'10px',  '& .MuiAvatar-root':
                { width : 30, height:30 , border:'none','&:first-of-style':{bgcolor:'text.primary'} } }  }>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

      </Box>
    </Box>

  )
}
export default BoardBar
