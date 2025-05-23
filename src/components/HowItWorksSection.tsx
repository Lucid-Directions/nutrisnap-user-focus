
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, BarChart2, Lightbulb, BookOpen } from "lucide-react";
import CustomGlucoseChart from "@/components/ui/CustomGlucoseChart";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState("1");

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

  const renderStepContent = (stepId: string) => {
    switch (stepId) {
      case "1":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 opacity-50"></div>
            <div className="w-64 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-16 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Camera</span>
                    </div>
                    <div className="bg-black relative h-96 flex items-center justify-center">
                      <div className="absolute inset-4 border-2 border-white/30 rounded-lg"></div>
                      <Camera className="w-16 h-16 text-white/70" />
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full border-4 border-white bg-white/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20 bg-gray-100 flex items-center justify-around">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
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
            <div className="w-64 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-16 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Analysis</span>
                    </div>
                    <div className="flex-1 bg-white p-4 overflow-y-auto h-96">
                      <div className="space-y-3">
                        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                          <div className="text-sm font-semibold text-emerald-800">Chicken Salad</div>
                          <div className="text-xs text-emerald-600">85% confidence</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 p-2 rounded text-center">
                            <div className="text-lg font-bold text-emerald-600">420</div>
                            <div className="text-xs text-gray-600">Calories</div>
                          </div>
                          <div className="bg-gray-50 p-2 rounded text-center">
                            <div className="text-lg font-bold text-emerald-600">35g</div>
                            <div className="text-xs text-gray-600">Protein</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex-1 h-2 bg-emerald-200 rounded"></div>
                          <div className="flex-1 h-2 bg-blue-200 rounded"></div>
                          <div className="flex-1 h-2 bg-amber-200 rounded"></div>
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
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="w-64 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-16 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Glucose Impact</span>
                    </div>
                    <div className="flex-1 bg-white p-4 h-96">
                      <div className="space-y-3">
                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                          <CustomGlucoseChart />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-red-50 p-2 rounded text-center border border-red-200">
                            <div className="text-sm font-bold text-red-600">Peak</div>
                            <div className="text-xs text-red-600">165 mg/dL</div>
                          </div>
                          <div className="bg-green-50 p-2 rounded text-center border border-green-200">
                            <div className="text-sm font-bold text-green-600">Time</div>
                            <div className="text-xs text-green-600">45 min</div>
                          </div>
                        </div>
                        <div className="bg-amber-100 p-2 rounded border border-amber-200">
                          <div className="text-xs text-amber-800">Moderate glucose response. Consider adding protein.</div>
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
            <div className="w-64 max-w-full relative z-10">
              <div className="w-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
                  <div className="h-full flex flex-col pt-10">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-16 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Knowledge Hub</span>
                    </div>
                    <div className="flex-1 bg-white p-4 overflow-y-auto h-96">
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                          <div className="text-sm font-semibold text-purple-800">Understanding Glucose</div>
                          <div className="text-xs text-purple-600">5 min read</div>
                        </div>
                        <div className="bg-violet-50 p-3 rounded-lg border border-violet-200">
                          <div className="text-sm font-semibold text-violet-800">Metabolic Health</div>
                          <div className="text-xs text-violet-600">8 min read</div>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                          <div className="text-sm font-semibold text-indigo-800">Food Combinations</div>
                          <div className="text-xs text-indigo-600">6 min read</div>
                        </div>
                        <div className="flex justify-center">
                          <BookOpen className="w-8 h-8 text-purple-400" />
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
