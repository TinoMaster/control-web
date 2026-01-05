'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, Container, Drawer, IconButton, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import { NAV_LINKS, APP_INFO } from '@/data/navigation'
import { ROUTES } from '@/lib/constants/routes'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev)
  }

  const drawerContent = () => (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #1a1a1a, #0d0d0d, #000000)',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.8rem',
          alignItems: 'center',
          backgroundColor: '#1a1a1a',
        }}
      >
        <Box
          component={Link}
          href={ROUTES.HOME}
          onClick={toggleDrawer}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              bgcolor: 'primary.main',
            }}
          />
          <Box
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'primary.light',
            }}
          >
            {APP_INFO.NAME}
          </Box>
        </Box>

        <IconButton
          onClick={toggleDrawer}
          aria-label="Cerrar menú"
          sx={{ color: 'white' }}
        >
          <MenuOpenRoundedIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
          my: 2,
        }}
      >
        {NAV_LINKS.map((link) => (
          <MenuItem
            component={Link}
            href={link.path}
            key={link.name}
            onClick={toggleDrawer}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'center',
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'rgba(0, 171, 194, 0.1)',
                color: 'primary.light',
              },
            }}
          >
            {link.label}
          </MenuItem>
        ))}
      </Box>
    </Box>
  )

  return (
    <>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundImage: 'none',
          },
        }}
      >
        {drawerContent()}
      </Drawer>

      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          py: { xs: 1, md: 1.5 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 1.5 },
              borderRadius: 2,
              backgroundColor: isScrolled
                ? 'rgba(2, 116, 131, 0.95)'
                : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: isScrolled
                ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                : '0 2px 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              href={ROUTES.HOME}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: isScrolled ? 'white' : 'primary.light',
                }}
              />
              <Box
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {APP_INFO.NAME}
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              {NAV_LINKS.map((link) => (
                <Box
                  key={link.name}
                  component={Link}
                  href={link.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    position: 'relative',
                    '&:hover': {
                      color: isScrolled ? 'primary.light' : 'primary.light',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '0%',
                      height: 2,
                      bgcolor: isScrolled ? 'white' : 'primary.light',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {link.name}
                </Box>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={toggleDrawer}
              aria-label="Abrir menú"
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'white',
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Spacer para evitar que el contenido quede debajo del header */}
      <Box sx={{ height: { xs: 70, md: 80 } }} />
    </>
  )
}
