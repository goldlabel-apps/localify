import React from 'react'
import clsx from 'clsx'
import { Icon } from '../theme'
import { 
  goTo,
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
                  goTo( `/`, `@localify` )
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
                  goTo( `/trip/new`, `New Trip` )
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
                  goTo( `/help`, `Help` )
                }}>
                <ListItemIcon>
                  <Icon icon={ `help` } color={ `secondary` } />
                </ListItemIcon>
                <ListItemText primary={`Help`} />
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