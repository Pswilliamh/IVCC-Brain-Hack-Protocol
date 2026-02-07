import { Heart, Download } from 'lucide-react';
import { SOURCE_CODE_ZIP_PATH } from '../../config/landing';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-slate/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Download Source Code Link */}
          <div className="pb-4 border-b border-slate/10">
            <a
              href={SOURCE_CODE_ZIP_PATH}
              download="full-project-source.zip"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-semibold text-sm group"
            >
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download Source Code (ZIP)
            </a>
            <p className="text-slate-light/70 text-xs mt-2">
              Get the complete project source code including frontend and backend
            </p>
          </div>

          {/* Copyright */}
          <p className="text-slate-light text-sm">
            © 2026. Built with <Heart className="inline h-4 w-4 text-gold fill-gold" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
