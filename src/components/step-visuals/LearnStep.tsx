
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface LearnStepProps extends React.HTMLAttributes<HTMLDivElement> {}

const LearnStep = ({ className, ...props }: LearnStepProps) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="relative overflow-hidden rounded-xl border border-green-100 shadow-md bg-white">
        <AspectRatio ratio={9/16} className="bg-gradient-to-b from-green-50 to-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-64 h-[32rem] max-w-full border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl bg-white">
              <div className="h-6 bg-gray-800 w-full flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="h-full bg-white p-3 flex flex-col">
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-gray-800">Knowledge Hub</h4>
                </div>
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
                  <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <div className="h-24 bg-green-100"></div>
                    <div className="p-3">
                      <h5 className="text-sm font-semibold mb-1">Understanding Glucose Response</h5>
                      <p className="text-xs text-gray-600">Learn how different foods affect your blood sugar levels and what it means for your health.</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <div className="h-24 bg-blue-100"></div>
                    <div className="p-3">
                      <h5 className="text-sm font-semibold mb-1">The Science of Metabolic Health</h5>
                      <p className="text-xs text-gray-600">Discover the connections between diet, exercise, and your metabolic well-being.</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <div className="h-24 bg-amber-100"></div>
                    <div className="p-3">
                      <h5 className="text-sm font-semibold mb-1">Food Combinations for Stability</h5>
                      <p className="text-xs text-gray-600">Strategies to pair foods for optimal blood sugar response and sustained energy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Access our comprehensive knowledge base with articles on metabolic health</p>
      </div>
    </div>
  );
};

export default LearnStep;
