import React from 'react';

interface ProgressBarProps {
  progress: number;
  total: number;
  label?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  total, 
  label, 
  className = "" 
}) => {
  const percentage = Math.min(100, Math.max(0, (progress / total) * 100));
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-semibold text-neutral-700">{label}</span>
          <span className="text-sm text-neutral-600">{progress}/{total}</span>
        </div>
      )}
      
      <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-secondary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={total}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;