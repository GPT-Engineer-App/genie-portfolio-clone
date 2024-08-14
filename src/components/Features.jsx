import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Natural Language to Code",
    description: "Describe your desired functionality in plain English, and Genie will generate the corresponding code."
  },
  {
    title: "Multiple Languages",
    description: "Genie supports a wide range of programming languages and frameworks."
  },
  {
    title: "Customizable Output",
    description: "Fine-tune the generated code to match your specific requirements and coding style."
  },
  {
    title: "Continuous Learning",
    description: "Genie improves over time, learning from user feedback and new programming trends."
  }
];

const Features = () => {
  return (
    <div className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;