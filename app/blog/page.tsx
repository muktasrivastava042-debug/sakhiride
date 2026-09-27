'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '@/lib/data';
import { Clock, User, Calendar, ArrowRight, Quote, X, Tag, Share2, Sparkles, BookOpen } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function BlogPage() {
  const { showToast } = useApp();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Travel & Spiritual Safety', 'Empowerment Stories', 'Campus Mobility', 'Safety Architecture'];

  const filteredPosts =
    filterCategory === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category.toLowerCase() === filterCategory.toLowerCase());

  const featuredPost = BLOG_POSTS[0];

  const handleShareArticle = (title: string) => {
    navigator?.clipboard?.writeText(window.location.href);
    showToast(`Article link copied: "${title}"`);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 pb-24">
      {/* Blog Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 to-[#FFFDFB] py-16 px-4 sm:px-6 lg:px-8 border-b border-orange-100/70">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Voices of Kashi & Safe Mobility
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 tracking-tight leading-tight">
              Stories of Sisterhood, Ghat Safety & Women on Wheels
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
              Personal chronicles, solo travel guides, and inspiring narratives of local Banaras women reclaiming public
              spaces, financial freedom, and nocturnal independence across the sacred city.
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-orange-500/5 hover:border-orange-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-extrabold uppercase tracking-wider px-3 py-1 rounded-md bg-orange-100 text-orange-900">
                  Featured Guide
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 font-semibold">{featuredPost.readTime}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{featuredPost.date}</span>
              </div>

              <h2
                onClick={() => setSelectedPost(featuredPost)}
                className="text-2xl sm:text-3xl font-extrabold text-slate-950 hover:text-[#EA580C] cursor-pointer transition-colors leading-tight"
              >
                {featuredPost.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">{featuredPost.excerpt}</p>

              <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 text-xs text-slate-700 italic flex items-start gap-2">
                <Quote className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <p>&ldquo;{featuredPost.highlightQuote}&rdquo;</p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{featuredPost.author}</p>
                    <p className="text-[11px] text-slate-500">{featuredPost.authorRole}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(featuredPost)}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stylized Ghat Artwork Frame */}
            <div className="lg:col-span-4 bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Varanasi Series</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <div className="relative z-10 my-4 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg mb-3">
                  श्री
                </div>
                <h3 className="text-lg font-bold text-white">Kashi Ghats & Aarti Safe Travel</h3>
                <p className="text-xs text-slate-400 mt-1">Dashashwamedh · Assi · Godowlia</p>
              </div>

              <div className="relative z-10 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Verified Local Guide</span>
                <span className="text-emerald-400 font-bold">100% Female Escort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid & Category Filters */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">Recent Dispatches from Varanasi</h2>
            <p className="text-xs text-slate-500">Explore real perspectives from drivers, students, and travelers.</p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Stories' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-[#EA580C] uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3
                  onClick={() => setSelectedPost(post)}
                  className="text-lg font-bold text-slate-900 mt-3 hover:text-[#EA580C] cursor-pointer transition-colors leading-snug"
                >
                  {post.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-700 italic">
                  &ldquo;{post.highlightQuote}&rdquo;
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">{post.author}</p>
                  <p className="text-[10px] text-slate-500">{post.date}</p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-orange-100 text-orange-900">
                  {selectedPost.category}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{selectedPost.readTime}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{selectedPost.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="mt-4 flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                    {selectedPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{selectedPost.author}</p>
                    <p className="text-[11px] text-slate-500">{selectedPost.authorRole}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleShareArticle(selectedPost.title)}
                  className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Story</span>
                </button>
              </div>
            </div>

            {/* Highlight Callout */}
            <div className="my-6 p-4 bg-orange-50/70 border-l-4 border-[#EA580C] rounded-r-xl text-xs sm:text-sm text-slate-800 italic leading-relaxed">
              &ldquo;{selectedPost.highlightQuote}&rdquo;
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Sakhi Ride Varanasi Community Editorial</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
