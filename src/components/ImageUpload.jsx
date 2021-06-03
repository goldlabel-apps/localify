import React from 'react'
import clsx from 'clsx'
import ImageUploading from 'react-images-uploading'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    // Button,
    Typography,
    Grid,
} from '@material-ui/core/'
// import { 
//   goTo,
// } from '../redux/app/actions'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  home: {
    color: theme.palette.primary.main,
  },
  lighter:{
    // fontWeight: 'lighter',
  },
  padded:{
    padding: theme.spacing(),
  }
}))

export default function ImageUpload() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    helpOn,
  } = appSlice

  const [images, setImages] = React.useState([])
  const maxNumber = 10

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return <div className={ clsx( classes.home ) }>
              

              <Grid container>

                <Grid item xs={ 12 } >
                  <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
                </Grid>

                { helpOn ? <Typography>
                            This is the help text
                          </Typography> : null }

              </Grid>
          </div>
}
