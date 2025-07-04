import React from "react";
import Image from "next/image";
import Link from "next/link";
import BuildNewCompanion from "@/components/BuildNewCompanion";

const Cta = () => {
  return (
    <aside className="cta-section">
      <div className="cta-badge ">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build a Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="/images/cta.svg" alt={"cta"} width={362} height={232} />
      <BuildNewCompanion />
    </aside>
  );
};
export default Cta;
