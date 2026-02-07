import { CheckCircle2 } from 'lucide-react';

export default function AnchorProtocol() {
  return (
    <div className="bg-charcoal border border-gold/30 rounded-sm p-8 md:p-12">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">
        The <span className="text-gold">Anchor Protocol</span>
      </h3>
      <p className="text-slate-light text-lg text-center mb-8 max-w-3xl mx-auto">
        Make the change biologically binding using Statements of Truth. This 3-step method locks in 
        new linguistic patterns at the subconscious level.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-charcoal-light border border-slate/20 rounded-sm p-6 text-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-gold">1</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Stop</h4>
          <p className="text-slate-light">Catch yourself mid-sentence when using a Trap word</p>
        </div>

        <div className="bg-charcoal-light border border-slate/20 rounded-sm p-6 text-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-gold">2</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Swap</h4>
          <p className="text-slate-light">Replace immediately with the Asset word</p>
        </div>

        <div className="bg-charcoal-light border border-slate/20 rounded-sm p-6 text-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-gold">3</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Anchor</h4>
          <p className="text-slate-light">Whisper the Statement of Truth to lock it in</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white mb-4">Examples:</h4>
        
        <div className="bg-charcoal-light/50 border-l-4 border-gold p-6 rounded-sm">
          <div className="flex items-start gap-3 mb-2">
            <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-white font-semibold mb-1">Correction:</p>
              <p className="text-slate-light mb-3">"I authorize the action."</p>
              <p className="text-gold font-semibold mb-1">Anchor (whisper):</p>
              <p className="text-slate-light italic">"I release the supply."</p>
            </div>
          </div>
        </div>

        <div className="bg-charcoal-light/50 border-l-4 border-gold p-6 rounded-sm">
          <div className="flex items-start gap-3 mb-2">
            <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-white font-semibold mb-1">Correction:</p>
              <p className="text-slate-light mb-3">"I intend to build."</p>
              <p className="text-gold font-semibold mb-1">Anchor (whisper):</p>
              <p className="text-slate-light italic">"I build foundations."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
