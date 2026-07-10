"use client";

import { useEffect, useState } from "react";
import { FeaturedPets } from "@/components/FeaturedPets";

/** Desktop-only pets — client mount avoids eager preloads on mobile HTML. */
export function FeaturedPetsDesktop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!show) {
    return <div className="hidden min-h-32 lg:block" aria-hidden />;
  }

  return <FeaturedPets imageLoading="eager" />;
}
