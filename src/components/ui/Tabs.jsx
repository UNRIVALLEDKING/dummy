/* eslint-disable react/prop-types */
import React from 'react';

export function Tabs({ defaultValue, className = '', children }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className} data-active-tab={activeTab}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ className = '', children }) {
  return (
    <div className={`flex space-x-2 p-1 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children }) {
  return (
    <button
      className="px-4 py-2 rounded-lg text-[#393939] hover:bg-gray-100 data-[state=active]:bg-[#f37a1f] data-[state=active]:text-white transition-colors"
      data-state={value === arguments[0].activeTab ? 'active' : 'inactive'}
      onClick={() => arguments[0].setActiveTab?.(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  if (value !== arguments[0].activeTab) return null;
  return <div>{children}</div>;
}
