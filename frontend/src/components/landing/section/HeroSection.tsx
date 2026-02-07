import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PAYPAL_URL, CTA_LABELS } from '../../../config/landing';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-office.dim_1920x1080.png"
          alt="Professional office environment"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Stop the Subconscious Sabotage. Hack Your Professional Mindset, with easy to use verbal toolset.
          </h1>
          
          <div className="pt-4 pb-4">
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <p className="text-xl md:text-2xl text-slate-light leading-relaxed max-w-4xl mx-auto">
            Starts working within the subconscious immediately. The fastest way to move up in pay is through VERBAL FREQUENCY AWARENESS.
          </p>

          <p className="text-lg md:text-xl text-slate-light leading-relaxed max-w-4xl mx-auto">
            Most people are using 'Linguistic Spells' that program their brains for stress, scarcity, and fatigue. We provide the 25-word 'Brain Hack' to reverse negative encoding and stabilize your career success.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-8 py-6 rounded-sm shadow-gold"
              onClick={() => window.open(PAYPAL_URL, '_blank')}
            >
              {CTA_LABELS.PRIMARY}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6 rounded-sm"
              onClick={() => window.open(PAYPAL_URL, '_blank')}
            >
              {CTA_LABELS.SECONDARY}
            </Button>
          </div>

          <p className="text-sm text-slate-light/70 pt-4">
            Value-for-value donation model • Supporting the Mother Heart Project
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
