import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PAYPAL_URL, CTA_LABELS } from '../../../config/landing';

export default function WordAwarenessResetSection() {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Correct the Words That Are Daily Controlling You, and Your Life.
          </h2>
          
          <div className="h-1 w-24 bg-gold mx-auto rounded-full mb-8" />
          
          <p className="text-2xl md:text-3xl text-slate-light font-semibold mb-12">
            A 7-Day Word Awareness Reset for Couples & Professionals.
          </p>

          {/* Bullet List */}
          <div className="bg-charcoal border border-slate/20 rounded-sm p-8 md:p-12 mb-10">
            <ul className="text-lg md:text-xl text-slate-light max-w-3xl mx-auto text-left space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-4 flex-shrink-0 text-2xl">•</span>
                <span>Stop internal reactive language loops</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-4 flex-shrink-0 text-2xl">•</span>
                <span>Stop Interrupt escalation patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-4 flex-shrink-0 text-2xl">•</span>
                <span>Build response-based communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-4 flex-shrink-0 text-2xl">•</span>
                <span>Stabilize internal authority</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-4 flex-shrink-0 text-2xl">•</span>
                <span>Develop Response-Ability Lifestyle</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-10 py-7 rounded-sm shadow-gold"
              onClick={() => window.open(PAYPAL_URL, '_blank')}
            >
              {CTA_LABELS.PRIMARY}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
