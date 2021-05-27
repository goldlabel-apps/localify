import React from 'react'
// import { useSelector } from 'react-redux'
import { navigateTo } from '../redux/app/actions'
import {
    withStyles,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(( props ) => (
  <Menu
    elevation={0}
    getContentAnchorEl={ null }
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: { 
    paddingRight: 50,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function GithubMenu() {
  
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main

  const handleClick = ( e ) => {
    setAnchorEl( e.currentTarget )
  }

  const handleClose = () => {
    setAnchorEl( null )
  }

  return (
    <div>
      
      <IconButton
        style={{
          zIndex: 123456,
          position: 'absolute',
          right: theme.spacing( 7 ),
          top: theme.spacing( 1 ),
          background: 'white',
        }}
        aria-controls={`wordpress-menu`}
        aria-haspopup="true"
        onClick={ handleClick }>
        <Icon icon={ `github` } color={ primaryColor } />
      </IconButton>
        
        <StyledMenu 
          style={{
            zIndex: 1234568,
          }}
          id={ `wordpress-menu` }
          anchorEl={ anchorEl }
          keepMounted
          open={ Boolean(anchorEl) }
          onClose={ handleClose }>

          <Typography 
            variant={ `button`} 
            style={{
            padding: 16,
            marginBottom: 16,
          }}>
            Open Source
          </Typography>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/listingslab`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `code` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`GitHub` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/listingslab/projects/1`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `agile` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`Kanban Board` } />
          </StyledMenuItem> 

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/listingslab/issues/new/choose`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `add` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`New Issue` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/listingslab/raw/develop/listingslab.zip`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `download` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`Download` } />
          </StyledMenuItem>


        </StyledMenu>
    </div>
  )
}

/*
*/