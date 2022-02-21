import React from 'react'
import Switch from '@mui/material/Switch';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { colors } from '../../../configs';

export default function SwitchButton(props) {
    const { checked, onClick = () => { alert('Toggled') } } = props;
    const theme = createTheme({
        palette: {
            success: {
                main: colors.primary,
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Switch
                color={'success'}
                checked={checked}
                onClick={onClick} />
        </ThemeProvider>
    )
}
