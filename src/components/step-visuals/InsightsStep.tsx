
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface InsightsStepProps extends React.HTMLAttributes<HTMLDivElement> {}

const InsightsStep = ({ className, ...props }: InsightsStepProps) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="relative overflow-hidden rounded-xl border border-green-100 shadow-md bg-white">
        <AspectRatio ratio={9/16} className="bg-gradient-to-b from-green-50 to-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-64 h-[32rem] max-w-full border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl bg-white">
              <div className="h-6 bg-gray-800 w-full flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="h-full bg-white p-3 flex flex-col">
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-gray-800">Glucose Impact</h4>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-40 bg-white rounded-lg mb-2 flex items-center justify-center">
                    {/* SVG Graph mockup */}
                    <svg width="100%" height="100%" viewBox="0 0 200 100" className="overflow-visible">
                      {/* Background grid */}
                      <line x1="0" y1="25" x2="200" y2="25" stroke="#e5e7eb" strokeWidth="1" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                      <line x1="0" y1="75" x2="200" y2="75" stroke="#e5e7eb" strokeWidth="1" />
                      
                      {/* Glucose curve */}
                      <path 
                        d="M0,80 C20,78 40,65 60,40 C80,15 100,10 120,20 C140,30 160,60 200,75" 
                        fill="none" 
                        stroke="#16a34a" 
                        strokeWidth="3"
                      />
                      
                      {/* Optimal zone */}
                      <rect x="0" y="40" width="200" height="30" fill="#bbf7d0" fillOpacity="0.3" />
                      
                      {/* Markers */}
                      <circle cx="60" cy="40" r="4" fill="#16a34a" />
                      <circle cx="120" cy="20" r="4" fill="#16a34a" />
                    </svg>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">0</span>
                      <span className="text-gray-500">1h</span>
                      <span className="text-gray-500">2h</span>
                      <span className="text-gray-500">3h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-600">Optimal range</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-800 mb-1">Meal Impact</h5>
                    <p className="text-xs text-gray-600 mb-2">This meal has a moderate glucose impact with a peak at 45 minutes.</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-amber-500 rounded"></div>
                      <p className="text-xs text-gray-600">Consider adding more protein to balance the response.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">See how meals affect your glucose levels with personalized prediction curves</p>
      </div>
    </div>
  );
};

export default InsightsStep;
