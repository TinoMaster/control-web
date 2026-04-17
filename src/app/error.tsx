"use client";

import { BRAND } from "@/styles/theme";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service when available (e.g. Sentry)
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND.bg0,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          background: `radial-gradient(ellipse, rgba(245, 158, 11, 0.15) 0%, transparent 70%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "5rem", md: "7rem" },
            fontWeight: 700,
            background: BRAND.gradAmber,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            mb: 2,
            letterSpacing: "-0.04em",
          }}
        >
          500
        </Typography>
        <Typography variant="h4" sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 2 }}>
          Algo salió mal
        </Typography>
        <Typography variant="body1" sx={{ color: BRAND.textSecondary, mb: 5, lineHeight: 1.7 }}>
          Ocurrió un error inesperado. Puedes intentar recargar la página o volver al inicio.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button
            onClick={reset}
            variant="contained"
            size="large"
            startIcon={<RefreshIcon />}
            sx={{ py: 1.75, px: 4 }}
          >
            Intentar de nuevo
          </Button>
          <Button
            component={Link}
            href="/home"
            variant="outlined"
            size="large"
            startIcon={<HomeIcon />}
            sx={{ py: 1.75, px: 4 }}
          >
            Volver al inicio
          </Button>
        </Stack>
        {error.digest && (
          <Typography variant="caption" sx={{ display: "block", mt: 4, color: BRAND.textMuted }}>
            Error ID: {error.digest}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
