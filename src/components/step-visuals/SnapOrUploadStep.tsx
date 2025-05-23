
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";

const SnapOrUploadStep = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg bg-white">
        <AspectRatio ratio={9/16} className="bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-64 h-[32rem] max-w-full border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl bg-white">
              <div className="h-6 bg-gray-800 w-full flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="h-full bg-gradient-to-b from-green-50 to-white p-4 flex flex-col">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-800">Take a photo</h4>
                </div>
                <div className="flex-1 relative border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Camera className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-sm text-gray-500">Tap to capture your meal</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h4 className="text-white font-semibold">Snap or Upload</h4>
            <p className="text-white/90 text-sm">Simply capture your meal</p>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default SnapOrUploadStep;
