import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetabolicResponseStep from "@/components/step-visuals/MetabolicResponseStep";

const AppPreview = () => {
  console.log("AppPreview component rendering");
  
  return (
    <section id="app-preview" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A First Look at NutriSnap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get a sneak peek at how NutriSnap will transform your understanding of food and its impact on your body.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Preview 1: Snap or Upload */}
          <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
            <div className="bg-white p-6 pt-0">
              <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Food Photography Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meal Analysis</h3>
              <p className="text-gray-600">
                Simply snap a photo or upload an image to get comprehensive nutritional insights in seconds.
              </p>
            </div>
          </Card>
          
          {/* Preview 2: Glucose Impact - REPLACED WITH ACTUAL VISUALIZATION */}
          <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
            <div className="bg-white p-6 pt-0">
              <div className="h-64 rounded-lg mb-6 overflow-hidden">
                {console.log("About to render MetabolicResponseStep")}
                <MetabolicResponseStep />
              </div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold">Glucose Prediction</h3>
                <Badge variant="default" className="ml-2 bg-green-600">Premium</Badge>
              </div>
              <p className="text-gray-600">
                See how your meals affect your blood sugar with personalized glucose response curves and key metrics.
              </p>
            </div>
          </Card>
          
          {/* Preview 3: Learn & Improve */}
          <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
            <div className="bg-white p-6 pt-0">
              <div className="h-64 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Educational Resources" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Knowledge Hub</h3>
              <p className="text-gray-600">
                Explore our comprehensive knowledge base with articles on metabolic health, glucose regulation, and nutrition science.
              </p>
            </div>
          </Card>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          {/* Mobile App Preview */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-600 to-green-400 opacity-20 blur"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl max-w-sm mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="NutriSnap Mobile App Analytics" 
                  className="rounded-2xl shadow-sm w-full object-cover"
                  style={{ aspectRatio: '9/16' }}
                />
              </div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Visualize Your Metabolic Response</h3>
            <p className="text-gray-600 mb-6">
              Track how meals affect your glucose levels with our interactive glucose curve visualization, 
              helping you make informed dietary choices.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Personalized glucose response prediction</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Color-coded ranges for easy understanding</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Historical meal comparison</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Smart nutritional advice</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 mt-16">
          {/* Mobile App Preview */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-600 to-green-400 opacity-20 blur"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl max-w-sm mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Educational Content Interface" 
                  className="rounded-2xl shadow-sm w-full object-cover"
                  style={{ aspectRatio: '9/16' }}
                />
              </div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Expand Your Nutritional Knowledge</h3>
            <p className="text-gray-600 mb-6">
              Browse our comprehensive knowledge base to deepen your understanding of nutrition science, 
              metabolic health, and the glycemic impact of foods.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Featured articles by nutrition experts</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Browse content by category</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Searchable knowledge base</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Regularly updated with latest research</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          {/* Mobile App Preview */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-600 to-green-400 opacity-20 blur"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl max-w-sm mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Food Analysis Interface" 
                  className="rounded-2xl shadow-sm w-full object-cover"
                  style={{ aspectRatio: '9/16' }}
                />
              </div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Snap & Analyze Any Meal</h3>
            <p className="text-gray-600 mb-6">
              Simply take a photo or upload an image of your meal and get instant nutritional analysis 
              powered by our advanced AI.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Simple one-tap photo capture</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Quick image upload option</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Instant AI-powered analysis</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Detailed nutritional breakdown</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-500 italic mb-6">
            These features and more will be available when NutriSnap launches. Join our waiting list to be among the first to experience the future of nutrition tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
