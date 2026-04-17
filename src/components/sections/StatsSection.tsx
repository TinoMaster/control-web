"use client";

import { STATS } from "@/data/stats";
import { BRAND } from "@/styles/theme";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export function StatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: BRAND.bg1,
        position: "relative",
        overflow: "hidden",
        borderTop: `1px solid ${BRAND.glassBorder}`,
        borderBottom: `1px solid ${BRAND.glassBorder}`,
      }}
    >
      {/* Gradient accents */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "200%",
            background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 65%)`,
            opacity: 0.25,
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: BRAND.cyan, display: "block", mb: 2, letterSpacing: "0.14em" }}
          >
            Impacto real
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
            Números que hablan
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, maxWidth: 480, mx: "auto" }}
          >
            La confianza de miles de empresarios nos respalda
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {STATS.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                sx={{
                  position: "relative",
                  background: BRAND.bg2,
                  border: `1px solid ${BRAND.glassBorder}`,
                  borderRadius: "20px",
                  p: { xs: 3.5, md: 4 },
                  textAlign: "center",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    borderColor: `${BRAND.cyan}44`,
                    boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px ${BRAND.cyan}22`,
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: index % 2 === 0 ? BRAND.gradPrimary : BRAND.gradAmber,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "16px",
                    background: index % 2 === 0 ? `${BRAND.cyan}15` : `${BRAND.amber}15`,
                    border: `1px solid ${index % 2 === 0 ? BRAND.cyan : BRAND.amber}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2.5,
                  }}
                >
                  <stat.icon
                    sx={{
                      fontSize: 24,
                      color: index % 2 === 0 ? BRAND.cyan : BRAND.amber,
                    }}
                  />
                </Box>

                {/* Number */}
                <Typography
                  sx={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                    color: BRAND.textPrimary,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: BRAND.textPrimary,
                    fontWeight: 600,
                    mb: 0.75,
                    fontSize: "1rem",
                  }}
                >
                  {stat.label}
                </Typography>

                <Typography variant="body2" sx={{ color: BRAND.textMuted, fontSize: "0.8125rem" }}>
                  {stat.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
