
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-green-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Powerful, Personalized</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-4a2 2 0 0 1 2-2h4"></path>
                <path d="M11 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                <path d="M9 3v4a2 2 0 0 0 2 2h4"></path>
                <path d="M12 8v13"></path>
                <path d="M9 14.5L12 12l3 2.5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Step 1: Snap or Upload</h3>
            <p className="text-gray-600 text-center">
              Take a photo of any meal with your phone's camera or upload an existing food photo. NutriSnap works with home-cooked meals, restaurant dishes, packaged foods, and everything in between.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 22H9a2 2 0 0 1-2-2v-7"></path>
                <path d="M12 13V7"></path>
                <path d="M14 10l-2-3 -2 3"></path>
                <rect x="2" y="2" width="20" height="14" rx="2"></rect>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Step 2: Instant Analysis</h3>
            <p className="text-gray-600 text-center">
              Our advanced AI instantly identifies ingredients, portion sizes, and nutritional composition, providing a comprehensive breakdown of your meal's nutrients and predicting its impact on your glucose levels.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10"></path>
                <path d="M8 12.5A3.5 3.5 0 0 1 11.5 9H17"></path>
                <path d="m14 7 3 3-3 3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Step 3: Learn & Improve</h3>
            <p className="text-gray-600 text-center">
              Receive personalized insights, recommendations, and tips to optimize your meals for better metabolic health. Track patterns over time in your secure food diary and watch as small changes lead to significant improvements.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <AspectRatio ratio={16/9}>
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Preview Video Coming Soon</p>
                </div>
              </div>
            </AspectRatio>
            <div className="p-6 text-center">
              <p className="text-gray-800 font-medium">
                Get a sneak peek: Watch our preview video to see NutriSnap in action and be among the first to experience its power when we launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
