import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Truth Detector</h4>
            <p className="text-neutral-300 text-sm">
              An educational platform dedicated to helping people identify and combat misinformation in the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/glossary" className="text-neutral-300 hover:text-accent transition-colors">
                  Misinformation Glossary
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-neutral-300 hover:text-accent transition-colors">
                  External Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-accent transition-colors">
                  About This Project
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Repository</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/selsayed25/misinformation-website" className="text-neutral-300 hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-light text-center text-sm text-neutral-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-danger" /> for a more truthful world :)
          </p>
          <p className="mt-2">
            {new Date().getFullYear()} Sami Elsayed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;