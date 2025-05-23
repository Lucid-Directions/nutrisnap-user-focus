
import { Camera, BarChart2, BookOpen, Lightbulb } from "lucide-react";
import { LucideIcon } from "lucide-react";
import React from "react";

// Import step visualization components
import SnapOrUploadStep from "@/components/step-visuals/SnapOrUploadStep";
import InstantAnalysisStep from "@/components/step-visuals/InstantAnalysisStep";
import PersonalizedInsightsStep from "@/components/step-visuals/PersonalizedInsightsStep";
import LearnAndImproveStep from "@/components/step-visuals/LearnAndImproveStep";

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  imagePlaceholder: React.ComponentType;
  tabTitle: string;
}

export const getSteps = (): Step[] => [
  {
    id: "step1",
    title: "Snap or Upload",
    description: "Take a photo of any meal with your phone's camera or upload an existing food photo. NutriSnap works with home-cooked meals, restaurant dishes, packaged foods, and more.",
    icon: Camera,
    imagePlaceholder: SnapOrUploadStep,
    tabTitle: "Capture"
  },
  {
    id: "step2",
    title: "Instant Analysis",
    description: "Our advanced AI instantly identifies ingredients, portion sizes, and nutritional composition, providing a comprehensive breakdown of your meal's nutrients.",
    icon: BarChart2,
    imagePlaceholder: InstantAnalysisStep,
    tabTitle: "Analyze"
  },
  {
    id: "step3",
    title: "Personalized Insights",
    description: "See how your meals affect your glucose levels with personalized prediction curves and learn which food combinations work best for your body.",
    icon: Lightbulb,
    imagePlaceholder: PersonalizedInsightsStep,
    tabTitle: "Insights"
  },
  {
    id: "step4",
    title: "Learn & Improve",
    description: "Access our knowledge hub with articles on metabolic health and nutrition science. Make informed choices based on your personal data.",
    icon: BookOpen,
    imagePlaceholder: LearnAndImproveStep,
    tabTitle: "Learn"
  }
];
