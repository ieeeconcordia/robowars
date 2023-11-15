import React from "react";

export default function CategoriesCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-8">{children}</div>
    </div>
  );
}
