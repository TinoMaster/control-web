"use client";

import { APP_INFO, NAV_LINKS } from "@/data/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { BRAND } from "@/styles/theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Container, Divider, Drawer, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 320,
            background: BRAND.bg1,
            borderLeft: `1px solid ${BRAND.glassBorder}`,
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Box
              component={Link}
              href={ROUTES.HOME}
              onClick={toggleDrawer}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
              }}
            >
              <Image
                src="/images/logo_control.png"
                alt="Control logo"
                width={34}
                height={34}
                style={{ borderRadius: "8px" }}
              />
              <Typography
                sx={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: BRAND.textPrimary,
                }}
              >
                {APP_INFO.NAME}
              </Typography>
            </Box>

            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: BRAND.textMuted,
                "&:hover": { color: BRAND.textPrimary, background: BRAND.glass },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 3, borderColor: BRAND.glassBorder }} />

          {/* Nav Links */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 4 }}>
            {NAV_LINKS.map((link) => (
              <Box
                key={link.name}
                component={Link}
                href={link.path}
                onClick={toggleDrawer}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1.5,
                  borderRadius: 2,
                  textDecoration: "none",
                  color: isActive(link.path) ? BRAND.cyan : BRAND.textSecondary,
                  background: isActive(link.path) ? `${BRAND.cyan}11` : "transparent",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: BRAND.textPrimary,
                    background: BRAND.glass,
                  },
                }}
              >
                {link.name}
                {isActive(link.path) && (
                  <ArrowForwardIcon sx={{ fontSize: 14, color: BRAND.cyan }} />
                )}
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            fullWidth
            component={Link}
            href={ROUTES.PRICING}
            onClick={toggleDrawer}
            sx={{ py: 1.5 }}
          >
            Comenzar Gratis
          </Button>
        </Box>
      </Drawer>

      {/* Main Header */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          py: { xs: 1.5, md: 2 },
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 2.5, md: 4 },
              py: { xs: 1.25, md: 1.5 },
              borderRadius: 3,
              background: isScrolled ? `${BRAND.bg1}f0` : `${BRAND.bg0}80`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid ${isScrolled ? BRAND.glassBorder : "transparent"}`,
              boxShadow: isScrolled
                ? `0 8px 40px rgba(0, 0, 0, 0.4), 0 1px 0 ${BRAND.glassBorder}`
                : "none",
              transition: "all 0.3s ease",
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              href={ROUTES.HOME}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/logo_control.png"
                alt="Control logo"
                width={36}
                height={36}
                style={{ borderRadius: "9px", boxShadow: `0 4px 16px rgba(0,197,230,0.35)` }}
              />
              <Typography
                sx={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "1.375rem",
                  color: BRAND.textPrimary,
                  letterSpacing: "-0.02em",
                }}
              >
                {APP_INFO.NAME}
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {NAV_LINKS.map((link) => (
                <Box
                  key={link.name}
                  component={Link}
                  href={link.path}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textDecoration: "none",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    color: isActive(link.path) ? BRAND.cyan : BRAND.textSecondary,
                    background: isActive(link.path) ? `${BRAND.cyan}11` : "transparent",
                    transition: "all 0.2s ease",
                    position: "relative",
                    "&:hover": {
                      color: BRAND.textPrimary,
                      background: BRAND.glass,
                    },
                  }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: -2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 16,
                        height: 2,
                        borderRadius: 1,
                        background: BRAND.gradPrimary,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* CTA + Mobile menu */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Button
                variant="contained"
                size="small"
                component={Link}
                href={ROUTES.PRICING}
                sx={{
                  display: { xs: "none", md: "flex" },
                  px: 2.5,
                  py: 1,
                  fontSize: "0.875rem",
                }}
              >
                Comenzar Gratis
              </Button>

              <IconButton
                onClick={toggleDrawer}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: BRAND.textSecondary,
                  "&:hover": { color: BRAND.textPrimary },
                }}
                aria-label="Abrir menú"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Header spacer */}
      <Box sx={{ height: { xs: 72, md: 84 } }} />
    </>
  );
}
