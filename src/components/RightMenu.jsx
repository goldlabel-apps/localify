import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Icon } from '../theme'
import { navigateTo } from '../redux/app/actions'
import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  rightMenu: {
    // borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
}))

export default function RightMenu() {

  const classes = useStyles()
  
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log ('open', open)

  return <div className={clsx( classes.rightMenu )}>
          <List>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
                navigateTo( `https://github.com/listingslab-software/localify`, `_blank`)
              }}>
              <ListItemIcon>
                <Icon icon={ `code` } color={ `inherit` } />
              </ListItemIcon>
              <ListItemText primary={`Code`} />
            </ListItem>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
                navigateTo( `https://github.com/listingslab-software/listingslab/projects/1`, `_blank` )
              }}>
              <ListItemIcon>
                <Icon icon={`hand`} color={`inherit`} />
              </ListItemIcon>
              <ListItemText primary={`Kanban Board` } />
            </ListItem>


            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
                navigateTo( `https://github.com/listingslab-software/listingslab/issues/new/choose`, `_blank` )
              }}>
              <ListItemIcon>
                <Icon icon={`add`} color={`inherit`} />
              </ListItemIcon>
              <ListItemText primary={`New Issue` } />
            </ListItem>

          </List>
        </div>
}
