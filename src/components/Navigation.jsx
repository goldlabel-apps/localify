import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core/'
import { 
  goToRoute,
} from '../redux/app/actions'
import { CollapsingMenu } from './'
import { Icon } from '../theme'


const useStyles = makeStyles((theme) => ({
  navigation: {
  },
  list:{
    width: '100%',
  },
}))

export default function Navigation() {
 
  let showJSON = false
  const classes = useStyles()
  const docsifySlice = useSelector( state => state.docsify )
  const {
    config,
  } = docsifySlice
  if ( !config ) return null
  const {
    sections,
    pages,
  } = config
  if ( !sections ) return null

  return <div className={ clsx( classes.navigation ) } >
              <Grid container>

                { pages.length ? <React.Fragment>
                  <List className={ clsx( classes.list ) }>
                  { pages.map( (item, i) => {                  
                    const {
                      name,
                      icon,
                      route,
                    } = item
                    return <ListItem 
                              button
                              key={ `section_page_${i}` }
                              onClick={ (e) => {
                                e.preventDefault()
                                goToRoute( route )
                              }}>
                              <ListItemAvatar>
                                <Icon icon={ icon } color={ `secondary` } />
                              </ListItemAvatar>
                              <ListItemText 
                                primary={ name }
                              />
                            </ListItem>
                  })}
                  </List>
                
                </React.Fragment> : null }

                { sections.map( (item, i) => {
                    const {
                      name,
                      icon,
                      defaultExpanded,
                      pages,
                      sections,
                    } = item

                    return <React.Fragment key={ `section_${i}` }>
                            <Grid item xs={ 12 }>
                              <CollapsingMenu
                                options={{
                                  defaultExpanded,
                                  title: name,
                                  icon,
                                }} >
                                { pages ? <React.Fragment>
                                  { pages.map( (item, i ) => {



                                const {
                                  name,
                                  icon,
                                  route,
                                } = item
                                return <ListItem 
                                          button
                                          key={ `section_page_${i}` }
                                          onClick={ (e) => {
                                            e.preventDefault()
                                            goToRoute( route )
                                          }}>
                                          <ListItemAvatar>
                                            <Icon icon={ icon } color={ `secondary` } />
                                          </ListItemAvatar>
                                          <ListItemText 
                                            primary={ name }
                                          />
                                        </ListItem>
                                  })}
                                </React.Fragment> : null }
                                { sections ? <React.Fragment>
                                  got sections
                                </React.Fragment> : null }
                              </CollapsingMenu>
                            </Grid>
                          </React.Fragment>
                })}
                { showJSON ? <pre>
                  { JSON.stringify( sections, null, 2 ) }
                </pre> : null }
              </Grid>
          </div>
}
