import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket,ArrowRight  } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white  py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary/50 bg-clip-text text-transparent">
  Guided by Vision, Driven by Mission
</h2>

        </div>

        {/* Vision / Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md border border-gray-200  rounded-2xl">
            <CardContent className="p-6 text-left space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Target className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-600  leading-relaxed">
                To be the leading and most trusted investment banking partner in
                Ethiopia by 2030 — driving the growth of a vibrant capital market
                through innovation, integrity, and world-class operations.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border border-gray-200  rounded-2xl">
            <CardContent className="p-6 text-left space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Rocket className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-600  leading-relaxed">
                To empower Ethiopian enterprises and investors through
                innovative financial solutions, responsible investments, and
                initiatives that foster inclusion, sustainable economic growth,
                and transformative excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Excellence Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Strategic Excellence at the Heart of Ethiopia&apos;s Transformation
          </h2>
          <p className="text-gray-600  max-w-3xl mx-auto leading-relaxed">
            At the heart of Ethiopia&apos;s economic transformation, Prime
            Capital leads with deep regulatory insight, institutional
            partnerships, and world-class execution — shaping a sustainable
            future for businesses and investors.
          </p>
          <Button  className="rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all 
                             bg-gradient-to-r from-primary to-secondary 
                             hover:from-primary/90 hover:to-secondary/90 hover:shadow-xl">
  
  Learn More
  <ArrowRight className="w-4 h-4" />
</Button>
        </div>
      </div>
    </section>
  );
}
