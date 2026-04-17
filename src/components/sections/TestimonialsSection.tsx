"use client";

import { TESTIMONIALS as STATIC_TESTIMONIALS } from "@/data/testimonials";
import { BRAND } from "@/styles/theme";
import type { Testimonial } from "@/types/api.types";
import { FormatQuote } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface TestimonialsSectionProps {
  /** Testimonials to display. Defaults to static data if not provided. */
  testimonials?: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  // Use provided testimonials or fall back to static data
  const items =
    testimonials && testimonials.length > 0
      ? testimonials
      : STATIC_TESTIMONIALS.map((t) => ({
          id: t.name,
          name: t.name,
          business: t.business,
          quote: t.comment,
          avatar: t.avatar,
          rating: t.rating,
        }));
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${BRAND.bg0} 0%, ${BRAND.bg1} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "45%",
          height: "60%",
          background: `radial-gradient(ellipse, ${BRAND.amberGlow} 0%, transparent 70%)`,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: BRAND.amber, display: "block", mb: 2, letterSpacing: "0.14em" }}
          >
            Testimonios
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 700,
              color: BRAND.textPrimary,
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            Lo que dicen nuestros <span className="gradient-text-amber">clientes</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, maxWidth: 480, mx: "auto" }}
          >
            Miles de negocios ya confían en Control para gestionar sus operaciones diarias
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {items.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                sx={{
                  height: "100%",
                  background: BRAND.bg2,
                  border: `1px solid ${BRAND.glassBorder}`,
                  borderRadius: "20px",
                  p: { xs: 3, md: 3.5 },
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    borderColor: `${BRAND.amber}44`,
                    boxShadow: `0 24px 48px rgba(0,0,0,0.3)`,
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${BRAND.amber}55, transparent)`,
                  },
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: `${BRAND.amber}18`,
                    border: `1px solid ${BRAND.amber}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    flexShrink: 0,
                  }}
                >
                  <FormatQuote sx={{ fontSize: 20, color: BRAND.amber, transform: "scaleX(-1)" }} />
                </Box>

                {/* Stars */}
                <Box sx={{ display: "flex", gap: 0.25, mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 14, color: BRAND.amber }} />
                  ))}
                </Box>

                {/* Comment */}
                <Typography
                  variant="body2"
                  sx={{
                    color: BRAND.textSecondary,
                    lineHeight: 1.8,
                    flexGrow: 1,
                    mb: 3,
                    fontSize: "0.9375rem",
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </Typography>

                {/* Author */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: BRAND.gradPrimary,
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      color: BRAND.bg0,
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: BRAND.textPrimary,
                        fontWeight: 600,
                        fontFamily: "var(--font-space-grotesk)",
                        lineHeight: 1.3,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: BRAND.textMuted, fontSize: "0.75rem" }}
                    >
                      {testimonial.business}
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
