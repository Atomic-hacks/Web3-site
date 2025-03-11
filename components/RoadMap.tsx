import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ShillXRoadmapTimeline() {
  const roadmapData = [
    {
      title: "Q2 2025: Foundation",
      content: (
        <div>
          <p className="text-neutral-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Establishing the groundwork for a revolutionary blockchain ecosystem
          </p>
          <div className="mb-8 space-y-2">
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Assemble elite development team with blockchain expertise
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Smart contract development with multi-layer security architecture
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Comprehensive third-party security audits (CertiK, Hacken)
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Deploy interactive tokenomics whitepaper and immersive 3D website
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Establish treasury reserve and liquidity strategy
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-sky-600/70 via-blue-700/70 to-cyan-400/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">🔐</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">Smart Contract</span>
              </div>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-sky-600/70 via-cyan-700/70 to-blue-400/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">Security Audit</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q3 2025: Community Expansion",
      content: (
        <div>
          <p className="text-neutral-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Building a vibrant, engaged community through strategic initiatives and viral growth mechanisms
          </p>
          <div className="mb-8 space-y-2">
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Global community-building through multi-platform engagement
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Strategic airdrops with tiered rewards for early adopters
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                AI-powered referral system with on-chain verification
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Decentralized Ambassador Program across 25+ countries
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Interactive educational platform for blockchain fundamentals
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-sky-500/70 via-blue-700/70 to-cyan-500/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">Community Growth</span>
              </div>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-blue-700/70 via-cyan-500/70 to-sky-800/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">🔄</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">Referral Program</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q4 2025: Launch & Ecosystem",
      content: (
        <div>
          <p className="text-neutral-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deploying $SHILLX token with strategic market positioning and maximizing visibility
          </p>
          <div className="mb-8 space-y-2">
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Multi-chain launch across Ethereum, Solana, and BNB Chain
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Deep liquidity pools with dynamic LP incentives
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Fast-tracked CoinMarketCap and CoinGecko listings
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Incentivized community shilling campaigns with verifiable metrics
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Strategic partnerships with top-tier crypto influencers
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-sky-700/70 via-blue-500/70 to-cyan-800/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">Token Launch</span>
              </div>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-cyan-500/70 via-blue-500/70 to-sky-500/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">Market Visibility</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026: Exponential Growth",
      content: (
        <div>
          <p className="text-neutral-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Scaling the $SHILLX ecosystem through advanced integrations and strategic expansion
          </p>
          <div className="mb-8 space-y-2">
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Tier-1 centralized exchange listings (Binance, Coinbase)
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Strategic partnerships with leading DeFi protocols
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Launch of $SHILLX NFT collection with utility integrations
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Advanced staking mechanisms with compounding rewards
              </div>
            </div>
            <div className="bg-sky-800/50 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-lg">
              <div className="text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
                Transition to community-governed DAO with on-chain voting
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-blue-800/70 via-sky-700/70 to-cyan-600/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">CEX Integration</span>
              </div>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-gradient-to-br from-cyan-800/70 via-sky-600/70 to-blue-700/70 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">🗳️</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl text-center">DAO Governance</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={roadmapData} />
    </div>
  );
}