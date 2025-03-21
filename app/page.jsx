import React from "react";
import { Button } from "../app/components/ui/button";
import { Card, CardContent } from "../app/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/hero";

import { HoverEffect, CardDescription } from "../components/ui/card-hover-effect";
import { 
  ArrowRight, 
  KeyRound, 
  Layers, 
  Layout, 
  Zap, 
  Users, 
  LineChart, 
  Code,
  CheckCircle
} from "lucide-react";
import { testimonialsData } from "./components/data/landing";

// Updated data for the landing page
//delete




const faqs = [
  {
    question: "How is FinanceJini different from other design tools?",
    answer: "Unlike traditional design tools, FinanceJini prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, making it feel like an extension of your creative mind."
  },
  {
    question: "Is there a learning curve?",
    answer: "FinanceJini is designed to be intuitive from day one. Most users report being productive within the first hour of use, with advanced features naturally discovered as needed."
  },
  {
    question: "How do you handle version control?",
    answer: "We offer built-in version history, allowing you to track changes, create branches, and collaborate without fear of losing work. Our Git-like approach is familiar to developers but accessible to everyone."
  },
  {
    question: "Can I work offline?",
    answer: "Yes! FinanceJini has robust offline capabilities. Your changes sync automatically when you reconnect, so your workflow is never interrupted."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Design Lead at Quantum",
    quote: "FinanceJini has transformed how our team collaborates. We've cut our design time in half while improving quality.",
    image: "/avatars/avatar-1.png"
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Pulse",
    quote: "The integrations with our existing tools made adoption painless. Now I can't imagine working without it.",
    image: "/avatars/avatar-2.png"
  },
  {
    name: "Aisha Patel",
    role: "Freelance Designer",
    quote: "As a solo designer, FinanceJini gives me capabilities that usually require an entire team. Game-changer!",
    image: "/avatars/avatar-3.png"
  }
];

export default function Home() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <HeroSection />
      {/* Use HoverEffect component with items prop */}
      <HoverEffect 
        items={[
          {
            title: "Real-time Collaboration",
            description: "Work together seamlessly with teammates in real-time editing",
            link: "/feature1"
          },
          {
            title: "Keyboard Quick Actions",
            description: "Powerful commands to help you design faster and stay in the flow",
            link: "/feature2"
          },
          {
            title: "Asset Library",
            description: "Manage all your design resources in one organized library",
            link: "/feature3"
          },
          {
            title: "Code Preview",
            description: "Export your designs with production-ready code instantly",
            link: "/feature4"
          },
          {
            title: "Smart Guides",
            description: "Intelligent alignment tools that make pixel-perfect designs effortless",
            link: "/feature5"
          },
          {
            title: "Auto Layout",
            description: "Create responsive designs that adapt to any screen size automatically",
            link: "/feature6"
          }
        ]} 
      />
      {/* Value Proposition */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-sm mb-6">
              REVOLUTIONARY DESIGN
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Your creative process deserves better.
            </h2>
            <p className="text-xl text-gray-500 mb-6">
              You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.
            </p>
            <p className="text-2xl font-semibold text-blue-400">
              That's why we built FinanceJini.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      

      {/* Integrations Section */}
      

      {/* FAQ Section */}
      <section id="faq" className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Questions? We've got <span className="text-blue-400">answers</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-gray-900 border border-gray-800 rounded-lg">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <span className="text-blue-400">+</span>
                  </div>
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What our users say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands who've transformed their creative workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-12 text-center max-w-4xl mx-auto border border-gray-800">
            <h2 className="text-3xl font-bold mb-6"> Ready to Take Control of Your Finances?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be a part of thousands who are already managing their finances smarter with FinanceJini!
            </p>
            <Button className="bg-blue-500 hover:bg-blue-400 text-black text-lg py-6 px-8">
              Try it for free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-400 to-blue-300 flex items-center justify-center mr-2">
                <Link href="/">
                  <Image
                    src={"/logo1.png"}
                    alt="my logo"
                    height={90}
                    width={300}
                    className='h-10 w-auto object-contain'
                  />
                </Link>
              </div>
              <span className="text-xl font-bold">FinanceJini</span>
            </div>
            <div className="flex space-x-6 text-sm text-blue-50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <footer className="py-12">
              <div className="container mx-auto px-4 text-center text-blue-50">
                <p>Made with 💗 by Zenux Studio</p>
              </div>
            </footer>
          </div>
        </div>
      </footer>
    </div>
  );
}