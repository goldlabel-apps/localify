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

export default function WordpressMenu() {
  
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice
  const { 
    postData 
  } = pwaData
  let postId = null
  if ( postData ){
    const { ID } = postData
    postId = ID
  }
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
          right: theme.spacing( 1 ),
          top: theme.spacing( 1 ),
          background: 'white',
        }}
        aria-controls={`wordpress-menu`}
        aria-haspopup="true"
        onClick={ handleClick }>
        <Icon icon={ `wordpress` } color={ primaryColor } />
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
            WordPress
          </Typography>


          { postId ? <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/post.php?post=${postId}&action=edit`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `edit` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Edit` } />
          </StyledMenuItem> : null }



          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            // console.log ( 'Dashboard') 
            navigateTo( `/wp-admin/`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `dashboard` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Dashboard` } />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/admin.php?page=listingslab%2Fphp%2FListingslab.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `pwa` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`@listingslab` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/plugins.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `plugins` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Plugins` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dlistingslab%252Fphp%252FListingslab.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `theme` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Theme` } />
          </StyledMenuItem>



          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/post-new.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `add` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`New Post` } />
          </StyledMenuItem>


        </StyledMenu>
    </div>
  )
}

/*
*/