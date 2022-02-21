import React from 'react'
import { Rating } from '@mui/material';

const Ratings = ( props ) => {
    const { ratingsValue, handleRatings, max } = props
    return (
        <div>
            <Rating
            name="simple-controlled"
            value={ ratingsValue }
            max={ max }
            onChange={(event, newValue) => {
                handleRatings(newValue);
        }}
      />
        </div>
    )
}

export default Ratings
