import React from 'react'
import { useSelector } from 'react-redux'
import { navigateTo } from '../redux/app/actions'
import {
    withStyles,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'
import { DarkmodeSwitch } from './'

const StyledMenu = withStyles({
  paper: {
    // border: '1px solid #d3d4d5',
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
       background: 'none',
      // backgroundColor: theme.palette.secondary.main,
      // backgroundColor: 'rgba(0, 0, 0, 0.1)',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.primary,
      },
    },
    '&:focus': {
      background: 'none',
      // backgroundColor: theme.palette.common.white,
      // backgroundColor: 'rgba(0, 0, 0, 0.25)',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        // color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function ThumbMenu() {
  
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const theme = useTheme()
  

  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice

  let menuIconColor = `primary`
  let hexColor = theme.palette.primary.main

  if ( darkMode )  {
    hexColor = theme.palette.secondary.main
    menuIconColor = `secondary`
  }

  const handleClick = ( e ) => {
    setAnchorEl( e.currentTarget )
  }

  const handleClose = () => {
    setAnchorEl( null )
  }

  return <React.Fragment>
            
            <DarkmodeSwitch />
            
            <IconButton
              aria-controls={`thumb-menu`}
              aria-haspopup="true"
              onClick={ handleClick }>
              <Icon icon={ `menu` } color={ menuIconColor } />
            </IconButton>


        
        <StyledMenu 
          style={{
            zIndex: 12345689,
          }}
          id={ `thumb-menu` }
          anchorEl={ anchorEl }
          keepMounted
          open={ Boolean(anchorEl) }
          onClose={ handleClose }>



          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `home` } color={ menuIconColor } />
            </ListItemIcon>
            <ListItemText primary={`Home` } />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://listingslab.com/localify`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `listingslab` } color={ hexColor } />
            </ListItemIcon>
            <ListItemText primary={`by listingslab` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://www.mapbox.com`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `map` } color={ menuIconColor } />
            </ListItemIcon>
            <ListItemText primary={`mapbox` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://ipgeolocation.io`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `locale` } color={ menuIconColor } />
            </ListItemIcon>
            <ListItemText primary={`ipgeolocation` } />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/localify`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `github` } color={ hexColor } />
            </ListItemIcon>
            <ListItemText primary={`GitHub repo` } />
          </StyledMenuItem>     
          
        </StyledMenu>

    </React.Fragment>
}
