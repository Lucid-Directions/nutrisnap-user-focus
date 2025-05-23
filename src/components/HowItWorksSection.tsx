
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSteps } from "@/data/stepsData";
import { cn } from "@/lib/utils";

const HowItWorksSection = () => {
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState("step1");

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            First Look at NutriSnap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the simplicity and power of NutriSnap's AI-driven approach to
            metabolic health and nutrition tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Step cards */}
          <div className="lg:col-span-5 space-y-6 animate-slide-up">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const StepIcon = step.icon;
              
              return (
                <Card 
                  key={step.id}
                  className={cn(
                    "transition-all duration-300 hover:shadow-md cursor-pointer feature-card border",
                    isActive 
                      ? "border-primary shadow-md bg-primary/5" 
                      : "bg-white hover:border-primary/30"
                  )}
                  onClick={() => setActiveStep(step.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg",
                        isActive 
                          ? "bg-primary text-white" 
                          : "bg-gray-100 text-gray-600"
                      )}>
                        {step.id.replace('step', '')}
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-xl font-semibold mb-2",
                          isActive ? "text-primary" : "text-gray-800"
                        )}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right column - Visual representations */}
          <div className="lg:col-span-7 animate-slide-left">
            <div className="bg-white rounded-xl shadow-lg p-6 md:sticky md:top-24">
              <Tabs 
                value={activeStep} 
                onValueChange={setActiveStep}
                className="w-full"
              >
                <TabsList className="grid grid-cols-4 mb-6 hidden md:grid">
                  {steps.map((step) => {
                    const StepIcon = step.icon;
                    return (
                      <TabsTrigger 
                        key={step.id} 
                        value={step.id}
                        className="flex flex-col gap-1 py-3 data-[state=active]:text-primary"
                      >
                        <StepIcon className="h-5 w-5" />
                        <span className="text-xs">{step.tabTitle}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {steps.map((step) => {
                  const StepComponent = step.imagePlaceholder;
                  return (
                    <TabsContent 
                      key={step.id} 
                      value={step.id}
                      className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <div className="transition-all duration-300">
                        <StepComponent />
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
