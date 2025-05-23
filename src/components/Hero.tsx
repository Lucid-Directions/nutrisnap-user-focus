
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              NutriSnap: Revolutionizing Metabolic Health, One Snap at a Time
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Understand your food's impact instantly with AI-powered meal analysis that puts metabolic health in your hands.
            </p>
            <p className="text-gray-600 mb-8">
              NutriSnap uses advanced AI to analyze your meals from a simple photo, providing detailed nutritional insights and predicting glucose response to empower smarter, healthier choices—no expensive devices required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Join the Waiting List
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => scrollToSection("how-it-works")}
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-green-400 opacity-30 blur"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80" 
                  alt="Healthy Food Analysis" 
                  className="rounded-lg w-full max-w-md mx-auto"
                  style={{ aspectRatio: '9/16' }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600/90 rounded-full p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
