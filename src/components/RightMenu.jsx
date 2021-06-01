import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Icon } from '../theme'
import { 
  navigateTo,
  goTo,
} from '../redux/app/actions'
import {
    makeStyles,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
import { 
  Collapsing,
} from './'

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
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
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
                goTo( `/`, `@localify` )
              }}>
              <ListItemIcon>
                <Icon icon={ `home` } color={ `primary` } />
              </ListItemIcon>
              <ListItemText primary={`Home`} />
            </ListItem>

          </List>


          <Collapsing options={{
            icon: `github`,
            iconColor: primaryColor,
            title: `Open Source`,
          }}>
            
            <List>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
                navigateTo( `https://github.com/listingslab-software/listingslab/issues/new/choose`, `_blank` )
              }}>
              <ListItemIcon>
                <Icon icon={`bug`} color={`primary`} />
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
                <Icon icon={`agile`} color={`primary`} />
              </ListItemIcon>
              <ListItemText primary={`Kanban Board` } />
            </ListItem>

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
            

          </List>
          </Collapsing>
          
        </div>
}
