
import React, { useState } from 'react';
import { generateBusinessIdeas } from '../services/geminiService';
import type { BusinessIdea } from '../types';

const AIBusinessIdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState<string>('');
  const [ideas, setIdeas] = useState<BusinessIdea[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!niche.trim()) {
      setError('Please enter a niche or interest.');
      return;
    }
    setLoading(true);
    setError(null);
    setIdeas([]);
    try {
      const result = await generateBusinessIdeas(niche);
      setIdeas(result);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };
  
  const IdeaCard: React.FC<{ idea: BusinessIdea }> = ({ idea }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h4 className="font-bold text-lg text-sky-400 mb-2">{idea.title}</h4>
      <p className="text-gray-300 text-sm mb-4">{idea.description}</p>
      <div>
        <h5 className="text-sm font-semibold text-gray-200 mb-2">Suggested AI Tools:</h5>
        <div className="flex flex-wrap gap-2">
          {idea.ai_tools.map(tool => (
            <span key={tool} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-900 py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">AI-Powered Ideation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find Your Next Big Idea
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stuck for ideas? Enter a niche or interest below and let our AI assistant generate unique business concepts for you.
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="flex gap-x-4">
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., 'sustainable living', 'pet owners', 'indie game dev'"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex-none rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Generate Ideas'}
            </button>
          </div>
          {error && <p className="text-red-400 text-center mt-4 text-sm">{error}</p>}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {loading && (
            <div className="flex justify-center items-center">
               <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-lg">Generating brilliant ideas...</p>
            </div>
          )}
          {ideas.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {ideas.map((idea, index) => <IdeaCard key={index} idea={idea} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIBusinessIdeaGenerator;
