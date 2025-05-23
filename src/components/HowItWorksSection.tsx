
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, BarChart2, Lightbulb, BookOpen } from "lucide-react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState("1");
  const [glucoseDotPosition, setGlucoseDotPosition] = useState(45);

  const steps = [
    {
      id: "1",
      title: "Snap or Upload",
      subtitle: "Capture Your Meal",
      description: "Take a photo of any meal with your phone's camera or upload an existing food photo. NutriSnap works with home-cooked meals, restaurant dishes, packaged foods, and more.",
      icon: Camera,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      activeColor: "border-blue-500 bg-blue-50"
    },
    {
      id: "2", 
      title: "Instant Analysis",
      subtitle: "AI-Powered Recognition",
      description: "Our advanced AI instantly identifies ingredients, portion sizes, and nutritional composition, providing a comprehensive breakdown of your meal's nutrients.",
      icon: BarChart2,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200", 
      activeColor: "border-emerald-500 bg-emerald-50"
    },
    {
      id: "3",
      title: "Glucose Prediction",
      subtitle: "Personalized Insights",
      description: "See how your meals affect your glucose levels with personalized prediction curves and learn which food combinations work best for your body.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      activeColor: "border-amber-500 bg-amber-50"
    },
    {
      id: "4",
      title: "Learn & Improve", 
      subtitle: "Knowledge Hub",
      description: "Access our knowledge hub with articles on metabolic health and nutrition science. Make informed choices based on your personal data.",
      icon: BookOpen,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      activeColor: "border-purple-500 bg-purple-50"
    }
  ];

  const handleGlucoseCurveClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setGlucoseDotPosition(Math.max(5, Math.min(95, percentage)));
  };

  // More realistic glucose curve based on pasta with marinara sauce
  const getGlucoseValue = (position) => {
    const normalizedPos = position / 100;
    const timeInMinutes = normalizedPos * 180; // 3 hours
    
    // Realistic glucose response for pasta meal
    if (timeInMinutes <= 15) {
      // Initial slight rise
      return 95 + (timeInMinutes / 15) * 15; // 95 to 110
    } else if (timeInMinutes <= 45) {
      // Steep rise to peak
      const progress = (timeInMinutes - 15) / 30;
      return 110 + progress * 55; // 110 to 165 (peak at 45 min)
    } else if (timeInMinutes <= 90) {
      // Gradual decline
      const progress = (timeInMinutes - 45) / 45;
      return 165 - progress * 45; // 165 to 120
    } else if (timeInMinutes <= 150) {
      // Slower decline
      const progress = (timeInMinutes - 90) / 60;
      return 120 - progress * 20; // 120 to 100
    } else {
      // Return to baseline
      const progress = (timeInMinutes - 150) / 30;
      return 100 - progress * 5; // 100 to 95
    }
  };

  const getTimeLabel = (position) => {
    const minutes = Math.round((position / 100) * 180);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getGlucoseStatus = (glucose) => {
    if (glucose < 100) return { status: "Normal", color: "text-green-600" };
    if (glucose < 140) return { status: "Elevated", color: "text-yellow-600" };
    return { status: "High", color: "text-red-600" };
  };

  const renderStepContent = (stepId: string) => {
    switch (stepId) {
      case "1":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="w-72 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: "9/19" }}>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-16 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-semibold">NutriSnap</span>
                    </div>
                    <div className="flex-1 relative bg-gray-900 flex items-center justify-center">
                      <div className="absolute inset-4 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=400&h=600&q=80"
                          alt="Pasta meal"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border-2 border-white/30 rounded-lg"></div>
                        <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                          Focus: ON
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full border-4 border-white bg-white/20 flex items-center justify-center cursor-pointer">
                          <div className="w-12 h-12 rounded-full bg-white"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20 bg-gray-100 flex items-center justify-center">
                      <span className="text-sm text-gray-600">Tap capture button</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "2":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="w-72 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: "9/19" }}>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-16 flex items-center justify-center">
                      <BarChart2 className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-semibold">Analysis</span>
                    </div>
                    <div className="flex-1 bg-white p-4 overflow-y-auto">
                      <div className="space-y-3">
                        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-emerald-800">Spaghetti Marinara</span>
                            <span className="text-xs bg-emerald-200 px-2 py-1 rounded">95% confident</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                              <div className="font-bold text-lg text-emerald-600">520</div>
                              <div className="text-gray-600">Calories</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg text-blue-600">18g</div>
                              <div className="text-gray-600">Protein</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg text-orange-600">8g</div>
                              <div className="text-gray-600">Fat</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Detected Ingredients:</h4>
                          <div className="flex flex-wrap gap-1">
                            {["Spaghetti", "Tomatoes", "Basil", "Garlic", "Olive Oil", "Parmesan"].map((ingredient) => (
                              <span key={ingredient} className="bg-gray-100 px-2 py-1 rounded text-xs">{ingredient}</span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Macronutrients:</h4>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs">Carbs</span>
                              <span className="text-xs font-semibold">92g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-orange-400 h-2 rounded-full" style={{ width: "75%" }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs">Protein</span>
                              <span className="text-xs font-semibold">18g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-400 h-2 rounded-full" style={{ width: "35%" }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs">Fat</span>
                              <span className="text-xs font-semibold">8g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{ width: "15%" }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Micronutrients:</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-blue-50 p-2 rounded border">
                              <div className="font-medium">Vitamin C</div>
                              <div className="text-blue-600">12mg (15% DV)</div>
                            </div>
                            <div className="bg-green-50 p-2 rounded border">
                              <div className="font-medium">Folate</div>
                              <div className="text-green-600">45mcg (11% DV)</div>
                            </div>
                            <div className="bg-purple-50 p-2 rounded border">
                              <div className="font-medium">Iron</div>
                              <div className="text-purple-600">2.8mg (16% DV)</div>
                            </div>
                            <div className="bg-yellow-50 p-2 rounded border">
                              <div className="font-medium">Potassium</div>
                              <div className="text-yellow-600">385mg (8% DV)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "3":
        const currentGlucose = Math.round(getGlucoseValue(glucoseDotPosition));
        const glucoseStatus = getGlucoseStatus(currentGlucose);
        
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="w-72 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: "9/19" }}>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-16 flex items-center justify-between px-4">
                      <div className="flex items-center">
                        <Lightbulb className="w-6 h-6 text-white mr-2" />
                        <span className="text-white font-semibold">Glucose Impact</span>
                      </div>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">HIGH</span>
                    </div>
                    <div className="flex-1 bg-white p-4">
                      <div className="space-y-4">
                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                          <div className="relative h-32 mb-2">
                            <svg 
                              viewBox="0 0 300 120" 
                              className="w-full h-full cursor-crosshair"
                              onClick={handleGlucoseCurveClick}
                            >
                              {/* Grid lines */}
                              <defs>
                                <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M 30 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#grid)" />
                              
                              {/* Y-axis labels */}
                              <text x="15" y="15" fontSize="8" fill="#666" textAnchor="start">180</text>
                              <text x="15" y="35" fontSize="8" fill="#666" textAnchor="start">150</text>
                              <text x="15" y="55" fontSize="8" fill="#666" textAnchor="start">120</text>
                              <text x="15" y="75" fontSize="8" fill="#666" textAnchor="start">90</text>
                              <text x="15" y="95" fontSize="8" fill="#666" textAnchor="start">70</text>
                              
                              {/* Normal range area (70-140 mg/dL) */}
                              <path
                                d="M 25 95 L 290 95 L 290 60 L 25 60 Z"
                                fill="#22c55e"
                                fillOpacity="0.1"
                              />
                              
                              {/* Generate realistic glucose curve */}
                              {(() => {
                                const points = [];
                                for (let i = 0; i <= 100; i += 2) {
                                  const glucose = getGlucoseValue(i);
                                  const x = 25 + (i / 100) * 265;
                                  const y = 95 - ((glucose - 70) / 110) * 80; // Scale to fit 70-180 range
                                  points.push(`${x},${y}`);
                                }
                                return (
                                  <polyline
                                    points={points.join(' ')}
                                    fill="none"
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                  />
                                );
                              })()}
                              
                              {/* Interactive dot */}
                              <circle 
                                cx={25 + (glucoseDotPosition / 100) * 265} 
                                cy={95 - ((currentGlucose - 70) / 110) * 80} 
                                r="6" 
                                fill="#ef4444" 
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-pointer drop-shadow-lg"
                              />
                              
                              {/* Time labels */}
                              <text x="25" y="110" fontSize="8" fill="#666" textAnchor="middle">0</text>
                              <text x="100" y="110" fontSize="8" fill="#666" textAnchor="middle">1h</text>
                              <text x="175" y="110" fontSize="8" fill="#666" textAnchor="middle">2h</text>
                              <text x="250" y="110" fontSize="8" fill="#666" textAnchor="middle">3h</text>
                            </svg>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-red-50 p-2 rounded text-center border border-red-200">
                              <div className={`font-bold ${glucoseStatus.color}`}>{currentGlucose}</div>
                              <div className={glucoseStatus.color}>mg/dL</div>
                              <div className="text-xs text-gray-500">{glucoseStatus.status}</div>
                            </div>
                            <div className="bg-blue-50 p-2 rounded text-center border border-blue-200">
                              <div className="font-bold text-blue-600">{getTimeLabel(glucoseDotPosition)}</div>
                              <div className="text-blue-600">Time</div>
                            </div>
                            <div className="bg-orange-50 p-2 rounded text-center border border-orange-200">
                              <div className="font-bold text-orange-600">165</div>
                              <div className="text-orange-600">Peak</div>
                              <div className="text-xs text-gray-500">at 45min</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-100 p-2 rounded border border-amber-200">
                          <div className="text-xs text-amber-800 font-medium">💡 Insight:</div>
                          <div className="text-xs text-amber-700">High-carb pasta causes significant glucose spike. Try whole grain pasta or add protein to moderate the response.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "4":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="w-72 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: "9/19" }}>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-16 flex items-center justify-between px-4">
                      <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-white mr-2" />
                        <span className="text-white font-semibold">NutriSnap</span>
                      </div>
                      <span className="text-white text-xs">Knowledge Hub</span>
                    </div>
                    <div className="flex-1 bg-white">
                      <div className="bg-purple-600 text-white p-3 text-center">
                        <h3 className="font-bold">Metabolic Health Library</h3>
                        <p className="text-xs opacity-90">Evidence-based nutrition insights</p>
                      </div>
                      
                      <div className="p-4 space-y-3">
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Search glucose, metabolism..." 
                            className="w-full p-2 pr-8 border rounded-lg text-xs"
                          />
                          <div className="absolute right-2 top-2">🔍</div>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                          <div className="text-sm font-semibold text-purple-800 mb-1">Trending Research</div>
                          <div className="text-xs font-medium mb-1">Carbohydrate Timing & Glucose Response</div>
                          <div className="text-xs text-gray-600 mb-2">Latest findings on when and how to eat carbs for optimal metabolic health and sustained energy.</div>
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-green-600 font-medium">Read Study →</div>
                            <div className="text-xs text-gray-400">New</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold">Quick Learning Paths</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-50 p-2 rounded text-center border border-blue-200">
                              <div className="text-lg">📈</div>
                              <div className="text-xs font-medium">Blood Sugar Basics</div>
                              <div className="text-xs text-gray-500">5 articles</div>
                            </div>
                            <div className="bg-green-50 p-2 rounded text-center border border-green-200">
                              <div className="text-lg">🥗</div>
                              <div className="text-xs font-medium">Meal Timing</div>
                              <div className="text-xs text-gray-500">8 articles</div>
                            </div>
                            <div className="bg-purple-50 p-2 rounded text-center border border-purple-200">
                              <div className="text-lg">🏃</div>
                              <div className="text-xs font-medium">Exercise Impact</div>
                              <div className="text-xs text-gray-500">6 articles</div>
                            </div>
                            <div className="bg-yellow-50 p-2 rounded text-center border border-yellow-200">
                              <div className="text-lg">😴</div>
                              <div className="text-xs font-medium">Sleep & Stress</div>
                              <div className="text-xs text-gray-500">4 articles</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold">Personalized Insights</div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-xs">📊</div>
                              <div className="flex-1">
                                <div className="text-xs font-medium">Your Carb Sensitivity</div>
                                <div className="text-xs text-gray-500">Based on 24 meals tracked</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs">⏰</div>
                              <div className="flex-1">
                                <div className="text-xs font-medium">Optimal Meal Windows</div>
                                <div className="text-xs text-gray-500">AI recommendations</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100/25 opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            How NutriSnap Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our intuitive process makes nutrition tracking simple, accurate, and actionable through cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - Interactive step cards */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className={`transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 border-2 ${
                      isActive 
                        ? `${step.activeColor} shadow-xl transform -translate-y-1 scale-[1.02]` 
                        : `${step.borderColor} hover:${step.borderColor} shadow-md`
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} shadow-lg transform transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                              isActive ? 'bg-gradient-to-r ' + step.color + ' text-white' : 'bg-gray-200 text-gray-600'
                            }`}>
                              {step.id}
                            </span>
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                              isActive ? 'text-slate-800' : 'text-slate-700'
                            }`}>
                              {step.title}
                            </h3>
                          </div>
                          <p className={`text-sm font-medium mb-2 ${
                            isActive ? 'text-slate-600' : 'text-slate-500'
                          }`}>
                            {step.subtitle}
                          </p>
                          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-slate-600' : 'text-slate-500'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Right side - Visual content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="sticky top-24">
              <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
                <TabsList className="w-full grid grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm shadow-lg border border-slate-200/50">
                  {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <TabsTrigger 
                        key={step.id}
                        value={step.id}
                        className="flex flex-col items-center gap-2 py-4 data-[state=active]:text-slate-800 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-xs font-medium">{step.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    {steps.map((step) => (
                      <TabsContent 
                        key={step.id} 
                        value={step.id} 
                        className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className="h-[600px] w-full"
                        >
                          {renderStepContent(step.id)}
                        </motion.div>
                      </TabsContent>
                    ))}
                  </AnimatePresence>
                </div>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
