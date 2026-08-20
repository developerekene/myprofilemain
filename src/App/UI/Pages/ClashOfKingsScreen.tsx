import { ArrowLeft, Swords, Shield, Trophy, Crown, ArrowRight, Code2, Smartphone, Cloud, Terminal } from 'lucide-react';
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

                {/* Background Atmosphere */}
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_20%,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(79,70,229,0.10),transparent_35%)]" />

                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

                {/* Subtle Grid */}
                <div
                    className="absolute inset-0 -z-10 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Back Navigation */}
                <a
                    href="/about-the-engineer"
                    className="absolute top-4 left-6 flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group font-mono z-20"
                >
                    <ArrowLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>Back to Engineer</span>
                </a>

                <div className="grid md:grid-cols-12 gap-14 items-center relative z-10 mt-10 md:mt-4">

                    {/* ==========================================
            LEFT CONTENT
        ========================================== */}
                    <div className="md:col-span-7 space-y-7 text-left">

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-md text-xs text-purple-300 font-mono font-bold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Season 01 · Arena Open</span>
                        </div>

                        {/* Title */}
                        <div>
                            <p className="text-sm md:text-base font-mono uppercase tracking-[0.35em] text-slate-500 mb-3">
                                The Ultimate Strategic Battle
                            </p>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-serif leading-[0.95]">
                                Clash of
                                <br />

                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-500">
                                    Kings
                                </span>

                                <span className="text-slate-300"> Arena</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                            Enter the arena. Build your strategy, challenge rival kings,
                            and fight your way to the top. Every move matters, every
                            decision shapes the battlefield, and only one faction can
                            claim the crown.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">

                            <button
                                onClick={() => {
                                    window.open(
                                        "https://www.chess.com/club/clash-of-kings-3/join/4e0b3b?utm_campaign=club_invite_link&utm_source=chesscom&utm_medium=copy",
                                        "_blank"
                                    );
                                }}
                                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600 border border-purple-500/40 shadow-xl shadow-purple-950/50 hover:shadow-purple-900/40 hover:scale-[1.02] transition-all group"
                            >
                                <Swords
                                    size={18}
                                    className="group-hover:rotate-12 transition-transform"
                                />
                                <span>Enter the Arena</span>
                            </button>

                            <a
                                href="/get-your-agent"
                                className="flex items-center justify-center gap-2 bg-slate-900/80 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all font-semibold text-sm"
                            >
                                <Shield size={16} />
                                <span>View Rules</span>
                            </a>

                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-5 pt-8 border-t border-slate-900 max-w-xl">

                            <div>
                                <p className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                                    <Crown size={16} className="text-purple-300" />
                                    24
                                </p>
                                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-1">
                                    Players
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-emerald-400 font-serif flex items-center gap-2">
                                    <Shield size={16} className="text-emerald-400" />
                                    LIVE
                                </p>
                                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-1">
                                    Arena Status
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                                    <Trophy size={16} className="text-purple-400" />
                                    ₦50K
                                </p>
                                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-1">
                                    Grand Prize
                                </p>
                            </div>

                        </div>

                        {/* Live System Indicators */}
                        <div className="pt-1 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-slate-600 uppercase tracking-wide">

                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Arena Online</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                <span>Matchmaking Active</span>
                            </div>

                            <div>
                                ⚔️ Anti-Cheat Enabled
                            </div>

                        </div>

                    </div>

                    {/* ==========================================
            RIGHT — ARENA DEVICE PREVIEW
        ========================================== */}
                    <div className="hidden md:flex md:col-span-5 justify-center">

                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-purple-600/10 blur-3xl scale-110" />

                            {/* Phone */}
                            <div className="relative w-80 h-[590px] bg-gradient-to-b from-purple-950/40 to-slate-950 border border-purple-900/50 rounded-[48px] p-3.5 shadow-2xl shadow-purple-950/30">

                                <div className="w-full h-full bg-slate-950 rounded-[38px] border border-purple-950/80 p-6 flex flex-col justify-between relative overflow-hidden">

                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-b-2xl border-x border-b border-purple-900/40" />

                                    {/* Top */}
                                    <div className="pt-8 space-y-5">

                                        <div className="flex items-center justify-between">

                                            <div>
                                                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                                                    Clash of Kings
                                                </p>

                                                <p className="text-sm font-bold text-white mt-1">
                                                    Royal Arena
                                                </p>
                                            </div>

                                            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                                <Crown size={17} />
                                            </div>

                                        </div>

                                        {/* Turn */}
                                        <div className="flex items-center justify-between">

                                            <span className="text-[9px] font-mono text-slate-500 uppercase">
                                                Current Battle
                                            </span>

                                            <span className="px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-900/20 text-[9px] font-mono text-purple-300 font-bold uppercase animate-pulse">
                                                Your Turn
                                            </span>

                                        </div>

                                        {/* Board */}
                                        <div className="grid grid-cols-4 gap-1.5 p-2.5 bg-purple-950/20 border border-purple-900/40 rounded-xl">

                                            {[...Array(16)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`aspect-square rounded-sm flex items-center justify-center text-sm font-serif ${(Math.floor(i / 4) + i) % 2 === 0
                                                        ? "bg-purple-900/40 text-purple-300"
                                                        : "bg-slate-900 text-slate-500"
                                                        }`}
                                                >
                                                    {i === 2 && "♞"}
                                                    {i === 5 && "♛"}
                                                    {i === 7 && "♟"}
                                                    {i === 10 && "♜"}
                                                    {i === 12 && "♔"}
                                                </div>
                                            ))}

                                        </div>

                                        {/* Battle Log */}
                                        <div className="space-y-2">

                                            <div className="flex items-center justify-between">
                                                <span className="text-[9px] font-mono text-slate-500 uppercase">
                                                    Battle Analysis
                                                </span>

                                                <span className="text-[9px] font-mono text-purple-400">
                                                    +1.4
                                                </span>
                                            </div>

                                            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                                                <div className="h-full w-[68%] bg-gradient-to-r from-purple-700 to-indigo-500 rounded-full" />
                                            </div>

                                        </div>

                                    </div>

                                    {/* Bottom Battle Panel */}
                                    <div className="bg-purple-950/30 border border-purple-900/40 p-4 rounded-xl space-y-4 backdrop-blur-sm">

                                        <div className="flex items-center justify-between">

                                            <div>
                                                <p className="text-[9px] font-mono text-slate-500 uppercase">
                                                    Challenger
                                                </p>

                                                <p className="text-xs font-bold text-white mt-1">
                                                    King Arthur
                                                </p>
                                            </div>

                                            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                                                <Shield size={14} className="text-purple-400" />
                                            </div>

                                        </div>

                                        {/* Clocks */}
                                        <div className="flex gap-2">

                                            <div className="flex-1 bg-slate-950 border border-slate-900 p-2 rounded-md text-center">
                                                <p className="text-[8px] font-mono text-slate-500 uppercase">
                                                    Player
                                                </p>
                                                <p className="text-sm font-mono font-bold text-white">
                                                    04:12
                                                </p>
                                            </div>

                                            <div className="flex-1 bg-purple-900/30 border border-purple-700/30 p-2 rounded-md text-center">
                                                <p className="text-[8px] font-mono text-purple-400 uppercase">
                                                    Rival
                                                </p>
                                                <p className="text-sm font-mono font-bold text-purple-300">
                                                    03:45
                                                </p>
                                            </div>

                                        </div>

                                        {/* Action */}
                                        <button
                                            className="w-full py-2.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-purple-600/30 transition-colors"
                                        >
                                            Make Your Move
                                        </button>

                                    </div>

                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -right-8 top-24 px-3 py-2 bg-slate-900/90 border border-purple-900/60 rounded-lg shadow-xl backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[9px] font-mono text-slate-300 uppercase tracking-wider">
                                        Battle Live
                                    </span>
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