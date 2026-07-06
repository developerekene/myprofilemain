import { ArrowLeft, Swords, Shield, Trophy, Crown } from 'lucide-react';
import { openChat } from '../../Redux/Slices/chatSlice';
import { store } from '../../Redux/Store';
import ChatBot from '../Components/ChatBot';
import Footer from '../Components/Footer';

const ClashOfKingsScreen: React.FC = () => {
    return (
        <div className="bg-slate-950/70 min-h-screen text-slate-100 selection:bg-purple-500/30">
            <br />
            <br />
            <br />
            <br />
            <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-slate-950 text-slate-100 font-sans">
                {/* Background radial gradient glow spheres */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

                {/* Back to Realm Nav */}
                <a
                    href="/"
                    className="absolute top-4 left-6 flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group font-mono z-20"
                >
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-0.5 transition-transform" />
                    <span>Leave Campaign</span>
                </a>

                <div className="grid md:grid-cols-12 gap-12 items-center relative z-10 mt-8 md:mt-4">
                    {/* Left Side Content Column */}
                    <div className="md:col-span-7 space-y-6 text-left">

                        {/* Faction Banner Badge */}
                        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-md text-xs text-purple-300 font-mono font-bold tracking-widest uppercase shadow-inner">
                            <span>🛡️ Prepare For Battle</span>
                        </div>

                        {/* Epic Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider text-stone-100 uppercase font-serif drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-[1.1]">
                            Clash of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-500 font-extrabold tracking-tight">
                                Kings Arena
                            </span>
                        </h1>

                        {/* Cinematic Narrative */}
                        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed font-sans">
                            Forge alliances, deploy tactical counter-plays, and out-maneuver rival
                            lords on the battlefield. Command your faction to ultimate victory or watch
                            your house turn to ash. The throne waits for no one.
                        </p>

                        {/* Dual Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                onClick={() => {
                                    window.open("https://www.chess.com/club/clash-of-kings-3/join/4e0b3b?utm_campaign=club_invite_link&utm_source=chesscom&utm_medium=copy", "_blank");
                                }}
                                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600 border border-purple-500/40 shadow-xl shadow-purple-950/50 transition-all hover:scale-[1.01] group"
                            >
                                <Swords size={18} className="group-hover:rotate-12 transition-transform" />
                                <span>Join the team</span>
                            </button>
                            <a
                                href="/get-your-agent"
                                className="flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white transition-all font-semibold text-sm"
                            >
                                <span>View Ruleset</span>
                            </a>
                        </div>

                        {/* Tactical Dashboard Stats Matrix (Inline) */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-900 max-w-lg">
                            <div>
                                <p className="text-2xl font-bold text-stone-100 font-serif flex items-center gap-1">
                                    <Crown size={16} className="text-purple-300 inline" /> 24
                                </p>
                                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-0.5">Active Realms</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-emerald-400 font-serif animate-pulse flex items-center gap-1">
                                    <Shield size={16} className="text-pink-400 inline" /> Live
                                </p>
                                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-0.5">Combat Status</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-stone-100 font-serif flex items-center gap-1">
                                    <Trophy size={16} className="text-purple-400 inline" /> 50K
                                </p>
                                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-0.5">Naira Prize</p>
                            </div>
                        </div>

                        {/* Server Status Sub-Indicators */}
                        <div className="pt-2 flex flex-wrap gap-6 text-[11px] font-mono text-stone-500">
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 nominations animate-pulse"></span>
                                <span>Server Tick: 45ms</span>
                            </div>
                            <div>🏰 Siege Engine: Deployed</div>
                            <div>⚔️ Anti-Cheat Shield: Active</div>
                        </div>
                    </div>

                    {/* Visual Floating Chess Mockup Frame */}
                    <div className="hidden md:flex flex-shrink-0 w-80 h-[560px] bg-gradient-to-b from-purple-950/30 to-slate-950 border border-purple-900/40 rounded-[48px] p-3.5 shadow-2xl relative group hover:border-purple-600/40 transition-all">
                        <div className="w-full h-full bg-slate-950 rounded-[38px] border border-purple-950 p-6 flex flex-col justify-between relative overflow-hidden">

                            {/* Phone Top Notch UI */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-b-2xl border-x border-b border-purple-900/40" />

                            {/* Top Section: Match Identity & Active Board Readout */}
                            <div className="pt-8 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Crown size={16} />
                                    </div>
                                    {/* Simulated Turn Indicator */}
                                    <div className="px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-900/20 text-[10px] font-mono text-purple-300 font-bold tracking-wider uppercase animate-pulse">
                                        Your Turn
                                    </div>
                                </div>

                                {/* Simulated Live Chess Board Matrix Mini-Map */}
                                <div className="grid grid-cols-4 gap-1.5 p-2 bg-purple-950/20 border border-purple-900/40 rounded-xl">
                                    {[...Array(16)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`aspect-square rounded-sm flex items-center justify-center text-xs font-serif ${(Math.floor(i / 4) + i) % 2 === 0
                                                ? "bg-purple-900/30 text-purple-400"
                                                : "bg-slate-900/50 text-slate-500"
                                                }`}
                                        >
                                            {i === 2 && "♞"}
                                            {i === 5 && "👑"}
                                            {i === 11 && "♟"}
                                            {i === 12 && "♖"}
                                        </div>
                                    ))}
                                </div>

                                {/* Tactical Engine Readout */}
                                <div className="space-y-2">
                                    <div className="h-3 w-1/2 bg-purple-900/40 rounded-md border border-purple-900/20" />
                                    <div className="space-y-1.5">
                                        <div className="h-1.5 w-full bg-slate-900 rounded-md" />
                                        <div className="h-1.5 w-5/6 bg-slate-900 rounded-md" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section: Arena Clock & Match Valuation */}
                            <div className="bg-purple-950/30 border border-purple-900/40 p-4 rounded-xl space-y-3 backdrop-blur-sm">
                                <div className="flex items-center justify-between">
                                    {/* Faction ID */}
                                    <div className="h-2 w-16 bg-slate-800 rounded-md" />
                                    {/* Active Match Balance Eval Bar Block (+1.4) */}
                                    <div className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded">
                                        +1.4
                                    </div>
                                </div>

                                {/* Split Clock Timer Display */}
                                <div className="flex gap-2 pt-1">
                                    <div className="flex-1 bg-slate-950 border border-slate-900 p-2 rounded-md text-center">
                                        <p className="text-[9px] font-mono text-stone-500 uppercase">White</p>
                                        <p className="text-sm font-mono font-bold text-stone-200">04:12</p>
                                    </div>
                                    <div className="flex-1 bg-purple-900/30 border border-purple-700/30 p-2 rounded-md text-center">
                                        <p className="text-[9px] font-mono text-purple-400 uppercase">Black</p>
                                        <p className="text-sm font-mono font-bold text-purple-300">03:45</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <br />

            {/* Application / Recruitment Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-12 gap-12 items-center bg-purple-950/20 border border-purple-900/60 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">

                    {/* Subtle decorative background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Left Side: Context & Requirements Description */}
                    <div className="md:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-md text-xs text-purple-300 font-mono font-bold tracking-widest uppercase">
                            <span>⚔️ 2026 - CLASH OF KINGS</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-wider text-stone-100 uppercase">
                            Claim Your Seat at <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                                The Next Campaign
                            </span>
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                            Think you have the structural foresight to outwit the realm's top tacticians?
                            Applications for the upcoming **Clash of Kings Arena** cycles are now officially open.
                            Matches are hosted live via Chess.com under strict competitive oversight. Whether you are an unrated rogue
                            or a titled grandmaster, the battlefield levels all crowns.
                        </p>

                        {/* Core Criteria Bullet Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-stone-300">
                            <div className="flex items-center gap-2.5">
                                <span className="text-purple-400">⚡</span>
                                <span>Format: Swiss System / Blitz</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-purple-400">🛡️</span>
                                <span>Fair-Play Verified Engine Scan</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-purple-400">👑</span>
                                <span>Open Rating Bracket Requirements</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-purple-400">💰</span>
                                <span>Guaranteed Faction Prize Pools</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: High-Impact Call to Action Block */}
                    <div className="md:col-span-5 w-full flex flex-col items-center justify-center bg-slate-950/60 border border-purple-900/40 p-8 rounded-2xl text-center space-y-6 shadow-inner">
                        <div className="space-y-2">
                            <h3 className="text-lg font-serif font-bold tracking-wide text-purple-300 uppercase">
                                Enlistment Portal
                            </h3>
                            <p className="text-xs font-mono text-stone-500">
                                Cycle: August 2026 Cohort
                            </p>
                        </div>

                        <div className="w-full bg-purple-950/30 border border-purple-900/40 px-4 py-3 rounded-lg flex items-center justify-between text-xs font-mono">
                            <span className="text-stone-400">Entry Fee:</span>
                            <span className="text-emerald-400 font-bold">Free (Invite Only)</span>
                        </div>

                        <button
                            onClick={() => {
                                // window.location.href = "https://www.chess.com/club/clash-of-kings-3/join/4e0b3b?utm_campaign=club_invite_link&utm_source=chesscom&utm_medium=copy";
                            }}
                            className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600 border border-purple-500/40 shadow-xl shadow-purple-950/50 transition-all hover:scale-[1.02] group"
                        >
                            <Swords size={18} className="group-hover:translate-x-0.5 transition-transform" />
                            <span>Submit Application</span>
                        </button>

                        <p className="text-[10px] font-mono text-stone-500 max-w-[250px]">
                            By submitting, you agree to match schedules enforced by Overseer The_Human_Rook.
                        </p>
                    </div>

                </div>
            </div>

            {/* Friendly Matches / Casual Sparring Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-12 gap-12 items-center bg-purple-950/10 border border-purple-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">

                    {/* Subtle decorative background glow (shifted slightly to distinguish from tournament section) */}
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Left Side: Context & Casual Description */}
                    <div className="md:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-md text-xs text-indigo-300 font-mono font-bold tracking-widest uppercase">
                            <span>♟️ Casual Sparring & Practice</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-wider text-stone-100 uppercase">
                            Sharpen Your Steel <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                                With Friendly Games
                            </span>
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                            Not looking for the intense pressure of the tournament leaderboard? Step into our casual pairings.
                            These unrated matches are perfect for experimenting with new gambits, testing tactical deep-runs,
                            or just enjoying a clean game with fellow lords without affecting your competitive standings. No stress,
                            no engine checks—just pure chess.
                        </p>

                        {/* Casual Criteria Bullet Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-stone-300">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400">⏱️</span>
                                <span>Format: Custom Time Controls (Rapid/Blitz/Bullet)</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400">🤝</span>
                                <span>Unrated: Play Without Rating Risk</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400">🗣️</span>
                                <span>Post-Game Live Chat & Analysis Open</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400">🌱</span>
                                <span>All Skill Levels & Novices Welcome</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: High-Impact Call to Action Block */}
                    <div className="md:col-span-5 w-full flex flex-col items-center justify-center bg-slate-950/40 border border-purple-900/20 p-8 rounded-2xl text-center space-y-6 shadow-inner">
                        <div className="space-y-2">
                            <h3 className="text-lg font-serif font-bold tracking-wide text-indigo-300 uppercase">
                                The Training Grounds
                            </h3>
                            <p className="text-xs font-mono text-stone-500">
                                Open Lounge 24/7
                            </p>
                        </div>

                        <div className="w-full bg-purple-950/20 border border-purple-900/30 px-4 py-3 rounded-lg flex items-center justify-between text-xs font-mono">
                            <span className="text-stone-400">Match Settings:</span>
                            <span className="text-indigo-300 font-bold">Unrated / Friendly</span>
                        </div>

                        <button
                            onClick={() => {
                                // window.location.href = "https://www.chess.com/club/clash-of-kings-3/join/4e0b3b?utm_campaign=club_invite_link&utm_source=chesscom&utm_medium=copy";
                            }}
                            className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-600 border border-indigo-500/40 shadow-xl shadow-indigo-950/30 transition-all hover:scale-[1.02] group"
                        >
                            <Swords size={18} className="group-hover:translate-x-0.5 transition-transform" />
                            <span>Challenge a Peer</span>
                        </button>

                        <p className="text-[10px] font-mono text-stone-500 max-w-[250px]">
                            Instantly jump into the lounge queue to challenge any online club member.
                        </p>
                    </div>

                </div>
            </div>

            {/* July Tournament - COK 2026 Standing Board */}
            <div className="max-w-3xl mx-auto bg-purple-950/60 border border-purple-900/70 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
                {/* Dark purple gradient texture effect accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-800/[0.05] to-transparent pointer-events-none" />

                {/* Tournament Meta Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-purple-900 pb-4 mb-6 gap-3 text-center sm:text-left">
                    <div>
                        <h2 className="text-ml font-serif font-bold text-purple-300 tracking-wide uppercase">
                            ⚔️ July Tournament(Friendlies) — COK 2026 on Chess.com
                        </h2>
                        <p className="text-xs font-mono text-stone-400 mt-1">
                            Played: Jul 3, 2026, 2:00 PM • Rating: Open • 6 Grand-Lords
                        </p>
                    </div>
                    <div className="bg-purple-950 px-4 py-1.5 border border-purple-900 rounded-md text-xs font-mono text-stone-300">
                        👑 Overseer: <span className="text-stone-100 font-bold">The_Human_Rook</span>
                    </div>
                </div>

                {/* Standings List */}
                <div className="space-y-3">
                    {/* 1st Place */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-purple-800/20 via-purple-950/40 to-transparent border border-purple-700/50 rounded-xl px-5 py-4 group hover:border-purple-600 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-700 flex items-center justify-center text-purple-300 font-serif font-black shadow-inner">
                                I
                            </div>
                            <div>
                                <h4 className="text-stone-100 font-bold tracking-wide font-sans group-hover:text-purple-200 transition-colors">
                                    thehonouredone_99
                                </h4>
                                <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">Champion • Purple Shield</p>
                            </div>
                        </div>
                        <div className="text-sm font-mono font-bold text-purple-300 flex items-center gap-1.5">
                            <span>🥇 1st Place</span>
                        </div>
                    </div>

                    {/* 2nd Place */}
                    <div className="flex items-center justify-between bg-purple-950/30 border border-purple-900 rounded-xl px-5 py-4 group hover:border-purple-700 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-900/70 border border-purple-800 flex items-center justify-center text-stone-300 font-serif font-bold">
                                II
                            </div>
                            <div>
                                <h4 className="text-stone-200 font-semibold tracking-wide">
                                    madaramituski
                                </h4>
                                <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">Contender • Indigo Banner</p>
                            </div>
                        </div>
                        <div className="text-sm font-mono font-bold text-stone-400">
                            🥈 2nd Place
                        </div>
                    </div>

                    {/* 3rd Place */}
                    <div className="flex items-center justify-between bg-purple-950/40 border border-purple-900/50 dashed rounded-xl px-5 py-4 opacity-70 border-dashed">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-900 flex items-center justify-center text-stone-600 font-serif">
                                III
                            </div>
                            <div>
                                <h4 className="text-stone-500 font-medium italic tracking-wide">
                                    infinitesimal90
                                </h4>
                                <p className="text-xs font-mono text-stone-600 uppercase tracking-wider">Iron Tier Tie-Breaker</p>
                            </div>
                        </div>
                        <div className="text-xs font-mono font-medium text-stone-600 bg-purple-950/50 px-2.5 py-1 rounded border border-purple-900/40 animate-pulse">
                            🥈 3rd Place
                        </div>
                    </div>
                </div>
            </div>

            <ChatBot />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default ClashOfKingsScreen;