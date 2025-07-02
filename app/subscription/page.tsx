import React from "react";
import { PricingTable } from "@clerk/nextjs";

const Subscription = () => {
  return (
    <div className="px-14">
      <PricingTable
        appearance={{
          variables: {
            colorPrimary: "#ea580c", // green
            colorBackground: "#F9FAFB", // light gray
            colorText: "#083344", // dark gray
          },
          elements: {
            card: "shadow-md rounded-lg",
            headerTitle: "text-xl font-semibold",
            footer: "hidden", // optional: hide footer
          },
        }}
      />
    </div>
  );
};
export default Subscription;
