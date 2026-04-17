import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { ArrowForward, AccessTime } from '@mui/icons-material'
import Link from 'next/link'

export interface ArticleCardProps {
  slug: string
  title: string
  description: string
  category: string
  readTime?: string
}

export default function ArticleCard({ slug, title, description, category, readTime }: ArticleCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 3,
        transition: 'all 0.25s ease',
        '&:hover': {
          background: 'rgba(0,197,230,0.05)',
          borderColor: 'rgba(0,197,230,0.35)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 32px rgba(0,197,230,0.12)',
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/help-center/${slug}`}
        sx={{ height: '100%', alignItems: 'flex-start' }}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <Chip
              label={category}
              size="small"
              sx={{
                bgcolor: 'rgba(0,197,230,0.12)',
                color: '#00c5e6',
                border: '1px solid rgba(0,197,230,0.25)',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            />
            {readTime && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTime sx={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }} />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                  {readTime}
                </Typography>
              </Box>
            )}
          </Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            gutterBottom
            sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ flexGrow: 1, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              mt: 2.5,
              color: '#00c5e6',
            }}
          >
            <Typography variant="caption" fontWeight={700} sx={{ color: 'inherit' }}>
              Leer artículo
            </Typography>
            <ArrowForward sx={{ fontSize: 13 }} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
