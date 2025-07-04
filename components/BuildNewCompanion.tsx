import React from "react";
import Image from "next/image";
import Link from "next/link";

const BuildNewCompanion = () => {
  return (
    <button className="btn-primary">
      <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
      <Link href={`/companions/new`}>
        <p>Build New Companion</p>
      </Link>
    </button>
  );
};
export default BuildNewCompanion;
