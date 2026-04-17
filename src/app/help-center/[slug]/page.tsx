import ArticleCard from "@/components/help-center/ArticleCard";
import HelpCenterBreadcrumbs from "@/components/help-center/HelpCenterBreadcrumbs";
import { FadeIn, FadeLeft, FadeRight, PageTransition } from "@/components/ui/AnimatedElements";
import { HELP_ARTICLES, getArticleBySlug } from "@/data/helpArticles";
import { ROUTES } from "@/lib/constants/routes";
import { AccessTime, ArrowBack, ChatBubbleOutline } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return HELP_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Artículo no encontrado" };

  return {
    title: `${article.title} | Centro de Ayuda — Control`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/help-center/${article.slug}`,
    },
  };
}

export default function HelpArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) notFound();

  const related = HELP_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category,
  ).slice(0, 3);

  return (
    <PageTransition>
      <Box component="main" sx={{ bgcolor: "#060c1a", minHeight: "100vh" }}>
        {/* Header del artículo */}
        <Box
          sx={{
            position: "relative",
            pt: { xs: 8, md: 10 },
            pb: { xs: 6, md: 8 },
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "linear-gradient(180deg, rgba(0,197,230,0.04) 0%, transparent 100%)",
          }}
        >
          <Container maxWidth="lg">
            <FadeLeft>
              <HelpCenterBreadcrumbs
                items={[{ label: article.category }, { label: article.title }]}
              />

              <Box sx={{ maxWidth: 720 }}>
                <Chip
                  label={article.category}
                  size="small"
                  sx={{
                    bgcolor: "rgba(0,197,230,0.12)",
                    color: "#00c5e6",
                    border: "1px solid rgba(0,197,230,0.25)",
                    fontWeight: 600,
                    fontSize: "0.72rem",
                    mb: 2.5,
                  }}
                />
                <Typography
                  variant="h2"
                  fontWeight={800}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1.8rem", md: "2.8rem" },
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  {article.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                    <AccessTime sx={{ fontSize: 16, color: "#f59e0b" }} />
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)" }}>
                      {article.readTime}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </FadeLeft>
          </Container>
        </Box>

        {/* Contenido */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Artículo principal */}
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeIn>
                <Box
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  sx={{
                    "& h2": {
                      fontSize: { xs: "1.3rem", md: "1.5rem" },
                      fontWeight: 700,
                      mt: 5,
                      mb: 2,
                      color: "rgba(255,255,255,0.9)",
                      paddingTop: 1,
                    },
                    "& h3": {
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mt: 3.5,
                      mb: 1.5,
                      color: "rgba(255,255,255,0.8)",
                    },
                    "& p": {
                      mb: 2.5,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.85,
                      fontSize: "0.97rem",
                    },
                    "& ul, & ol": {
                      pl: 3,
                      mb: 2.5,
                      color: "rgba(255,255,255,0.55)",
                    },
                    "& li": {
                      mb: 1,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                      "&::marker": { color: "#00c5e6" },
                    },
                    "& blockquote": {
                      borderLeft: "3px solid #00c5e6",
                      pl: 3,
                      py: 1.5,
                      ml: 0,
                      my: 3,
                      bgcolor: "rgba(0,197,230,0.05)",
                      borderRadius: "0 8px 8px 0",
                      "& p": { mb: 0, color: "rgba(255,255,255,0.65)" },
                    },
                    "& table": {
                      width: "100%",
                      borderCollapse: "collapse",
                      mb: 3,
                      borderRadius: 2,
                      overflow: "hidden",
                      "& th": {
                        bgcolor: "rgba(0,197,230,0.12)",
                        color: "#00c5e6",
                        p: 1.75,
                        textAlign: "left",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        borderBottom: "1px solid rgba(0,197,230,0.2)",
                      },
                      "& td": {
                        p: 1.75,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.55)",
                      },
                      "& tr:last-child td": { borderBottom: "none" },
                      "& tr:hover td": { bgcolor: "rgba(255,255,255,0.02)" },
                    },
                    "& strong": { color: "rgba(255,255,255,0.85)", fontWeight: 600 },
                    "& em": { color: "rgba(255,255,255,0.5)" },
                    "& code": {
                      bgcolor: "rgba(0,197,230,0.1)",
                      color: "#00c5e6",
                      px: 0.8,
                      py: 0.2,
                      borderRadius: 1,
                      fontSize: "0.84rem",
                      fontFamily: "monospace",
                    },
                  }}
                />

                <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", my: 5 }} />

                <Button
                  component={Link}
                  href={ROUTES.HELP_CENTER_FAQ}
                  startIcon={<ArrowBack />}
                  variant="outlined"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    borderColor: "rgba(255,255,255,0.15)",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "#00c5e6",
                      color: "#00c5e6",
                      bgcolor: "rgba(0,197,230,0.05)",
                    },
                  }}
                >
                  Volver al Centro de Ayuda
                </Button>
              </FadeIn>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <FadeRight>
                <Box sx={{ position: "sticky", top: 100 }}>
                  {related.length > 0 && (
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "#f59e0b",
                          letterSpacing: 3,
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          display: "block",
                          mb: 2,
                        }}
                      >
                        Artículos relacionados
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {related.map((rel) => (
                          <ArticleCard
                            key={rel.slug}
                            slug={rel.slug}
                            title={rel.title}
                            description={rel.description}
                            category={rel.category}
                            readTime={rel.readTime}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  <Box
                    sx={{
                      p: 3,
                      background: "rgba(245,158,11,0.06)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: 3,
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "rgba(245,158,11,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <ChatBubbleOutline sx={{ color: "#f59e0b", fontSize: 22 }} />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      gutterBottom
                      sx={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      ¿No encontraste lo que buscabas?
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.4)", display: "block", mb: 2.5 }}
                    >
                      Nuestro equipo está aquí para ayudarte.
                    </Typography>
                    <Button
                      component={Link}
                      href={ROUTES.CONTACT}
                      variant="contained"
                      size="small"
                      fullWidth
                      sx={{
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #f59e0b, #d97706)",
                        color: "#000",
                        "&:hover": {
                          background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                          boxShadow: "0 0 20px rgba(245,158,11,0.35)",
                        },
                      }}
                    >
                      Contactar soporte
                    </Button>
                  </Box>
                </Box>
              </FadeRight>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
}
