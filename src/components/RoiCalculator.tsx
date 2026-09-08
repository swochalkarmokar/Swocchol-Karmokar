import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onGetCustomStrategy: (calcData: { adSpend: number; manualHours: number; estAddedRevenue: number; estHoursSaved: number }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onGetCustomStrategy }) => {
  const [adSpend, setAdSpend] = useState<number>(10000);
  const [manualHours, setManualHours] = useState<number>(25);

  // Estimations
  // Conservative 35% ROAS improvement on current ad spend
  const estAddedRevenue = Math.round(adSpend * 0.42);
  // Conservative 70% automation of repetitive manual tasks via n8n
  const estHoursSaved = Math.round(manualHours * 0.72);
  const estAnnualValue = estAddedRevenue * 12 + estHoursSaved * 4 * 40 * 12;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-blue-500/30 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI & AUTOMATION ESTIMATOR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Calculate Your Untapped Growth Potential
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mt-2">
            Adjust your current monthly marketing spend and manual operational hours to project estimated gains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Slider 1: Monthly Ad Spend */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-blue-400" />
                  Monthly Ad Budget:
                </span>
                <span className="text-base font-bold font-display text-blue-400">
                  ${adSpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                <span>$1,000</span>
                <span>$50,000</span>
                <span>$100,000+</span>
              </div>
            </div>

            {/* Slider 2: Weekly Manual Team Hours */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Weekly Manual Team Hours:
                </span>
                <span className="text-base font-bold font-display text-emerald-400">
                  {manualHours} hrs / week
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                <span>5 hrs</span>
                <span>60 hrs</span>
                <span>120+ hrs</span>
              </div>
            </div>
          </div>

          {/* Results Projection Column */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-blue-500/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-4 mb-6">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">
                Estimated Monthly Value Unlocked:
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <span className="text-[11px] text-slate-400 block mb-1">Added Net Revenue</span>
                  <div className="text-xl sm:text-2xl font-bold font-display text-emerald-400">
                    +${estAddedRevenue.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">per month</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <span className="text-[11px] text-slate-400 block mb-1">Time Saved via n8n</span>
                  <div className="text-xl sm:text-2xl font-bold font-display text-blue-400">
                    {estHoursSaved} hrs
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">freed up weekly</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onGetCustomStrategy({ adSpend, manualHours, estAddedRevenue, estHoursSaved })}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <span>Apply This Model to My Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
