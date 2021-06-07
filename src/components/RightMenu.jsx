import React from 'react'
import clsx from 'clsx'
import { Icon } from '../theme'
import { 
  goTo,
  toggleRightMenuOpen,  
} from '../redux/app/actions'
import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  rightMenu: { 
  },
  rightMenuTitle:{
        padding: theme.spacing(2),
        flexGrow: 1,
  },
}))

export default function RightMenu() {

  const classes = useStyles()

  return <div className={clsx( classes.rightMenu )}>
          <List>
              <ListItem 
                button
                onClick={( e ) => {
                  e.preventDefault()
                  goTo( `/`, `Home` )
                  toggleRightMenuOpen( false )
                }}>
                <ListItemIcon>
                  <Icon icon={ `home` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`Home`} />
              </ListItem>
              <ListItem 
                button
                onClick={( e ) => {
                  e.preventDefault()
                  goTo( `/settings`, `Settings` )
                  toggleRightMenuOpen( false )
                }}>
                <ListItemIcon>
                  <Icon icon={ `settings` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`Settings`} />
              </ListItem>
            </List>
        </div>
}
