"use client";

import { BRAND } from "@/styles/theme";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

interface SectionErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
}

export default function SectionError({
  error,
  reset,
  title = "Error al cargar",
  description = "No pudimos cargar esta sección. Intenta de nuevo o vuelve al inicio.",
}: SectionErrorProps) {
  useEffect(() => {
    console.error("[SectionError]", error);
  }, [error]);

  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND.bg0,
        px: 2,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(245, 158, 11, 0.1)",
            border: `1px solid rgba(245, 158, 11, 0.3)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: "1.75rem" }}>⚠</Typography>
        </Box>
        <Typography variant="h5" sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}>
          {description}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button onClick={reset} variant="contained" size="medium" startIcon={<RefreshIcon />}>
            Reintentar
          </Button>
          <Button
            component={Link}
            href="/home"
            variant="outlined"
            size="medium"
            startIcon={<HomeIcon />}
          >
            Ir al inicio
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
