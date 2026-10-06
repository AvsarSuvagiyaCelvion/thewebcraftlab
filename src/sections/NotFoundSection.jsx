import React from 'react';
import { Home, ArrowLeft, Code2 } from 'lucide-react';
import Button from '../components/common/Button';

export const NotFoundSection = ({ onReturnHome }) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-radial-grid text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-accent via-purple-600 to-brand-cyan p-0.5 shadow-2xl mx-auto">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
            <Code2 className="w-10 h-10 text-brand-cyan" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-heading font-extrabold text-gradient">
            404
          </h1>
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Button
            href="#hero"
            onClick={onReturnHome}
            variant="primary"
            size="md"
            icon={Home}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
