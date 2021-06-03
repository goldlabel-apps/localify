
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
                  goTo( `/`, `Dashboard` )
                  toggleRightMenuOpen( false )
                }}>
                <ListItemIcon>
                  <Icon icon={ `localify` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`Dashboard`} />
              </ListItem>

              <ListItem 
                button
                onClick={( e ) => {
                  e.preventDefault()
                  goTo( `/trips`, `Trips` )
                  toggleRightMenuOpen( false )
                }}>
                <ListItemIcon>
                  <Icon icon={ `trips` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`Trips`} />
              </ListItem>

              <ListItem 
                button
                onClick={( e ) => {
                  e.preventDefault()
                  goTo( `/trip/new`, `New Trip` )
                  toggleRightMenuOpen( false )
                }}>
                <ListItemIcon>
                  <Icon icon={ `new` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`New Trip`} />
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









/*



<ListItem 
                button
                onClick={( e ) => {
                  e.preventDefault()
                  navigateTo( `https://github.com/listingslab-software/localify`, `_blank`)
                }}>
                <ListItemIcon>
                  <Icon icon={ `code` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`Code`} />
              </ListItem>


<ListItem 
  button
  onClick={( e ) => {
    e.preventDefault()
    navigateTo( `https://github.com/listingslab-software/listingslab/issues/new/choose`, `_blank` )
  }}>
  <ListItemIcon>
    <Icon icon={`bug`} color={`secondary`} />
  </ListItemIcon>
  <ListItemText primary={`New Issue` } />
</ListItem>

              <ListItem 
                button
                onClick={( e ) => {
                  e.preventDefault()
                  navigateTo( `https://github.com/listingslab-software/listingslab/projects/1`, `_blank` )
                }}>
                <ListItemIcon>
                  <Icon icon={`agile`} color={`secondary`} />
                </ListItemIcon>
                <ListItemText primary={`Kanban Board` } />
              </ListItem>


*/