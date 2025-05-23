
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const InstantAnalysisStep = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg bg-white">
        <AspectRatio ratio={9/16} className="bg-gradient-to-b from-gray-50 to-white">
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
                      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 flex items-center">
                      <div className="w-24 h-4 bg-gray-200 rounded mr-2"></div>
                      <div className="w-16 h-4 bg-primary/20 rounded"></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/10">Chicken</Badge>
                      <Badge variant="outline" className="bg-primary/10">Brown Rice</Badge>
                      <Badge variant="outline" className="bg-primary/10">Broccoli</Badge>
                      <Badge variant="outline" className="bg-primary/10">Olive Oil</Badge>
                    </div>
                    <div className="space-y-1 mt-3">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-primary mr-1"></div>
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
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h4 className="text-white font-semibold">Instant Analysis</h4>
            <p className="text-white/90 text-sm">AI identifies ingredients</p>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default InstantAnalysisStep;
