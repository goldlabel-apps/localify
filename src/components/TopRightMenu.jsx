import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    withStyles,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { 
  DarkmodeSwitch,
  AuthForm,
} from './'
import { navigateTo } from '../redux/app/actions'
import { signout } from '../redux/auth/actions'

const useStyles = makeStyles((theme) => ({
  topRightMenu: {
  },
  title:{
    margin: theme.spacing(),
  }
}))

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
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.primary,
      },
    },
    '&:focus': {
      background: 'none',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.secondary,
      },
    },
  },
}))(MenuItem)

export default function TopRightMenu() {
  
  const classes = useStyles()
  const theme = useTheme()
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const [showSignin, setShowSignin] = React.useState( false ) 
  const appSlice = useSelector(state => state.app)
  const authSlice = useSelector(state => state.auth)

  
  const {
    authed,
  } = authSlice

  // console.log ( 'authed', authed)

  const {
    darkMode,
  } = appSlice
  let hexColor = theme.palette.primary.main
  let menuIconColor = `primary`
  if ( darkMode )  {
    hexColor = theme.palette.secondary.main
    menuIconColor = `secondary`
  }
  const handleOpen = ( e ) => {
    setAnchorEl( e.currentTarget )
  }

  const handleClose = () => {
    setAnchorEl( null )
  }

  return <div className={ clsx( classes.topRightMenu )}>

            { showSignin ? <AuthForm setShowSignin={ setShowSignin } /> : null }

            <IconButton
              checked={ darkMode }
              color={ menuIconColor }
              onClick={ handleOpen } 
            >
                <Icon icon={ `menu`} />
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
                        <ListItemText primary={`listingslab` } />
                      </StyledMenuItem>

                      <StyledMenuItem onClick={(e) => {
                        e.preventDefault()
                        navigateTo( `https://github.com/listingslab-software/localify`, `_blank` )
                        handleClose()
                      }}>
                        <ListItemIcon>
                          <Icon icon={ `github` } color={ hexColor } />
                        </ListItemIcon>
                        <ListItemText primary={`GitHub` } />
                      </StyledMenuItem>   

                      <StyledMenuItem onClick={(e) => {
                        e.preventDefault()
                        // navigateTo( `https://github.com/listingslab-software/localify`, `_blank` )
                        // handleClose()
                      }}>
                        <ListItemIcon>
                          <DarkmodeSwitch />
                        </ListItemIcon>
                        <ListItemText primary={ darkMode ? `Light Mode` : `Dark Mode` } />
                      </StyledMenuItem>    

                      <StyledMenuItem onClick={(e) => {
                        e.preventDefault()
                        navigateTo( `https://www.mapbox.com`, `_blank` )
                        handleClose()
                      }}>
                        <ListItemIcon>
                          <Icon icon={ `map` } color={ menuIconColor } />
                        </ListItemIcon>
                        <ListItemText primary={`Mapbox` } />
                      </StyledMenuItem>

                      { !authed ? <StyledMenuItem onClick={(e) => {
                                        e.preventDefault()
                                        setShowSignin( true )
                                        handleClose()
                                      }}>
                                        <ListItemIcon>
                                          <Icon icon={ `login` } color={ menuIconColor } />
                                        </ListItemIcon>
                                        <ListItemText primary={`Login` } />
                                      </StyledMenuItem> 
                                      : 
                                      <StyledMenuItem onClick={(e) => {
                                        e.preventDefault()
                                        if (window.confirm( 'Signout?')) signout()
                                      }}>
                                        <ListItemIcon>
                                          <Icon icon={ `logout` } color={ menuIconColor } />
                                        </ListItemIcon>
                                        <ListItemText primary={`Logout` } />
                                      </StyledMenuItem> }

                    
          
        </StyledMenu>



          </div>
}


/*



                      <StyledMenuItem onClick={(e) => {
                        e.preventDefault()
                        navigateTo( `https://ipgeolocation.io`, `_blank` )
                        handleClose()
                      }}>
                        <ListItemIcon>
                          <Icon icon={ `locale` } color={ menuIconColor } />
                        </ListItemIcon>
                        <ListItemText primary={`Ipgeolocation` } />
                      </StyledMenuItem>

*/