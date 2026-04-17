"use client";

import SectionError from "@/components/ui/SectionError";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MarketingError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[MarketingError]", error);
  }, [error]);

  return (
    <SectionError
      error={error}
      reset={reset}
      title="Error al cargar la página"
      description="Ocurrió un problema cargando esta página. Intenta de nuevo."
    />
  );
}
