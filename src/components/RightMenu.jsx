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
    Divider,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  rightMenu: {
    // 
  },
  rightMenuTitle:{
        padding: theme.spacing(2),
        flexGrow: 1,
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

          <Typography variant={ `button` } className={clsx( classes.rightMenuTitle )} >
            Navigation
          </Typography>

          <List>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
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
              }}>
              <ListItemIcon>
                <Icon icon={ `user` } color={ `secondary` } />
              </ListItemIcon>
              <ListItemText primary={`User`} />
            </ListItem>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
              }}>
              <ListItemIcon>
                <Icon icon={ `map` } color={ `secondary` } />
              </ListItemIcon>
              <ListItemText primary={`Map`} />
            </ListItem>

          </List>

          <Typography variant={ `button` } className={clsx( classes.rightMenuTitle )} >
            Open Source
          </Typography>

          <List>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
                navigateTo( `https://github.com/listingslab-software/localify`, `_blank`)
              }}>
              <ListItemIcon>
                <Icon icon={ `code` } color={ `primary` } />
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
                <Icon icon={`hand`} color={`primary`} />
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
                <Icon icon={`add`} color={`primary`} />
              </ListItemIcon>
              <ListItemText primary={`New Issue` } />
            </ListItem>

          </List>
          <Divider />
        </div>
}
