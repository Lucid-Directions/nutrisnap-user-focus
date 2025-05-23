
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
                  <h4 className="font-semibold text-gray-800">Metabolic Response</h4>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-3 p-2 border border-blue-200">
                    <div className="text-xs font-semibold text-blue-800 mb-1 flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="text-blue-600 mr-1">📊</span>
                        Glucose Response Curve
                      </span>
                      <span className="text-xs bg-blue-100 px-1 py-0.5 rounded">Live</span>
                    </div>
                    <div className="h-24 bg-white rounded border relative overflow-hidden">
                      <svg viewBox="0 0 120 60" className="w-full h-full">
                        {/* Grid background */}
                        <defs>
                          <pattern id="grid" width="12" height="6" patternUnits="userSpaceOnUse">
                            <path d="M 12 0 L 0 0 0 6" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Y-axis labels */}
                        <text x="8" y="12" fontSize="4" fill="#6b7280">180</text>
                        <text x="8" y="24" fontSize="4" fill="#6b7280">140</text>
                        <text x="8" y="36" fontSize="4" fill="#6b7280">100</text>
                        <text x="8" y="48" fontSize="4" fill="#6b7280">80</text>
                        
                        {/* Normal range zone */}
                        <rect x="12" y="30" width="100" height="12" fill="#10b981" fillOpacity="0.1" />
                        <text x="115" y="38" fontSize="3" fill="#10b981" textAnchor="end">Normal</text>
                        
                        {/* Glucose curve - realistic meal response */}
                        <path
                          d="M12,45 Q20,44 30,38 Q40,28 50,22 Q60,20 70,25 Q80,32 90,38 Q100,42 108,44"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        
                        {/* Peak marker */}
                        <circle cx="50" cy="22" r="2" fill="#ef4444" />
                        <text x="50" y="18" fontSize="3" fill="#ef4444" textAnchor="middle">Peak</text>
                        
                        {/* Current point (animated) */}
                        <circle cx="70" cy="25" r="1.5" fill="#3b82f6">
                          <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite"/>
                          <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        
                        {/* Time markers */}
                        <line x1="24" y1="54" x2="24" y2="52" stroke="#9ca3af" strokeWidth="0.5" />
                        <line x1="48" y1="54" x2="48" y2="52" stroke="#9ca3af" strokeWidth="0.5" />
                        <line x1="72" y1="54" x2="72" y2="52" stroke="#9ca3af" strokeWidth="0.5" />
                        <line x1="96" y1="54" x2="96" y2="52" stroke="#9ca3af" strokeWidth="0.5" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0h</span>
                      <span>1h</span>
                      <span>2h</span>
                      <span>3h</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="text-xs text-blue-700 flex items-center">
                        <span className="mr-1">💡</span>
                        <span>Interactive tracking</span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">In range: 85%</div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h4 className="text-white font-semibold">Visualize Your Metabolic Response</h4>
            <p className="text-white/90 text-sm">Track how meals affect your glucose levels with interactive curves</p>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default InstantAnalysisStep;
