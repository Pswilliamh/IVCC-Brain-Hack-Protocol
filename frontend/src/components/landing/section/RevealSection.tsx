import { AlertCircle, TrendingDown } from 'lucide-react';

export default function RevealSection() {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/generated/neural-network.dim_1920x1080.png"
          alt="Neural network"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-gold">Reveal</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            <div className="bg-charcoal/80 backdrop-blur-sm border border-slate/20 rounded-sm p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Common Words Are <span className="text-gold">Sabotaging Your Biology</span>
                  </h3>
                  <p className="text-slate-light text-lg leading-relaxed mb-6">
                    Your vocabulary is not just communication—it's a biological technology that programs your nervous system. 
                    Most professionals unknowingly run on 'Legacy Software' filled with frequency parasites that trigger 
                    stress responses, fatigue patterns, and scarcity mindsets.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-charcoal/60 backdrop-blur-sm border-l-4 border-destructive p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                  <h4 className="text-xl font-bold text-white">Weekend (Weak-End)</h4>
                </div>
                <p className="text-slate-light leading-relaxed">
                  Every Friday, you're programming your nervous system for a "weak end"—a biological command 
                  that triggers the energy crash you feel before Monday. This isn't rest; it's linguistic sabotage 
                  that keeps you in survival mode.
                </p>
              </div>

              <div className="bg-charcoal/60 backdrop-blur-sm border-l-4 border-destructive p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                  <h4 className="text-xl font-bold text-white">Saving for a Rainy Day (Crisis Magnet)</h4>
                </div>
                <p className="text-slate-light leading-relaxed">
                  This phrase literally programs your subconscious to manifest crisis. You're not preparing for 
                  opportunity—you're encoding scarcity and waiting for disaster. Your words create your reality, 
                  and this idiom creates storms.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-sm p-6 mt-8">
              <p className="text-slate-light text-lg leading-relaxed">
                <span className="text-gold font-semibold">The Goal:</span> Move from "Survival Mode" (Reacting) 
                to "Executive Governance" (Authorizing). Your linguistic operating system determines whether you're 
                running commands or being commanded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
