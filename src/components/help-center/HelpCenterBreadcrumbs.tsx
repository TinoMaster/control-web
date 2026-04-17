import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'
import { NavigateNext } from '@mui/icons-material'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HelpCenterBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function HelpCenterBreadcrumbs({ items }: HelpCenterBreadcrumbsProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" sx={{ color: 'rgba(255,255,255,0.25)' }} />}
      >
        <MuiLink
          component={Link}
          href="/home"
          underline="none"
          sx={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.82rem',
            fontWeight: 500,
            transition: 'color 0.2s',
            '&:hover': { color: '#00c5e6' },
          }}
        >
          Inicio
        </MuiLink>
        <MuiLink
          component={Link}
          href="/help-center/faq"
          underline="none"
          sx={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.82rem',
            fontWeight: 500,
            transition: 'color 0.2s',
            '&:hover': { color: '#00c5e6' },
          }}
        >
          Centro de Ayuda
        </MuiLink>
        {items.map((item, index) =>
          item.href && index < items.length - 1 ? (
            <MuiLink
              key={item.label}
              component={Link}
              href={item.href}
              underline="none"
              sx={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.82rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                '&:hover': { color: '#00c5e6' },
              }}
            >
              {item.label}
            </MuiLink>
          ) : (
            <Typography
              key={item.label}
              sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#00c5e6' }}
            >
              {item.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  )
}
