import { Globe, Heart, Users } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/neural-network.dim_1920x1080.png"
          alt="Neural network"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Global <span className="text-gold">Wellness Mission</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart-City Initiatives</h3>
              <p className="text-slate-light leading-relaxed">
                Supporting infrastructure that elevates cognitive efficiency at the community level
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mother Heart Project</h3>
              <p className="text-slate-light leading-relaxed">
                A global wellness initiative empowering the next generation of thinkers with truth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Local Communities</h3>
              <p className="text-slate-light leading-relaxed">
                Building foundations for linguistic sovereignty in cities and nations worldwide
              </p>
            </div>
          </div>

          <div className="bg-charcoal border border-gold/30 rounded-sm p-8 md:p-10">
            <p className="text-slate-light text-lg leading-relaxed text-center mb-6">
              All contributions support local community infrastructures and smart-city initiatives. 
              Your donation helps authorize these linguistic upgrades for professionals, families, 
              and organizations globally.
            </p>
            <p className="text-gold text-center font-semibold text-xl">
              Help empower our next generation of Thinkers, with Truth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
