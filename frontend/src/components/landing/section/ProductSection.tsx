import { CheckCircle2, FileText, Zap } from 'lucide-react';

export default function ProductSection() {
  const sections = [
    {
      number: '01',
      title: 'The Operating System Audit',
      subtitle: 'The Introduction',
      description: 'Frame language as biological technology. Identify "Frequency Parasites" in your vocabulary and understand how words program your nervous system for fatigue and crisis.'
    },
    {
      number: '02',
      title: 'The Core Identity Reset',
      subtitle: 'The "25-Word" Foundation',
      description: 'Replace survival words (Want, Need, Try, Should, Hope) with sovereign commands (Intend, Authorize, Execute, Choose, Expect). Fix your internal processing logic.'
    },
    {
      number: '03',
      title: 'The Career & Authority Hacks',
      subtitle: 'Business Performance',
      description: 'Eliminate status-lowering phrases like "I\'m sorry" and "Just checking in." Replace with power language that increases influence in professional settings.'
    },
    {
      number: '04',
      title: 'The Wealth Frequency Hacks',
      subtitle: 'Financial Mindset',
      description: 'Remove poverty frequency idioms. Transform "Saving for a rainy day" into "Storing for Opportunity." Shift from scarcity spells to abundance encoding.'
    },
    {
      number: '05',
      title: 'The "Anchor" Protocol',
      subtitle: 'How to Lock It In',
      description: 'Make changes biologically binding using Statements of Truth. Learn the 3-step method to catch, swap, and anchor new linguistic patterns.'
    },
    {
      number: '06',
      title: 'The Visual Perimeter',
      subtitle: 'Printable Tools',
      description: 'Guard your environment with the Monitor Strip and 25-Word Checklist. Physical tools designed for office workers to maintain frequency integrity.'
    },
    {
      number: '07',
      title: 'The "Seed" Opportunity',
      subtitle: 'The Outro',
      description: 'Join the global wellness movement. Your contribution authorizes these upgrades for cities and nations through the Mother Heart Project.'
    }
  ];

  return (
    <section className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-gold">25-Word PDF Checklist</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-light max-w-3xl mx-auto leading-relaxed">
              A comprehensive system featuring the <span className="text-gold font-semibold">Trap</span>, 
              the <span className="text-gold font-semibold">Success Alternative</span>, and 
              the <span className="text-gold font-semibold">Statement of Truth</span>.
            </p>
          </div>

          {/* Three Core Elements */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-charcoal-light border border-slate/20 rounded-sm p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">The Trap</h3>
              <p className="text-slate-light">Legacy words that program stress, scarcity, and fatigue</p>
            </div>

            <div className="bg-charcoal-light border border-gold/30 rounded-sm p-6 text-center shadow-gold-subtle">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Success Alternative</h3>
              <p className="text-slate-light">Sovereign commands that authorize executive governance</p>
            </div>

            <div className="bg-charcoal-light border border-slate/20 rounded-sm p-6 text-center">
              <div className="w-12 h-12 bg-slate/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-slate-light" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Statement of Truth</h3>
              <p className="text-slate-light">Anchoring whispers that lock in biological change</p>
            </div>
          </div>

          {/* PDF Promo Pack Sections */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              PDF Promo Pack <span className="text-gold">Includes</span>
            </h3>
            {sections.map((section) => (
              <div
                key={section.number}
                className="bg-charcoal-light/50 backdrop-blur-sm border border-slate/20 rounded-sm p-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center">
                      <span className="text-2xl font-bold text-gold">{section.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{section.title}</h4>
                    <p className="text-gold text-sm font-semibold mb-3">{section.subtitle}</p>
                    <p className="text-slate-light leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
