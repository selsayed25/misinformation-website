import React, { useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';
import { GlossaryItem as GlossaryItemType } from '../types';

interface GlossaryItemProps {
  item: GlossaryItemType;
}

const GlossaryItem: React.FC<GlossaryItemProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 px-2 text-left font-heading font-semibold text-lg hover:bg-neutral-50 transition-colors"
      >
        <span>{item.term}</span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-neutral-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-neutral-500" />
        )}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-neutral-50 slide-up">
          <p className="mb-4 text-neutral-700">{item.definition}</p>
          
          {item.examples.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center text-primary">
                <List className="h-4 w-4 mr-1" />
                Examples:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
                {item.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          )}
          
          {item.techniques.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-primary">Common Techniques:</h4>
              <div className="flex flex-wrap gap-2">
                {item.techniques.map((technique, index) => (
                  <span key={index} className="bg-neutral-200 px-2 py-1 rounded-full text-xs text-neutral-700">
                    {technique}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {item.relatedTerms.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 text-primary">Related Terms:</h4>
              <div className="flex flex-wrap gap-2">
                {item.relatedTerms.map((term, index) => (
                  <span key={index} className="bg-secondary/10 px-2 py-1 rounded-full text-xs text-secondary">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlossaryItem;