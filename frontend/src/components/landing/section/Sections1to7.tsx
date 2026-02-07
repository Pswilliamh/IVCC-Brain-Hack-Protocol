import PatternInterruptGraphic from '../components/PatternInterruptGraphic';
import AnchorProtocol from '../components/AnchorProtocol';
import { ArrowRight, X } from 'lucide-react';

export default function Sections1to7() {
  return (
    <section className="py-24 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Try vs Execute Comparison */}
          <div className="bg-charcoal border border-slate/20 rounded-sm p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              The <span className="text-gold">Try vs Execute</span> Paradigm
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <X className="h-6 w-6 text-destructive" />
                  <h4 className="text-xl font-bold text-white">TRY</h4>
                </div>
                <p className="text-slate-light text-lg mb-4">Permission to fail</p>
                <p className="text-slate-light leading-relaxed">
                  "Try" is a survival word that programs your nervous system for optional completion. 
                  It's a linguistic escape hatch that keeps you in reactive mode, never fully committing 
                  to outcomes.
                </p>
              </div>

              <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="h-6 w-6 text-gold" />
                  <h4 className="text-xl font-bold text-white">EXECUTE</h4>
                </div>
                <p className="text-gold text-lg mb-4">Command to complete</p>
                <p className="text-slate-light leading-relaxed">
                  "Execute" is a sovereign command that programs completion. It shifts you from hoping 
                  for results to authorizing outcomes. This single word change rewires your executive function.
                </p>
              </div>
            </div>
          </div>

          {/* Week-End Myth Callout with Pattern Interrupt */}
          <div className="bg-gradient-to-br from-charcoal to-charcoal-light border border-gold/30 rounded-sm p-8 md:p-12 shadow-gold-subtle">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                The <span className="text-gold">Week-End Myth</span>
              </h3>
              <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
            </div>

            <PatternInterruptGraphic />

            <div className="mt-8 space-y-4">
              <p className="text-slate-light text-lg leading-relaxed">
                Every Friday, millions of professionals say "Have a nice weekend" without realizing they're 
                programming a biological crash. The phrase "week-end" literally encodes "weak end"—a command 
                that triggers the Sunday night dread and Monday morning fatigue cycle.
              </p>
              <div className="bg-gold/10 border border-gold/30 rounded-sm p-6">
                <p className="text-white text-lg font-semibold mb-2">The Power Shift:</p>
                <p className="text-slate-light leading-relaxed">
                  Replace "Have a nice weekend" with <span className="text-gold font-bold">"Enjoy your Family-Time"</span>. 
                  This simple swap stops the Friday energy crash and reframes rest as intentional, valuable time 
                  rather than a weak ending to your productive week.
                </p>
              </div>
            </div>
          </div>

          {/* Career & Authority Hacks */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Career & Authority <span className="text-gold">Language Shifts</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-charcoal border border-slate/20 rounded-sm p-6">
                <h4 className="text-xl font-bold text-destructive mb-4">Weakness Trap</h4>
                <ul className="space-y-3 text-slate-light">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"I'm sorry"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"I hate to bother you"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"I'm tied up"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"Just checking in"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal border border-gold/30 rounded-sm p-6">
                <h4 className="text-xl font-bold text-gold mb-4">Power Shift</h4>
                <ul className="space-y-3 text-slate-light">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"Thank you for your patience"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"I have an update"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"I am focused elsewhere"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"Following up on our timeline"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wealth Frequency Hacks */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Wealth Frequency <span className="text-gold">Transformations</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-charcoal border border-slate/20 rounded-sm p-6">
                <h4 className="text-xl font-bold text-destructive mb-4">Crisis Trap</h4>
                <ul className="space-y-3 text-slate-light">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"Saving for a rainy day"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"Costs an arm and a leg"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>"Money doesn't grow on trees"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal border border-gold/30 rounded-sm p-6">
                <h4 className="text-xl font-bold text-gold mb-4">Asset Shift</h4>
                <ul className="space-y-3 text-slate-light">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"Storing for Opportunity"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"High-value Investment"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>"Resources are Abundant"</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-sm p-6">
              <p className="text-slate-light leading-relaxed">
                <span className="text-gold font-semibold">The Concept:</span> Saving for a rainy day manifests 
                a storm, while storing for opportunity manifests growth. Your financial language creates your 
                financial reality.
              </p>
            </div>
          </div>

          {/* Anchor Protocol */}
          <AnchorProtocol />

          {/* Section 7: Seed Opportunity */}
          <div className="bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/50 rounded-sm p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              You have upgraded your software.
            </h3>
            <p className="text-2xl text-gold font-semibold mb-8">
              Now, seed into the movement.
            </p>
            <p className="text-slate-light text-lg leading-relaxed max-w-3xl mx-auto">
              This Brain Hack is part of a larger global wellness initiative. Your contribution helps 
              authorize these linguistic upgrades for cities and nations, empowering the next generation 
              of thinkers with truth through the Mother Heart Project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
