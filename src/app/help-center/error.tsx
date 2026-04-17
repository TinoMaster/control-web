"use client";

import SectionError from "@/components/ui/SectionError";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function HelpCenterError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[HelpCenterError]", error);
  }, [error]);

  return (
    <SectionError
      error={error}
      reset={reset}
      title="Error en el Centro de Ayuda"
      description="No pudimos cargar el contenido de ayuda. Por favor intenta de nuevo."
    />
  );
}
