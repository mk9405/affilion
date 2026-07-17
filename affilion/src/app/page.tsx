import Category from "../components/category";
import TrustBadge from "../components/TrustBadge";
import Shopping from "../components/Shopping";
import AffiliatePartners from "../components/AffiliatePartners";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* <Category /> */}
      <Shopping />
      <TrustBadge />
      <AffiliatePartners />
    </div>
  );
}
