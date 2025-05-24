import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email to support using EmailJS
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS environment variables are not configured');
      }
      await emailjs.send(
        serviceID,
        templateID,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_interests: formData.interests,
          to_email: 'support@nutrisnap.co.uk',
          subject: 'New Waiting List Signup - NutriSnap',
          message: `New user joined the NutriSnap waiting list:

Name: ${formData.name}
Email: ${formData.email}
Interests/Goals: ${formData.interests || 'Not specified'}`
        },
        publicKey
      );

      toast.success("You've been added to our waiting list!", {
        description: "Thank you for your interest in NutriSnap! We'll notify you when we launch.",
      });
      
      setFormData({
        name: "",
        email: "",
        interests: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Something went wrong. Please try again.", {
        description: "We couldn't add you to the waiting list right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Be Among the First</h2>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <span className="font-medium">Priority Access</span>
                    <p className="text-sm text-gray-600">Join our waiting list today and receive priority access when NutriSnap launches.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <span className="font-medium">Exclusive Bonuses</span>
                    <p className="text-sm text-gray-600">Early adopters will receive exclusive content, special features, and personalized onboarding.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <span className="font-medium">Founding Member Status</span>
                    <p className="text-sm text-gray-600">Help shape the future of NutriSnap with your feedback and suggestions as a valued founding member.</p>
                  </div>
                </li>
              </ul>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Your full name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Your email address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests" className="text-sm font-medium">Health Goals or Interests (Optional)</Label>
                  <Textarea 
                    id="interests" 
                    name="interests"
                    placeholder="Tell us about your nutrition goals or what interests you most about NutriSnap..."
                    value={formData.interests}
                    onChange={handleInputChange}
                    className="w-full"
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Reserving Your Spot..." : "Reserve My Spot"}
                </Button>
                
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Your information will only be used to notify you about NutriSnap's launch and occasional updates. No spam, ever.
                </p>
              </form>
            </div>
            
            <div className="md:w-1/2 bg-green-600 p-8 md:p-10 text-white flex flex-col justify-center">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Early Access Benefits</h3>
              <p className="mb-4">
                By joining our waiting list today, you'll secure your place as one of our first users when we launch.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  First access to our revolutionary app
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Personalized onboarding experience
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Direct access to our support team
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Influence future app features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
