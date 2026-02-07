import { Button } from '@/components/ui/button';
import { Download, Monitor, FileText } from 'lucide-react';

export default function VisualPerimeterSection() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Visual <span className="text-gold">Perimeter</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-xl text-slate-light">
              Guard your environment against frequency leaks with printable tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-charcoal-light border border-slate/20 rounded-sm p-8 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Monitor Strip</h3>
              <p className="text-slate-light text-center mb-6 leading-relaxed">
                A slim vertical list of the Top 10 trap words designed to be taped to your computer 
                monitor. Perfect for office workers who need constant visual reminders.
              </p>
              <Button
                className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-sm"
                onClick={() => window.open('/assets/downloads/monitor-strip.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Monitor Strip
              </Button>
            </div>

            <div className="bg-charcoal-light border border-slate/20 rounded-sm p-8 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">25-Word Checklist</h3>
              <p className="text-slate-light text-center mb-6 leading-relaxed">
                The full one-page grid containing the Trap, the Hack, and the Anchor for quick reference. 
                Your complete linguistic operating system upgrade on a single sheet.
              </p>
              <Button
                className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-sm"
                onClick={() => window.open('/assets/downloads/25-word-checklist.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download 25-Word Checklist
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-sm p-6">
            <p className="text-slate-light text-center leading-relaxed">
              <span className="text-gold font-semibold">Pro Tip:</span> Print both tools and place them 
              in your workspace. Physical reminders create environmental accountability and accelerate 
              the reprogramming process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
