
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getSteps } from "@/data/stepsData";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("step1");
  
  // Get steps data from our separate component
  const steps = getSteps();

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How NutriSnap Works</h2>
          <p className="text-lg text-gray-600">
            Our intuitive process makes nutrition tracking simple, accurate, and actionable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="lg:col-span-5 space-y-6 animate-slide-up">
            {steps.map((step, index) => (
              <Card 
                key={step.id}
                className={`transition-all cursor-pointer hover:shadow-md ${
                  activeTab === step.id
                    ? "border-primary shadow-md bg-primary/5"
                    : "bg-white"
                }`}
                onClick={() => setActiveTab(step.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-8 h-8 rounded-full font-medium flex items-center justify-center ${
                        activeTab === step.id
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-lg text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Visualisation */}
          <div className="lg:col-span-7 animate-slide-left">
            <Tabs value={activeTab} className="w-full">
              <div className="hidden sm:block">
                <TabsList className="w-full grid grid-cols-4 mb-8">
                  {steps.map((step) => {
                    const StepIcon = step.icon as React.ComponentType<{ className?: string }>;
                    return (
                      <TabsTrigger 
                        key={step.id}
                        value={step.id}
                        className="data-[state=active]:text-primary flex flex-col items-center gap-2 py-4"
                        onClick={() => setActiveTab(step.id)}
                      >
                        <StepIcon className="h-5 w-5" />
                        <span>{step.tabTitle}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                {steps.map((step) => {
                  const StepComponent = step.imagePlaceholder as React.ComponentType;
                  return (
                    <TabsContent key={step.id} value={step.id} className="mt-0">
                      <ScrollArea className="h-[600px] w-full rounded-md">
                        <div className="relative h-full w-full overflow-hidden rounded-lg">
                          <StepComponent />
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                            {step.title}
                          </div>
                        </div>
                      </TabsArea>
                    </TabsContent>
                  );
                })}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
