"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAboutPage, useHomePage } from "@/hooks/queries/usePagesQuery";

export default function VisionMissionSection() {
  const { data: about } = useAboutPage();
  const { data: home } = useHomePage();

  return (
    <section className="w-full bg-white  py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {home?.visionMissionHeading}
          </h2>
        </div>

        {/* Vision / Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md border border-gray-200  rounded-2xl hover:border-primary">
            <CardContent className="p-6 text-left space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Target className="w-6 h-6" />
                <h3 className="text-lg font-semibold">{about?.visionTitle}</h3>
              </div>
              <p className="text-gray-600  leading-relaxed">
                {about?.vision}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border border-gray-200  rounded-2xl hover:border-primary">
            <CardContent className="p-6 text-left space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Rocket className="w-6 h-6" />
                <h3 className="text-lg font-semibold">{about?.missionTitle}</h3>
              </div>
              <p className="text-gray-600  leading-relaxed">
                {about?.mission}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Excellence Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {home?.strategicExcellenceHeading}
          </h2>
          <p className="text-gray-600  max-w-3xl mx-auto leading-relaxed">
            {home?.strategicExcellenceText}
          </p>
          <Link href="/services">
            <Button
            className="cursor-pointer rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all
                             bg-gradient-to-r from-primary to-secondary
                             hover:from-primary/90 hover:to-secondary/90 hover:shadow-xl"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
