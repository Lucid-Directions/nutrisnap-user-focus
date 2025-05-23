
const Benefits = () => {
  const benefits = [
    {
      title: "Effortless Tracking",
      subtitle: "Zero Manual Entry",
      description: "Forget tedious logging. NutriSnap identifies ingredients and analyzes nutrition from a simple photo, making healthy choices fit into your busy life."
    },
    {
      title: "Personalized Insights",
      subtitle: "Understand YOUR Body",
      description: "Discover how specific meals affect your unique metabolism with personalized glucose impact predictions and tailored recommendations."
    },
    {
      title: "Smart Food Diary",
      subtitle: "Patterns & Progress",
      description: "Your secure food diary automatically tracks your journey, identifies patterns, and syncs across all your devices through encrypted cloud storage."
    },
    {
      title: "Actionable Recommendations",
      subtitle: "Small Changes, Big Results",
      description: "Receive practical suggestions to improve meal composition for better metabolic outcomes, making healthy choices simple and sustainable."
    },
    {
      title: "Evidence-Based Education",
      subtitle: "Knowledge is Power",
      description: "Access our extensive library of nutrition science resources to better understand the relationship between food and metabolic health."
    }
  ];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why You'll Love NutriSnap</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="mb-4 text-green-600">
                {/* Icon placeholder */}
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10"></path>
                    <path d="M8 12.5A3.5 3.5 0 0 1 11.5 9H17"></path>
                    <path d="m14 7 3 3-3 3"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h3>
              <h4 className="text-green-600 font-medium mb-2">{benefit.subtitle}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
