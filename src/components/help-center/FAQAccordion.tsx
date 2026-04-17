'use client'

import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Add, Remove } from '@mui/icons-material'
import type { FAQ } from '@/types/api.types'

interface FAQAccordionProps {
  faqs: FAQ[]
  title?: string
}

export default function FAQAccordion({ faqs, title }: FAQAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  if (faqs.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography sx={{ color: 'rgba(255,255,255,0.4)' }}>
          No hay preguntas frecuentes disponibles.
        </Typography>
      </Box>
    )
  }

  return (
    <Box>
      {title && (
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ mb: 3, color: 'rgba(255,255,255,0.95)' }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {faqs.map((faq) => {
          const isOpen = expanded === `panel-${faq.id}`
          return (
            <Accordion
              key={faq.id}
              expanded={isOpen}
              onChange={handleChange(`panel-${faq.id}`)}
              elevation={0}
              sx={{
                background: isOpen
                  ? 'rgba(0,197,230,0.06)'
                  : 'rgba(255,255,255,0.03)',
                border: '1px solid',
                borderColor: isOpen ? 'rgba(0,197,230,0.35)' : 'rgba(255,255,255,0.08)',
                borderRadius: '12px !important',
                transition: 'all 0.2s ease',
                '&:before': { display: 'none' },
                '&:hover': {
                  borderColor: 'rgba(0,197,230,0.25)',
                  background: 'rgba(0,197,230,0.04)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  isOpen ? (
                    <Remove sx={{ color: '#00c5e6', fontSize: 18 }} />
                  ) : (
                    <Add sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 18 }} />
                  )
                }
                sx={{ px: 3, py: 1.5 }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: isOpen ? '#00c5e6' : 'rgba(255,255,255,0.85)', pr: 2 }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Box>
  )
}
