/* eslint-disable react/prop-types */

export function Tag({ children, variant = 'default' }) {
  if (variant === 'count') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f37a1f]/10 text-[#f37a1f]">
        +{children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-[#393939] shadow-sm">
      {children}
    </span>
  );
}
