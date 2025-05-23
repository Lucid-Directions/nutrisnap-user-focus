
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";

interface CaptureStepProps extends React.HTMLAttributes<HTMLDivElement> {}

const CaptureStep = ({ className, ...props }: CaptureStepProps) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="relative overflow-hidden rounded-xl border border-green-100 shadow-md bg-white">
        <AspectRatio ratio={9/16} className="bg-gradient-to-b from-green-50 to-white">
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
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-3">
                      <Camera className="h-10 w-10 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-500">Tap to capture your meal</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Simply snap a photo of your meal or upload an existing image</p>
      </div>
    </div>
  );
};

export default CaptureStep;
