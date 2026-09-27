'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { X, GitBranch, Check, Copy, Terminal, Github, ExternalLink } from 'lucide-react';

export function GitInstructionsModal() {
  const { isGitModalOpen, setIsGitModalOpen, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isGitModalOpen) return null;

  const gitSnippet = `# 1. Create a new empty repository on GitHub (e.g. named 'sakhi-ride')
# 2. In your terminal, run:
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sakhi-ride.git
git branch -M main
git push -u origin main`;

  const copyGitCommands = () => {
    navigator?.clipboard?.writeText(gitSnippet);
    setCopied(true);
    showToast('Git commands copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
        <button
          onClick={() => setIsGitModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Git Repository & Version Control</h2>
            <p className="text-xs text-slate-500">Repository initialized locally on branch <code className="text-[#EA580C] font-bold">main</code></p>
          </div>
        </div>

        <div className="mt-5 bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Local Branch</span>
            <span className="font-mono font-bold text-slate-900">main</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Author Email</span>
            <span className="font-mono text-slate-700">muktasrivastava042@gmail.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Commit Status</span>
            <span className="text-emerald-700 font-bold">Ready for Push</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[11px] font-bold uppercase text-slate-500 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Connect to your GitHub Repo</span>
            </label>
            <button
              onClick={copyGitCommands}
              className="text-xs text-[#EA580C] hover:text-[#C2410C] font-semibold flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Commands'}</span>
            </button>
          </div>

          <pre className="bg-slate-950 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
            {gitSnippet}
          </pre>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Create New Repo on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsGitModalOpen(false)}
            className="px-5 py-2.5 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
