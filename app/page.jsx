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
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

// Updated data for the landing page
//deleGte
import GradientText from "../components/GradientText"



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

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
 

export default function Home() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen px-40">
      <HeroSection />
      {/* Use HoverEffect component with items prop */}
      <HoverEffect
        items={[
          {
            title: "Expense Tracking",
            description: "Monitor transactions in real-time with automatic bank synchronization",
            link: "/expense-tracking",
          },
          {
            title: "Budget Planning",
            description: "Create custom budgets with category limits and spending alerts",
            link: "/budgeting-tools",
          },
          {
            title: "Financial Reports",
            description: "Generate detailed income/expense reports with interactive visual charts",
            link: "/financial-reports",
          },
          {
            title: "Bill Reminders",
            description: "Never miss a payment with smart due date notifications",
            link: "/bill-reminders",
          },
          {
            title: "Investment Tracking",
            description: "Monitor your portfolio performance and market trends",
            link: "/investments",
          },
          {
            title: "Savings Goals",
            description: "Set and achieve financial targets with progress tracking",
            link: "/savings-goals",
          },
        ]}
      />
      {/* Value Proposition */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-sm mb-6"></span>
            <ShinyText text="" disabled={false} speed={3} className='custom-class' /> */}
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class py-1 text-2xl"
              >
              REVOLUTIONARY DESIGN
              </GradientText>
            
            <h2 className="text-4xl font-bold mb-6">Your creative process deserves better.</h2>
            <p className="text-xl text-gray-500 mb-6">
              You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.
            </p>
            <p className="text-2xl font-semibold text-green-400">That's why we built FinanceJini.</p>
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
              Questions? We've got <span className="text-green-400">answers</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-gray-900 border border-gray-800 rounded-lg">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <span className="text-green-400">+</span>
                  </div>
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-12 text-center max-w-4xl mx-auto border border-gray-800">
            <h2 className="text-3xl font-bold mb-6"> Ready to Take Control of Your Finances?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Be a part of thousands who are already managing their finances smarter with FinanceJini!</p>
            <Button className="bg-green-500 hover:bg-green-400 text-black text-lg py-6 px-8">
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
                  <Image src={"/logo1.png"} alt="my logo" height={90} width={300} className="h-10 w-auto object-contain" />
                </Link>
              </div>
              <span className="text-xl font-bold">FinanceJini</span>
            </div>
            <div className="flex space-x-6 text-sm text-blue-50">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <footer className="py-12">
              <div className="container mx-auto px-4 text-center text-blue-50">
                <p>Made with 💗 by Team Zenux</p>
              </div>
            </footer>
          </div>
        </div>
      </footer>
    </div>
  );
}