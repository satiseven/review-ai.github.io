import React from "react";

// Define the props type with proper optional fields
type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: string;
  bgColor?: string;
  rating?: number;
  reviews?: number;
  users?: string;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  accentColor = "#4285f4",
  bgColor = "#e8f0fe",
  rating,
  reviews,
  users,
  ctaText,
  ctaLink,
  badge,
}: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative">
      {/* Badge (if provided) */}
      {badge && (
        <div className="absolute -top-2 -right-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: bgColor, color: accentColor }}
      >
        {icon}
      </div>

      {/* Title and description */}
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Rating and stats (if provided) */}
      {(rating || users) && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          {rating && (
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">
                {rating}
                {reviews ? ` (${reviews})` : ""}
              </span>
            </div>
          )}

          {users && <div className="text-xs text-gray-500">{users}</div>}
        </div>
      )}

      {/* Call to action button (if provided) */}
      {ctaText && ctaLink && (
        <div className="mt-4">
          <a
            href={ctaLink}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {ctaText}
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
