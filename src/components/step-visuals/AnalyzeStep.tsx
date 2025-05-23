
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface AnalyzeStepProps extends React.HTMLAttributes<HTMLDivElement> {}

const AnalyzeStep = ({ className, ...props }: AnalyzeStepProps) => {
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
                  <h4 className="font-semibold text-gray-800">Analyzing meal...</h4>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-40 bg-gray-100 rounded-lg mb-3 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 flex items-center">
                      <div className="w-24 h-4 bg-gray-200 rounded mr-2"></div>
                      <div className="w-16 h-4 bg-green-200 rounded"></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-green-50">Chicken</Badge>
                      <Badge variant="outline" className="bg-green-50">Brown Rice</Badge>
                      <Badge variant="outline" className="bg-green-50">Broccoli</Badge>
                      <Badge variant="outline" className="bg-green-50">Olive Oil</Badge>
                    </div>
                    <div className="space-y-1 mt-3">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-1"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 mr-1"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-amber-500 mr-1"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Our AI instantly identifies ingredients and analyzes nutritional content</p>
      </div>
    </div>
  );
};

export default AnalyzeStep;
