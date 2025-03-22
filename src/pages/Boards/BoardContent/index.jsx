import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AddCardIcon from '@mui/icons-material/AddCard';
import GroupIcon from '@mui/icons-material/Group';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CommentIcon from '@mui/icons-material/Comment';
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'
const BoardContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null )
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box  sx={{
      width: '100%',
      height: `calc(100vh - ${(theme) => theme.customProperties.boardContentHeight})`,
      display: 'flex',
      paddingLeft:'15px',
      paddingTop:'50px',
      paddingBottom:'25px',
      gap:2,
      overflowX: 'auto',
      overflowY: 'hidden ',
      backgroundColor: 'background.paper'
    }}>

      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
        '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' },
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            overflow:'unset',
          }}>
            <CardContent sx={{ p:'10px !important' }}>
              <Typography >
                Lizard
              </Typography>
            </CardContent>
          </Card>


        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>

      </Box>
      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
          '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' }
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>



        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>
      </Box>
      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
          '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' }
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>



        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>
      </Box>
      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
          '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' }
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>



        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>
      </Box>
      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
          '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' }
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>



        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>
      </Box>
      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
          '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' }
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>



        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>
      </Box>
      <Box sx={{
        minWidth:'300px',
        maxWidth:'300px',
        backgroundColor: 'background.default',
        borderRadius:'6px',
        maxHeight:'700px',
        height:'fit-content',
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{ cursor:'pointer'}}>Column title</Typography>
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

        <Box sx={{ display:'flex', flexDirection: 'column',p:1,marginX:1,gap:1,maxHeight:'600px',overflowX:'hidden',overflowY:'auto',
          '&::-webkit-scrollbar-thumb':{ backgroundColor:'#ced0da' },
          '&::-webkit-scrollbar-thumb:hover':{ backgroundColor:'#bfc2cf' }
        }}>
          <Card sx={{
            cursor: 'pointer',
            p:1.5,
            overflow:'unset',
          }}>
            <CardMedia
                sx={{ height: 200 , borderRadius:'4px'}}
                image="https://i.pinimg.com/736x/69/4d/a8/694da89277f29be629cdf742228591ab.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p:'10px !important' }} >
              <Typography >
                Cats
              </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop:'0px !important' }} >
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<GroupIcon/>}>20</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<CommentIcon/>}>10</Button>
              <Button sx={{ color:'text.primary'}} size='small' startIcon={<AttachmentIcon/>}>15</Button>
            </CardActions>
          </Card>



        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button sx={{ color:'text.primary',width:'100%',display:'flex',justifyContent:'start'}} startIcon={<AddCardIcon/>}>
            Add new card
          </Button>
        </Box>

      </Box>

    </Box>
  )
}
export default BoardContent
