
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const MetabolicResponseStep = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <AspectRatio ratio={16/10} className="bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="absolute inset-0 p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-gray-800">Visualize Your Metabolic Response</h3>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 font-semibold">
                  Interactive
                </Badge>
              </div>
              <p className="text-gray-600 text-sm">Track how meals affect your glucose levels with interactive curves</p>
            </div>

            {/* Main Dashboard */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-emerald-600">📈</span>
                  Glucose Response Tracker
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-emerald-600 font-medium">Live Data</span>
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Last 4 hours</span>
                </div>
              </div>

              {/* Interactive Chart */}
              <div className="h-72 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-100 relative overflow-hidden mb-4">
                <svg viewBox="0 0 500 250" className="w-full h-full">
                  {/* Background grid */}
                  <defs>
                    <pattern id="metabolicGrid" width="50" height="25" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                    </pattern>
                    <linearGradient id="metabolicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.05"/>
                    </linearGradient>
                    <linearGradient id="normalZone" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15"/>
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#metabolicGrid)" />
                  
                  {/* Y-axis scale */}
                  <text x="25" y="40" fontSize="10" fill="#64748b" textAnchor="end" fontWeight="500">200</text>
                  <text x="25" y="70" fontSize="10" fill="#64748b" textAnchor="end" fontWeight="500">160</text>
                  <text x="25" y="100" fontSize="10" fill="#64748b" textAnchor="end" fontWeight="500">120</text>
                  <text x="25" y="130" fontSize="10" fill="#64748b" textAnchor="end" fontWeight="500">100</text>
                  <text x="25" y="160" fontSize="10" fill="#64748b" textAnchor="end" fontWeight="500">80</text>
                  <text x="25" y="190" fontSize="10" fill="#64748b" textAnchor="end" fontWeight="500">60</text>
                  
                  {/* Normal glucose range zone */}
                  <rect x="35" y="90" width="430" height="50" fill="url(#normalZone)" rx="6" />
                  <text x="460" y="110" fontSize="9" fill="#22c55e" textAnchor="end" fontWeight="bold">Target Zone</text>
                  <text x="460" y="122" fontSize="8" fill="#22c55e" textAnchor="end">70-140 mg/dL</text>
                  
                  {/* Meal markers */}
                  <line x1="80" y1="30" x2="80" y2="200" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" opacity="0.7"/>
                  <text x="80" y="25" fontSize="8" fill="#f59e0b" textAnchor="middle" fontWeight="bold">🍽️ Breakfast</text>
                  
                  <line x1="250" y1="30" x2="250" y2="200" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" opacity="0.7"/>
                  <text x="250" y="25" fontSize="8" fill="#f59e0b" textAnchor="middle" fontWeight="bold">🥗 Lunch</text>
                  
                  {/* Glucose response curve with area fill */}
                  <path
                    d="M35,170 Q70,168 80,150 Q100,80 120,70 Q140,65 160,75 Q180,90 200,110 Q220,125 250,140 Q280,90 300,75 Q320,70 340,80 Q370,100 400,120 Q430,135 460,145"
                    fill="url(#metabolicGradient)"
                  />
                  <path
                    d="M35,170 Q70,168 80,150 Q100,80 120,70 Q140,65 160,75 Q180,90 200,110 Q220,125 250,140 Q280,90 300,75 Q320,70 340,80 Q370,100 400,120 Q430,135 460,145"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Peak markers with animations */}
                  <circle cx="120" cy="70" r="6" fill="#ef4444">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="120" y="60" fontSize="9" fill="#ef4444" textAnchor="middle" fontWeight="bold">Peak: 158</text>
                  
                  <circle cx="300" cy="75" r="5" fill="#f97316">
                    <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <text x="300" y="65" fontSize="9" fill="#f97316" textAnchor="middle" fontWeight="bold">142</text>
                  
                  {/* Current position indicator */}
                  <circle cx="400" cy="120" r="5" fill="#3b82f6">
                    <animate attributeName="fill-opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <line x1="400" y1="120" x2="400" y2="210" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4" opacity="0.8"/>
                  
                  {/* Time axis markers */}
                  <line x1="80" y1="210" x2="80" y2="205" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="150" y1="210" x2="150" y2="205" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="250" y1="210" x2="250" y2="205" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="350" y1="210" x2="350" y2="205" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="450" y1="210" x2="450" y2="205" stroke="#94a3b8" strokeWidth="1" />
                  
                  {/* Time labels */}
                  <text x="80" y="225" fontSize="9" fill="#64748b" textAnchor="middle">8 AM</text>
                  <text x="150" y="225" fontSize="9" fill="#64748b" textAnchor="middle">10 AM</text>
                  <text x="250" y="225" fontSize="9" fill="#64748b" textAnchor="middle">12 PM</text>
                  <text x="350" y="225" fontSize="9" fill="#64748b" textAnchor="middle">2 PM</text>
                  <text x="450" y="225" fontSize="9" fill="#64748b" textAnchor="middle">4 PM</text>
                </svg>

                {/* Current reading display */}
                <div className="absolute bottom-4 right-4 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-xs text-gray-500 mb-1">Current Glucose</div>
                  <div className="text-xl font-bold text-emerald-600">118 mg/dL</div>
                  <div className="text-xs text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    In target range
                  </div>
                </div>
              </div>

              {/* Metabolic insights grid */}
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <div className="text-lg font-bold text-emerald-600">87%</div>
                  <div className="text-xs text-gray-600">Time in Range</div>
                  <div className="text-xs text-emerald-600 mt-1">Excellent</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-600">158</div>
                  <div className="text-xs text-gray-600">Daily Peak</div>
                  <div className="text-xs text-orange-600 mt-1">Post-breakfast</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">38min</div>
                  <div className="text-xs text-gray-600">Avg Peak Time</div>
                  <div className="text-xs text-blue-600 mt-1">Normal</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">2.1h</div>
                  <div className="text-xs text-gray-600">Return to Base</div>
                  <div className="text-xs text-purple-600 mt-1">Good recovery</div>
                </div>
              </div>
            </div>

            {/* Bottom insights panel */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-4 border border-emerald-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 text-sm">🧠</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Smart Metabolic Insights</h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Your glucose response shows excellent metabolic flexibility. The post-meal peaks are well-controlled and return to baseline efficiently.
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                      ✓ Optimal breakfast timing
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      📊 97% prediction accuracy
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                      🎯 Personalized for you
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

export default MetabolicResponseStep;
