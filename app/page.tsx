import Link from "next/link";
import { PlayCircle, Sparkles, CalendarClock, Share2, Mail, ArrowRight, CheckCircle2, Video } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">SelmiO</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Log in</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Dashboard</Link>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>AI-Powered Video Generation 2.0 is here</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Create & Auto-Schedule <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
              Viral Short Videos.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            SelmiO is the ultimate SaaS for creators. Generate AI short videos and automatically schedule them for YouTube Shorts, Instagram Reels, TikTok, and Email campaigns in one click.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                  Start Generating for Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </SignedIn>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Mockup Preview */}
          <div className="mt-20 relative mx-auto max-w-4xl rounded-xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="aspect-video bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
              <div className="relative z-10 flex flex-col items-center">
                <PlayCircle className="w-16 h-16 text-white/80 mb-4" />
                <p className="text-zinc-400 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 mt-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to go viral</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Stop spending hours editing and posting. Let our AI do the heavy lifting while you focus on growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-purple-400" />,
                title: "AI Video Generation",
                description: "Turn simple text prompts into engaging, high-quality short videos with AI voices and dynamic captions."
              },
              {
                icon: <CalendarClock className="w-6 h-6 text-indigo-400" />,
                title: "Smart Auto-Scheduler",
                description: "Plan your content calendar for months. Set it once and let SelmiO publish automatically at optimal times."
              },
              {
                icon: <Share2 className="w-6 h-6 text-blue-400" />,
                title: "Multi-Platform Sync",
                description: "Publish simultaneously to YouTube Shorts, Instagram Reels, and TikTok without manual rendering or uploading."
              },
              {
                icon: <Mail className="w-6 h-6 text-pink-400" />,
                title: "Email Campaign Integration",
                description: "Embed generated videos directly into your email newsletters to skyrocket click-through rates and engagement."
              },
              {
                icon: <Video className="w-6 h-6 text-teal-400" />,
                title: "Auto-Captions & B-Roll",
                description: "Our AI automatically generates engaging captions and selects highly relevant B-roll footage for your script."
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
                title: "Viral Hook Generator",
                description: "Struggling with ideas? Generate pattern-interrupting hooks guaranteed to grab attention in the first 3 seconds."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How SelmiO works</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">From idea to published globally in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 -z-10" />
            {[
              { step: "1", title: "Write a Prompt", desc: "Describe your video idea or paste a script. Our AI suggests improvements and hooks." },
              { step: "2", title: "Generate Video", desc: "AI creates the voiceover, captions, and b-roll footage in seconds. Review and tweak if needed." },
              { step: "3", title: "Auto-Schedule", desc: "Select YouTube, Instagram, TikTok, or Email. Pick a date, and SelmiO handles the rest." }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black border-4 border-purple-500 flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 p-12 text-center bg-gradient-to-b from-purple-900/40 to-black">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to dominate short form?</h2>
            <p className="relative z-10 text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">Join thousands of creators scheduling their path to millions of views every single day.</p>
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="relative z-10 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors">
                  Get Started for Free
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" className="inline-block relative z-10 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors">
                Go to Dashboard
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">SelmiO</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 max-w-xs">
              The AI short video generator and auto-scheduler designed for modern creators.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                𝕏
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                in
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                ig
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">AI Generator</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Auto-Scheduler</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Creator Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} SelmiO Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>for creators.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
