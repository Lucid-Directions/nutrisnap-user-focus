
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { steps } from "@/data/stepsData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Import step visual components
import CaptureStep from "./step-visuals/CaptureStep";
import AnalyzeStep from "./step-visuals/AnalyzeStep";
import InsightsStep from "./step-visuals/InsightsStep";
import LearnStep from "./step-visuals/LearnStep";

// Component mapping for step visuals
const stepComponents = {
  1: CaptureStep,
  2: AnalyzeStep,
  3: InsightsStep,
  4: LearnStep,
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState("1");

  return (
    <section id="how-it-works" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            First Look at NutriSnap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the simplicity and power of NutriSnap's AI-driven approach to
            metabolic health and nutrition tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left column - Step cards */}
          <div className="space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.id.toString();
              
              return (
                <Card 
                  key={step.id}
                  className={cn(
                    "transition-all duration-300 hover:shadow-md cursor-pointer feature-card border",
                    isActive 
                      ? "border-green-500 bg-green-50 shadow-md" 
                      : "border-gray-200 hover:border-green-300"
                  )}
                  onClick={() => setActiveStep(step.id.toString())}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                        isActive ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                      )}>
                        <span className="text-lg font-semibold">{step.id}</span>
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-xl font-semibold mb-2",
                          isActive ? "text-green-700" : "text-gray-800"
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
          <div className="bg-white rounded-xl shadow-md p-6 md:sticky md:top-24">
            <Tabs 
              value={activeStep} 
              onValueChange={setActiveStep}
              className="w-full"
            >
              <TabsList className="grid grid-cols-4 mb-6">
                {steps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <TabsTrigger 
                      key={step.id} 
                      value={step.id.toString()}
                      className="flex flex-col gap-1 py-3 data-[state=active]:text-green-700"
                    >
                      <StepIcon className="h-5 w-5" />
                      <span className="text-xs">{step.tabTitle}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {steps.map((step) => {
                const StepComponent = stepComponents[step.id as keyof typeof stepComponents];
                return (
                  <TabsContent 
                    key={step.id} 
                    value={step.id.toString()}
                    className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Remove the className prop here as it's causing a TypeScript error */}
                      <StepComponent />
                    </motion.div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
