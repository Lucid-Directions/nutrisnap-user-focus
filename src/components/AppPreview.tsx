
const AppPreview = () => {
  const screenshots = [
    {
      title: "Learn Hub",
      description: "Explore our comprehensive knowledge base with articles on metabolic health, glucose regulation, and nutrition science."
    },
    {
      title: "Meal Tracker",
      description: "Monitor your nutrition trends over time with intuitive visualizations and insightful statistics."
    },
    {
      title: "Glucose Prediction",
      description: "See how your meals affect your blood sugar with personalized glucose response curves and key metrics."
    },
    {
      title: "Ingredient Analysis",
      description: "Our AI instantly identifies ingredients in your meals and provides detailed nutritional breakdown."
    },
    {
      title: "Meal Analysis",
      description: "Simply snap a photo or upload an image to get comprehensive nutritional insights in seconds."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A First Look at NutriSnap</h2>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                {/* Screenshot placeholder */}
                <div className="h-[580px] bg-gray-100 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-600/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 21h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <path d="M21 16V8a2 2 0 0 0-2-2h-4"></path>
                        <path d="M9 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"></path>
                      </svg>
                    </div>
                    <p className="text-green-600 font-medium">Screenshot Preview</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{screenshot.title}</h3>
                  <p className="text-gray-600 text-sm">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            These features and more will be available when NutriSnap launches. Join our waiting list to be among the first to experience the future of nutrition tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
