
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const InstantAnalysisStep = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg bg-white">
        <AspectRatio ratio={9/16} className="bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-64 h-[32rem] max-w-full border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl bg-white">
              <div className="h-6 bg-gray-800 w-full flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="h-full bg-white p-3 flex flex-col">
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-gray-800">Analyzing meal...</h4>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-40 bg-gray-100 rounded-lg mb-3 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-emerald-800 text-sm">Spaghetti Marinara</span>
                        <span className="text-xs bg-emerald-200 px-1 py-0.5 rounded">95% confident</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div className="text-center">
                          <div className="font-bold text-sm text-emerald-600">520</div>
                          <div className="text-gray-600 text-xs">Calories</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-sm text-orange-600">92g</div>
                          <div className="text-gray-600 text-xs">Carbs</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-sm text-blue-600">18g</div>
                          <div className="text-gray-600 text-xs">Protein</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-sm text-green-600">8g</div>
                          <div className="text-gray-600 text-xs">Fat</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-primary/10 text-xs">Spaghetti</Badge>
                      <Badge variant="outline" className="bg-primary/10 text-xs">Tomatoes</Badge>
                      <Badge variant="outline" className="bg-primary/10 text-xs">Basil</Badge>
                      <Badge variant="outline" className="bg-primary/10 text-xs">Garlic</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-gray-700">Macronutrients:</div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-xs">
                          <span>Carbs</span>
                          <span className="font-semibold">92g</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-xs">
                          <span>Protein</span>
                          <span className="font-semibold">18g</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-xs">
                          <span>Fat</span>
                          <span className="font-semibold">8g</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-green-400 h-1.5 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg border">
                      <div className="text-xs font-semibold text-gray-700 mb-1">Glucose Impact Preview</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                          <div className="text-xs text-gray-600">Peak: 165 mg/dL</div>
                        </div>
                        <div className="text-xs text-amber-600 font-medium">High Impact</div>
                      </div>
                      <div className="mt-1 h-6 bg-white rounded border relative overflow-hidden">
                        <svg viewBox="0 0 100 24" className="w-full h-full">
                          <polyline
                            points="5,20 15,18 25,14 35,9 45,6 55,11 65,15 75,17 85,19 95,20"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <circle cx="45" cy="6" r="1.5" fill="#ef4444" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h4 className="text-white font-semibold">Instant Analysis</h4>
            <p className="text-white/90 text-sm">AI identifies ingredients & glucose impact</p>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default InstantAnalysisStep;
