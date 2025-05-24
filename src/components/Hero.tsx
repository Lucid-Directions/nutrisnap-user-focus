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
                onClick={() => scrollToSection("early-access")}
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
                <div className="w-full h-full overflow-hidden rounded-lg" style={{ width: "400px", height: "500px" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&h=1000&q=80" 
                    alt="Healthy Food Analysis" 
                    className="w-full h-full object-cover rounded-lg"
                  />
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
