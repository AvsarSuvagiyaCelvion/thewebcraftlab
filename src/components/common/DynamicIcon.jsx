import React from 'react';
import * as Icons from 'lucide-react';

export const DynamicIcon = ({ name, className = "w-5 h-5", ...props }) => {
  const IconComponent = Icons[name] || Icons.Sparkles;
  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;
