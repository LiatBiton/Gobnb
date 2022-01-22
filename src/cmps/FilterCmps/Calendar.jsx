
import React, { Component, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';

import Box from '@mui/material/Box';




export function Calendar({onSetDate}) {

    const [value, setValue] = useState([null, null]);
    console.log(value)

    useEffect(() => {
        onSetDate(value); // using camelCase for variable name is recommended.
      }, [value]);




return (

    <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
            console.log('new value ', newValue)
            setValue(newValue)

        }}
        renderInput={(startProps, endProps) => (

            <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
            </React.Fragment>
        )}
    />
)



}