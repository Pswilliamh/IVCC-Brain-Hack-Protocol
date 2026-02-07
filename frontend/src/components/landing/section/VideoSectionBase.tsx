import { useState, useEffect } from 'react';
import { useLocationSearch } from '../../../hooks/useLocationSearch';
import { AlertCircle, Video } from 'lucide-react';

type ErrorType = 'unreachable' | 'playback' | null;

interface VideoSectionBaseProps {
  defaultSource: string;
  queryParamKey: string;
}

export default function VideoSectionBase({ defaultSource, queryParamKey }: VideoSectionBaseProps) {
  const searchParams = useLocationSearch();
  const videoOverride = searchParams.get(queryParamKey);
  const effectiveSource = videoOverride || defaultSource;
  
  const [errorType, setErrorType] = useState<ErrorType>(null);
  const [isChecking, setIsChecking] = useState(true);

  // Preflight check: verify video is reachable
  useEffect(() => {
    let cancelled = false;
    
    const checkVideoAvailability = async () => {
      setIsChecking(true);
      setErrorType(null);
      
      try {
        const response = await fetch(effectiveSource, { method: 'HEAD' });
        
        if (cancelled) return;
        
        if (!response.ok) {
          setErrorType('unreachable');
        }
      } catch (error) {
        if (cancelled) return;
        setErrorType('unreachable');
      } finally {
        if (!cancelled) {
          setIsChecking(false);
        }
      }
    };

    checkVideoAvailability();
    
    return () => {
      cancelled = true;
    };
  }, [effectiveSource]);

  const handleVideoError = () => {
    // If preflight passed but video still fails, it's a playback error
    if (errorType === null) {
      setErrorType('playback');
    }
  };

  const showFallback = errorType !== null;

  return (
    <section className="relative py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="relative rounded-sm overflow-hidden shadow-gold-glow bg-charcoal-light">
          {isChecking ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] bg-charcoal-light border border-slate/20">
              <Video className="w-12 h-12 text-slate/40 mb-4 animate-pulse" />
              <p className="text-slate text-lg">Loading video...</p>
            </div>
          ) : showFallback ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] bg-charcoal-light border border-slate/20 p-8">
              <AlertCircle className="w-16 h-16 text-gold mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {errorType === 'unreachable' ? 'Video Not Available' : 'Playback Error'}
              </h3>
              <p className="text-slate text-center mb-4 max-w-md">
                {errorType === 'unreachable' 
                  ? 'The video file could not be found or is currently unavailable.'
                  : 'An error occurred while trying to play the video.'}
              </p>
              <div className="bg-charcoal rounded-sm p-4 border border-slate/20 max-w-full overflow-x-auto">
                <p className="text-sm text-slate/70 mb-1">Attempted URL:</p>
                <code className="text-sm text-gold break-all">{effectiveSource}</code>
              </div>
            </div>
          ) : (
            <video
              controls
              className="w-full h-auto"
              onError={handleVideoError}
              preload="metadata"
            >
              <source src={effectiveSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
