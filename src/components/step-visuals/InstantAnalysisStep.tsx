
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const InstantAnalysisStep = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <AspectRatio ratio={16/10} className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0 p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-gray-800">Glucose Response Prediction</h3>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 font-semibold">
                  Premium Feature
                </Badge>
              </div>
              <p className="text-gray-600 text-sm">Real-time metabolic response visualization</p>
            </div>

            {/* Main Visualization Area */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-blue-600">📊</span>
                  Interactive Glucose Curve
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Live Tracking</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="h-64 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-100 relative overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid background */}
                  <defs>
                    <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Y-axis labels */}
                  <text x="20" y="30" fontSize="10" fill="#6b7280" textAnchor="end">180</text>
                  <text x="20" y="60" fontSize="10" fill="#6b7280" textAnchor="end">140</text>
                  <text x="20" y="90" fontSize="10" fill="#6b7280" textAnchor="end">100</text>
                  <text x="20" y="120" fontSize="10" fill="#6b7280" textAnchor="end">80</text>
                  <text x="20" y="150" fontSize="10" fill="#6b7280" textAnchor="end">60</text>
                  
                  {/* Normal range zone */}
                  <rect x="30" y="80" width="340" height="30" fill="#10b981" fillOpacity="0.15" rx="4" />
                  <text x="365" y="98" fontSize="9" fill="#10b981" textAnchor="end" fontWeight="bold">Target Range</text>
                  
                  {/* Glucose curve with area fill */}
                  <path
                    d="M30,140 Q80,138 120,90 Q160,45 200,50 Q240,65 280,85 Q320,105 360,115"
                    fill="url(#curveGradient)"
                    stroke="none"
                  />
                  <path
                    d="M30,140 Q80,138 120,90 Q160,45 200,50 Q240,65 280,85 Q320,105 360,115"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Peak marker with animation */}
                  <circle cx="160" cy="45" r="5" fill="#ef4444">
                    <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="160" y="35" fontSize="9" fill="#ef4444" textAnchor="middle" fontWeight="bold">Peak: 165 mg/dL</text>
                  
                  {/* Current point (animated) */}
                  <circle cx="280" cy="85" r="4" fill="#3b82f6">
                    <animate attributeName="fill-opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <line x1="280" y1="85" x2="280" y2="170" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4" opacity="0.7"/>
                  
                  {/* Time markers */}
                  <line x1="70" y1="170" x2="70" y2="165" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="150" y1="170" x2="150" y2="165" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="230" y1="170" x2="230" y2="165" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="310" y1="170" x2="310" y2="165" stroke="#9ca3af" strokeWidth="1" />
                  
                  {/* X-axis labels */}
                  <text x="70" y="185" fontSize="9" fill="#6b7280" textAnchor="middle">30min</text>
                  <text x="150" y="185" fontSize="9" fill="#6b7280" textAnchor="middle">1h</text>
                  <text x="230" y="185" fontSize="9" fill="#6b7280" textAnchor="middle">2h</text>
                  <text x="310" y="185" fontSize="9" fill="#6b7280" textAnchor="middle">3h</text>
                </svg>

                {/* Current reading overlay */}
                <div className="absolute bottom-4 right-4 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                  <div className="text-xs text-gray-500">Current</div>
                  <div className="text-lg font-bold text-blue-600">118 mg/dL</div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">85%</div>
                  <div className="text-xs text-gray-500">Time in Range</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">165</div>
                  <div className="text-xs text-gray-500">Peak mg/dL</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">45min</div>
                  <div className="text-xs text-gray-500">Time to Peak</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">2.5h</div>
                  <div className="text-xs text-gray-500">Return to Base</div>
                </div>
              </div>
            </div>

            {/* Bottom insights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-sm">💡</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">AI-Powered Insights</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Your meal shows a moderate glucose response. The curve indicates good metabolic control with a controlled peak.
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      ✓ Optimal timing
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      📈 Predictive accuracy: 94%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default InstantAnalysisStep;
