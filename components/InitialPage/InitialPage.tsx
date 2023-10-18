'use client'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

export default function InitialPage() {
  const [isCLicked, setIsClicked] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (buttonLoading) {
      router.push('/game')
    }
  }, [buttonLoading]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value.trim().toUpperCase() === 'OKIKUKAI') {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }

  const handleKotoSimonGame = () => {
    
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      height='90vh'
      width='100vw'
    >
      <Box
        display='flex'
        flexDirection='column'
        height='15vh'
        justifyContent='space-evenly'
        width='55vw'
        // sx={{ border: '1px solid red' }}
      >
        <Button
          variant='contained'
          onClick={() => setButtonLoading(true)}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            '&.MuiButtonBase-root:active': {
              backgroundColor: 'black'
            },
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'black',
              color: 'white'
            }
          }}
        >
          {buttonLoading ?
            <CircularProgress
              sx={{ color: 'white' }}
              size={25}
            /> :
            'Perguntas Gerais'
          }
        </Button>
        <Button
          onClick={() => setIsClicked(!isCLicked)}
          variant='contained'
          sx={{
            backgroundColor: isCLicked ? 'black' : 'white',
            color: isCLicked ? 'red' : 'black',
            // '&.MuiButtonBase-root:active': {
            //   backgroundColor: 'black'
            // },
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'white',
            }
          }}
        >
          Koto Simon
        </Button>
      </Box>
      {isCLicked && (
        <Box
          sx={{ margin: "2% 0 0 0" }}
          display='flex'
          flexDirection='column'
        >
          <TextField
            placeholder='Digite a Senha'
            size='small'
            onChange={handleChange}
            sx={{ backgroundColor: 'white', width: '55vw', borderRadius: '8px' }}
          />
          <Button
            variant='outlined'
            disabled={isDisable}
            onClick={handleKotoSimonGame}
            sx={{
              backgroundColor: 'black',
              border: 'black',
              color: 'white',
              '&.MuiButtonBase-root:active': {
                backgroundColor: 'black'
              },
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'black',
                color: 'white',
                border: 'black'
              },
              '&.MuiButtonBase-root:disabled': {
                backgroundColor: 'black',
                color: 'black'
              }
            }}
          >
            Entrar
          </Button>
        </Box>
      )}
    </Box>
  )
}
