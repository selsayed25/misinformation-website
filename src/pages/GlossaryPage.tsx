import React, { useState } from 'react';
import { Book, Search } from 'lucide-react';
import GlossaryItem from '../components/GlossaryItem';
import { glossaryData } from '../data/glossary';

const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTerms = glossaryData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.techniques.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Book className="h-8 w-8 text-primary mr-3" />
          <h1 className="font-heading text-3xl font-bold">Misinformation Glossary</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <p className="text-neutral-600 mb-6">
            This glossary explains key terms related to misinformation, disinformation, and propaganda. 
            Understanding these concepts and techniques can help you identify and evaluate information more effectively.
          </p>
          
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terms, techniques, or definitions..."
              className="w-full px-4 py-3 pl-10 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {filteredTerms.length > 0 ? (
            filteredTerms.map(item => (
              <GlossaryItem key={item.term} item={item} />
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-neutral-600">No terms match your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;