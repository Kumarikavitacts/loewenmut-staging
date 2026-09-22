"use client";

import { useEffect } from "react";

const BootstrapInit = () => {
  useEffect(() => {
    let mounted = true;

    const loadBootstrap = async () => {
      if (!mounted) return;

      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    };

    loadBootstrap();

    return () => {
      mounted = false;
    };
  }, []);

  return null;
};

export default BootstrapInit;