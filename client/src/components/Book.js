import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './Book.css'
const darkTheme = createTheme({ palette: { mode: 'dark' } });
export default function Book() {
    const books = [ //fake book data
        {
            title: "book 1",
            author: "john smith"

        },
        {
            title: "book 2",
            author: "john smith"

        },
        {
            title: "book 3",
            author: "john smith"

        }
    ]
    return (
        <ThemeProvider theme={darkTheme}>

            <Box
                sx={{
                    width: 500,
                    height: 500,
                    '&:hover': {
                        bgcolor: 'blue',//for testing
                    },
                    margin: 'auto', // center horizontally
                    marginTop: '500px', // move  down

                }}
            >

                <div className='book'>
                    <h2>Library</h2>

                    <div className='book__items'>
                        {books.map((book, i) => (

                            <Paper

                                elevation={20}
                                variant="outlined"
                                sx={{

                                    width: "140px",
                                    height: "200px",
                                    scrollPaddingLeft: "20px",
                                    '&:hover': {
                                        bgcolor: 'purple',
                                    },



                                }}

                            >
                                <p>{book.title}</p>

                            </Paper>

                        ))

                        }
                    </div>
                </div>
            </Box>

        </ThemeProvider>
    );
}