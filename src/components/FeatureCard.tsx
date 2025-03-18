import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  bgColor: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  accentColor = "#1a73e8",
  bgColor = "#e8f0fe",
}: FeatureCardProps) {
  return (
    <div className="bg-chrome-surface p-6 rounded-chrome-lg shadow-chrome-sm hover:shadow-chrome transition-shadow duration-200">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4`}
        style={{ backgroundColor: bgColor }}
      >
        <div style={{ color: accentColor }}>{icon}</div>
      </div>
      <h3 className="text-lg font-medium text-chrome-text-primary mb-2">
        {title}
      </h3>
      <p className="text-chrome-text-secondary">{description}</p>
    </div>
  );
}
