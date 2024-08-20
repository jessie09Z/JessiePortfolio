"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  // Ensure `error` is an instance of Error
  const handleError = () => {
    if (!(error instanceof Error)) {
      console.error('An unknown error occurred');
    } else {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleError();
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}