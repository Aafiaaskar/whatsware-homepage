import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  Car,
  Check,
  ChevronLeft,
  GraduationCap,
  HeartPulse,
  Home,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  Plane,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  UserRound,
  Utensils,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

type IconType = React.ComponentType<{ className?: string }>;

type VisualScene = {
  image: string;
  label: string;
  question: string;
  answer: string;
  result: string;
};

type Industry = {
  title: string;
  icon: IconType;
  accent: string;
  soft: string;
  hero1: string;
  hero2: string;
  description: string;
  points: string[];
  benefits: { icon: IconType; title: string; text: string }[];
  workflow: { icon: IconType; title: string; text: string }[];
  features: string[];
  scenes: VisualScene[];
  cta: string;
  ctaText: string;
};

const IMG = {
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
  food:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85",
  travel:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  resort:
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
  salon:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
  beauty:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
  wellness:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85",
  education:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
  car:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
  showroom:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
  interior:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  campaign:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  property:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
  business:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  consultant:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
};

const scene = (
  image: string,
  label: string,
  question: string,
  answer: string,
  result: string
): VisualScene => ({ image, label, question, answer, result });

const industryData: Record<string, Industry> = {
  "restaurant-food": {
    title: "Restaurant & Food Business",
    icon: Utensils,
    accent: "#E28A18",
    soft: "#FFF0D8",
    hero1: "Turn food enquiries",
    hero2: "into happy customers.",
    description:
      "Show your menu, answer questions, take table bookings and orders, and follow up with customers automatically on WhatsApp.",
    points: [
      "Table booking enquiries",
      "Menu and offer sharing",
      "Order assistance",
      "Automated follow-ups",
    ],
    benefits: [
      { icon: Utensils, title: "Menu Conversations", text: "Share menus, dishes, prices and offers instantly." },
      { icon: CalendarCheck, title: "Table Bookings", text: "Let customers ask for a table and confirm a suitable time." },
      { icon: MessageCircle, title: "Instant Replies", text: "Answer common restaurant questions without making customers wait." },
      { icon: Bell, title: "Smart Reminders", text: "Keep customers updated before bookings and orders." },
      { icon: Target, title: "Customer Re-engagement", text: "Bring previous customers back with targeted WhatsApp campaigns." },
      { icon: BarChart3, title: "Business Insights", text: "Track conversations, leads and customer engagement." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Customer asks", text: "A customer sends a WhatsApp enquiry about your restaurant." },
      { icon: Bot, title: "AI responds", text: "WhatsWare instantly understands the enquiry and replies." },
      { icon: CalendarCheck, title: "Booking or order", text: "The customer selects a table, time or order option." },
      { icon: Bell, title: "Confirmation", text: "WhatsWare confirms the action and can send reminders." },
    ],
    features: ["Menu sharing", "Table booking", "Order assistance", "AI replies", "Offers & campaigns", "Customer follow-ups"],
    scenes: [
      scene(IMG.restaurant, "Your Restaurant", "Hi! Can I book a table for 4 tonight?", "Sure! We have 7:30 PM and 8:30 PM available.", "Table booking enquiry captured"),
      scene(IMG.food, "Your Menu", "Can you send me today's menu?", "Absolutely. Here is today's menu and our special offer.", "Menu shared automatically"),
      scene(IMG.restaurant, "WhatsApp Automation", "8:30 PM works for us.", "Perfect! Your table for 4 is confirmed for 8:30 PM.", "Booking confirmed ✓"),
    ],
    cta: "Ready to fill more tables?",
    ctaText: "Turn WhatsApp conversations into bookings, orders and repeat customers.",
  },

  "travel-tourism": {
    title: "Travel & Tourism",
    icon: Plane,
    accent: "#159447",
    soft: "#E4F4EA",
    hero1: "Turn travel enquiries",
    hero2: "into bookings.",
    description:
      "Help travelers discover destinations, compare packages, ask questions, get instant assistance and move toward booking.",
    points: ["Destination enquiries", "Package recommendations", "Booking assistance", "Travel updates"],
    benefits: [
      { icon: Plane, title: "Travel Enquiries", text: "Answer destination, package and itinerary questions instantly." },
      { icon: Target, title: "Smart Recommendations", text: "Guide travelers toward suitable packages and destinations." },
      { icon: CalendarCheck, title: "Booking Assistance", text: "Move customers from enquiry to booking with automated conversations." },
      { icon: Bell, title: "Travel Updates", text: "Send reminders and important trip information automatically." },
      { icon: MessageCircle, title: "24/7 Assistance", text: "Keep travelers supported even outside office hours." },
      { icon: BarChart3, title: "Campaign Insights", text: "Understand which campaigns generate the most enquiries." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Traveler enquires", text: "A traveler asks about a destination, package or itinerary." },
      { icon: Bot, title: "AI recommends", text: "WhatsWare responds with relevant information and options." },
      { icon: CalendarCheck, title: "Booking starts", text: "The traveler chooses a package or requests booking assistance." },
      { icon: Bell, title: "Stay connected", text: "Automated updates keep the traveler informed." },
    ],
    features: ["Destination information", "Package sharing", "AI recommendations", "Booking assistance", "Travel reminders", "Campaigns"],
    scenes: [
      scene(IMG.travel, "Travel Enquiry", "Hi! I need a 3-day beach trip for two.", "Great! Here are our most popular 3-day beach packages.", "Package recommendation sent"),
      scene(IMG.resort, "Package Details", "Which resort is included?", "This package includes a beachfront resort and breakfast.", "Travel details shared"),
      scene(IMG.travel, "Booking", "This package looks perfect!", "Wonderful. Shall I help you start the booking?", "Booking opportunity created ✓"),
    ],
    cta: "Ready to turn travel enquiries into bookings?",
    ctaText: "Give every traveler a faster, more personalized WhatsApp experience.",
  },

  "spas-salons": {
    title: "Spas & Salons",
    icon: Sparkles,
    accent: "#A97155",
    soft: "#F4E5DA",
    hero1: "Fill your calendar.",
    hero2: "Build loyal customers.",
    description:
      "Convert WhatsApp enquiries into appointments, reminders, repeat visits and personalized customer experiences.",
    points: ["Appointment enquiries", "Service recommendations", "Booking reminders", "Repeat-visit campaigns"],
    benefits: [
      { icon: CalendarCheck, title: "Appointment Booking", text: "Help customers find a suitable service and appointment time." },
      { icon: Sparkles, title: "Service Discovery", text: "Explain treatments, services and packages automatically." },
      { icon: Bell, title: "Smart Reminders", text: "Reduce missed appointments with timely WhatsApp reminders." },
      { icon: MessageCircle, title: "Instant Replies", text: "Respond to common salon questions throughout the day." },
      { icon: Target, title: "Rebooking", text: "Invite customers back when it is time for their next visit." },
      { icon: BarChart3, title: "Engagement", text: "Track enquiries and campaign performance." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Customer enquires", text: "A customer asks about a service, price or availability." },
      { icon: Bot, title: "AI assists", text: "WhatsWare answers and recommends the right service." },
      { icon: CalendarCheck, title: "Appointment", text: "The customer chooses a suitable appointment." },
      { icon: Bell, title: "Reminder", text: "WhatsWare automatically reminds the customer." },
    ],
    features: ["Service information", "Appointment booking", "Reminders", "Offers", "Rebooking campaigns", "Customer support"],
    scenes: [
      scene(IMG.salon, "Salon Enquiry", "Hi! Do you have a hair spa today?", "Yes! We have 5 PM and 6:30 PM available.", "Appointment enquiry captured"),
      scene(IMG.beauty, "Service Assistance", "How much is the hair spa?", "Our hair spa starts at ₹999. Would you like to book 5 PM?", "Service information shared"),
      scene(IMG.salon, "Appointment", "5 PM please.", "Done! Your appointment is confirmed for 5 PM.", "Appointment confirmed ✓"),
    ],
    cta: "Ready to grow your salon?",
    ctaText: "Automate appointments and keep customers coming back.",
  },

  "health-wellness": {
    title: "Health & Wellness",
    icon: HeartPulse,
    accent: "#159447",
    soft: "#E4F4EA",
    hero1: "Better conversations.",
    hero2: "Better customer experiences.",
    description:
      "Give customers fast answers, appointment assistance, reminders and helpful service information through WhatsApp.",
    points: ["Service enquiries", "Appointment assistance", "Automated reminders", "Customer engagement"],
    benefits: [
      { icon: MessageCircle, title: "Customer Enquiries", text: "Answer routine service and availability questions quickly." },
      { icon: CalendarCheck, title: "Appointment Assistance", text: "Help customers request and manage appointments." },
      { icon: Bell, title: "Reminders", text: "Keep customers informed with timely automated messages." },
      { icon: Bot, title: "AI Assistance", text: "Provide consistent first-line support through WhatsApp." },
      { icon: Target, title: "Personalized Engagement", text: "Create relevant customer journeys and campaigns." },
      { icon: BarChart3, title: "Insights", text: "Understand conversations and engagement." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Customer connects", text: "A customer sends a WhatsApp question." },
      { icon: Bot, title: "AI assists", text: "WhatsWare responds with the relevant service information." },
      { icon: CalendarCheck, title: "Appointment", text: "The customer can continue toward appointment assistance." },
      { icon: Bell, title: "Reminder", text: "Automated reminders help keep the customer informed." },
    ],
    features: ["Service enquiries", "Appointment assistance", "AI support", "Reminders", "Customer engagement", "Analytics"],
    scenes: [
      scene(IMG.wellness, "Wellness Enquiry", "Hi! I want to know about your wellness sessions.", "Of course. Here are our available sessions and timings.", "Enquiry captured"),
      scene(IMG.wellness, "AI Assistance", "Can I book a session tomorrow?", "Yes. I can help you with the available appointment options.", "Appointment assistance started"),
      scene(IMG.wellness, "Reminder", "Tomorrow at 10 AM works.", "Your appointment request is noted. We will keep you updated.", "Reminder journey activated ✓"),
    ],
    cta: "Create better wellness experiences.",
    ctaText: "Connect customers to the right information and assistance faster.",
  },

  "beauty-cosmetics": {
    title: "Beauty & Cosmetics",
    icon: Palette,
    accent: "#7B4DFF",
    soft: "#EEE9FF",
    hero1: "Turn product discovery",
    hero2: "into sales.",
    description:
      "Help customers discover products, get recommendations, ask questions and move smoothly toward purchase.",
    points: ["Product enquiries", "AI recommendations", "Catalog sharing", "Personalized campaigns"],
    benefits: [
      { icon: ShoppingBag, title: "Product Discovery", text: "Help shoppers discover the right products through conversation." },
      { icon: Bot, title: "AI Recommendations", text: "Guide customers toward suitable products based on their needs." },
      { icon: MessageCircle, title: "Catalog Sharing", text: "Share products, prices and collections instantly." },
      { icon: Target, title: "Personalized Offers", text: "Create targeted campaigns and product journeys." },
      { icon: Bell, title: "Follow-ups", text: "Reconnect with shoppers who showed interest." },
      { icon: BarChart3, title: "Sales Insights", text: "Measure conversations and campaign engagement." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Customer asks", text: "A shopper asks about a product or beauty need." },
      { icon: Bot, title: "AI recommends", text: "WhatsWare provides relevant product suggestions." },
      { icon: ShoppingBag, title: "Product shared", text: "The customer receives product details and options." },
      { icon: Target, title: "Purchase journey", text: "Follow-ups help move interested shoppers toward purchase." },
    ],
    features: ["Product enquiries", "AI recommendations", "Catalog sharing", "Offers", "Follow-ups", "Campaign analytics"],
    scenes: [
      scene(IMG.beauty, "Beauty Product", "Hi! Which serum is good for dry skin?", "I can help. Here are our best options for dry skin.", "Product recommendation sent"),
      scene(IMG.beauty, "Catalog", "Can you show me the products?", "Sure! Here is the product collection with prices.", "Catalog shared automatically"),
      scene(IMG.beauty, "Follow-up", "I like the second one.", "Great choice! Would you like help placing your order?", "Sales opportunity created ✓"),
    ],
    cta: "Ready to turn conversations into beauty sales?",
    ctaText: "Make product discovery more personal with WhatsWare AI.",
  },

  edutech: {
    title: "Edutech",
    icon: GraduationCap,
    accent: "#2563EB",
    soft: "#E7EEFF",
    hero1: "Engage students.",
    hero2: "Automate admissions.",
    description:
      "Connect students, parents, counsellors and admissions teams with fast communication and WhatsApp automation.",
    points: ["Course enquiries", "AI counselling", "Admission assistance", "Automated follow-ups"],
    benefits: [
      { icon: GraduationCap, title: "Course Discovery", text: "Answer questions about courses, fees and programs." },
      { icon: Bot, title: "AI Counsellor", text: "Guide students through common questions instantly." },
      { icon: Target, title: "Lead Qualification", text: "Identify interested students and prioritize conversations." },
      { icon: CalendarCheck, title: "Admission Assistance", text: "Guide students toward the next step in their application." },
      { icon: Bell, title: "Follow-ups", text: "Keep prospective students engaged automatically." },
      { icon: BarChart3, title: "Admissions Insights", text: "Track enquiries and student engagement." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Student enquires", text: "A student asks about a course or admission." },
      { icon: Bot, title: "AI guides", text: "WhatsWare answers and shares relevant course information." },
      { icon: Target, title: "Lead qualified", text: "Interested students are identified for the admissions team." },
      { icon: Bell, title: "Follow-up", text: "Automated messages keep the student journey moving." },
    ],
    features: ["Course enquiries", "AI counselling", "Lead qualification", "Admission assistance", "Follow-ups", "Analytics"],
    scenes: [
      scene(IMG.education, "Student Enquiry", "Hi! What courses do you offer?", "We offer several programs. Which field are you interested in?", "Student enquiry captured"),
      scene(IMG.education, "AI Counsellor", "I am interested in data analytics.", "Great! Here are the relevant courses and admission details.", "Course recommendation sent"),
      scene(IMG.education, "Admission", "How can I apply?", "I can guide you through the next admission step.", "Admission journey started ✓"),
    ],
    cta: "Ready to grow your student leads?",
    ctaText: "Turn student conversations into qualified admission opportunities.",
  },

  automotive: {
    title: "Automotive Industry",
    icon: Car,
    accent: "#159447",
    soft: "#E4F4EA",
    hero1: "Get more enquiries.",
    hero2: "Turn interest into sales.",
    description:
      "Help customers explore vehicles, ask questions, book test drives, schedule service and stay connected.",
    points: ["Vehicle enquiries", "Test-drive booking", "Service assistance", "Automated follow-ups"],
    benefits: [
      { icon: Car, title: "Vehicle Enquiries", text: "Share vehicle information and answer customer questions." },
      { icon: CalendarCheck, title: "Test Drive Booking", text: "Help customers move from interest to a test-drive request." },
      { icon: Bot, title: "AI Vehicle Assistant", text: "Provide instant first-line assistance for vehicle enquiries." },
      { icon: Bell, title: "Service Reminders", text: "Keep customers informed about service journeys." },
      { icon: Target, title: "Lead Follow-ups", text: "Automatically nurture interested buyers." },
      { icon: BarChart3, title: "Sales Insights", text: "Track enquiries, opportunities and engagement." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Customer enquires", text: "A customer asks about a vehicle." },
      { icon: Bot, title: "AI responds", text: "WhatsWare provides information and qualifies the enquiry." },
      { icon: CalendarCheck, title: "Test drive", text: "The customer requests a suitable test-drive time." },
      { icon: Bell, title: "Follow up", text: "Automated follow-ups keep the opportunity warm." },
    ],
    features: ["Vehicle enquiries", "Test-drive booking", "AI assistance", "Service support", "Follow-ups", "Sales analytics"],
    scenes: [
      scene(IMG.car, "Vehicle Enquiry", "Hi! Is this car available for a test drive?", "Yes! I can help you with the available test-drive slots.", "Test-drive enquiry captured"),
      scene(IMG.showroom, "Showroom Assistance", "Can I come tomorrow?", "Absolutely. Here are the available slots for tomorrow.", "Test-drive options shared"),
      scene(IMG.car, "Follow-up", "11 AM works for me.", "Perfect! Your test-drive request has been recorded.", "Sales opportunity created ✓"),
    ],
    cta: "Ready to convert more automotive enquiries?",
    ctaText: "Connect vehicle discovery, test drives and follow-ups in one WhatsApp journey.",
  },

  "home-decor": {
    title: "Home Decor & Furnishing",
    icon: Home,
    accent: "#A97155",
    soft: "#F4E5DA",
    hero1: "Inspire better spaces.",
    hero2: "Turn ideas into purchases.",
    description:
      "Help customers discover collections, explore products, get design assistance and move from inspiration to purchase.",
    points: ["Product discovery", "Catalog sharing", "Design assistance", "Personalized campaigns"],
    benefits: [
      { icon: Home, title: "Product Discovery", text: "Show products and collections through WhatsApp conversations." },
      { icon: ShoppingBag, title: "Catalog Sharing", text: "Share product details, prices and collections instantly." },
      { icon: Palette, title: "Design Assistance", text: "Help customers explore products for their space." },
      { icon: Bot, title: "AI Recommendations", text: "Guide customers toward relevant products." },
      { icon: Target, title: "Campaigns", text: "Promote new collections and offers." },
      { icon: BarChart3, title: "Business Insights", text: "Track product conversations and engagement." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Customer explores", text: "A customer asks about furniture or decor." },
      { icon: Bot, title: "AI assists", text: "WhatsWare recommends relevant products." },
      { icon: ShoppingBag, title: "Catalog shared", text: "The customer receives product details." },
      { icon: Target, title: "Purchase journey", text: "Follow-ups help turn interest into a purchase." },
    ],
    features: ["Product discovery", "Catalog sharing", "Design assistance", "AI recommendations", "Campaigns", "Customer support"],
    scenes: [
      scene(IMG.interior, "Home Inspiration", "I need a sofa for my living room.", "Sure! Here are some popular sofa options for living rooms.", "Product recommendations sent"),
      scene(IMG.interior, "Catalog", "Can you send the options?", "Absolutely. Here is the collection with prices and details.", "Catalog shared automatically"),
      scene(IMG.interior, "Customer Follow-up", "I like the first sofa.", "Great! Would you like help with the next step?", "Purchase opportunity created ✓"),
    ],
    cta: "Ready to grow your home decor brand?",
    ctaText: "Turn inspiration and product questions into meaningful sales conversations.",
  },

  "marketing-agency": {
    title: "Marketing Agency",
    icon: Megaphone,
    accent: "#7B4DFF",
    soft: "#EEE9FF",
    hero1: "Run better campaigns.",
    hero2: "Deliver better results.",
    description:
      "Capture campaign leads, automate conversations, qualify opportunities and keep client campaigns moving.",
    points: ["Campaign lead capture", "AI qualification", "Automated conversations", "Performance tracking"],
    benefits: [
      { icon: Megaphone, title: "Campaign Automation", text: "Launch targeted WhatsApp campaigns for clients." },
      { icon: Target, title: "Lead Capture", text: "Capture responses and enquiries from campaigns." },
      { icon: Bot, title: "AI Qualification", text: "Automatically identify high-intent leads." },
      { icon: MessageCircle, title: "Client Conversations", text: "Keep customer conversations organized." },
      { icon: Bell, title: "Follow-ups", text: "Nurture campaign leads automatically." },
      { icon: BarChart3, title: "Campaign Analytics", text: "Measure engagement and outcomes." },
    ],
    workflow: [
      { icon: Megaphone, title: "Launch", text: "Start a WhatsApp campaign for the target audience." },
      { icon: MessageCircle, title: "Capture", text: "Customer responses enter the conversation flow." },
      { icon: Bot, title: "Qualify", text: "AI identifies and qualifies interested leads." },
      { icon: BarChart3, title: "Measure", text: "Review campaign performance and outcomes." },
    ],
    features: ["WhatsApp campaigns", "Lead capture", "AI qualification", "Bulk messaging", "Follow-ups", "Campaign analytics"],
    scenes: [
      scene(IMG.campaign, "Campaign", "I saw your offer. Can you tell me more?", "Absolutely! Here are the details and available options.", "Campaign response captured"),
      scene(IMG.campaign, "AI Qualification", "I want to know the pricing.", "Sure. May I ask what package you are interested in?", "Lead qualification started"),
      scene(IMG.analytics, "Analytics", "The premium package.", "Thanks! Your enquiry has been sent to the sales journey.", "Qualified lead created ✓"),
    ],
    cta: "Ready to deliver better campaign results?",
    ctaText: "Give your clients a complete WhatsApp lead-to-conversion journey.",
  },

  "real-estate": {
    title: "Real Estate",
    icon: MapPin,
    accent: "#159447",
    soft: "#E4F4EA",
    hero1: "Get property enquiries.",
    hero2: "Turn them into site visits.",
    description:
      "Respond faster, qualify property buyers, share listings, schedule site visits and follow up automatically.",
    points: ["Property enquiries", "Lead qualification", "Listing sharing", "Site-visit scheduling"],
    benefits: [
      { icon: MapPin, title: "Property Enquiries", text: "Answer questions about projects and available properties." },
      { icon: Target, title: "Lead Qualification", text: "Understand buyer intent and preferences." },
      { icon: Home, title: "Listing Sharing", text: "Send property images, details and options instantly." },
      { icon: CalendarCheck, title: "Site Visit Booking", text: "Move qualified buyers toward a site visit." },
      { icon: Bell, title: "Lead Follow-ups", text: "Automatically nurture property leads." },
      { icon: BarChart3, title: "Sales Tracking", text: "Track conversations and opportunities." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Buyer enquires", text: "A buyer asks about a property." },
      { icon: Bot, title: "AI qualifies", text: "WhatsWare collects useful information about the enquiry." },
      { icon: Home, title: "Property shared", text: "Relevant property details are sent automatically." },
      { icon: CalendarCheck, title: "Site visit", text: "The buyer can move toward a site-visit request." },
    ],
    features: ["Property enquiries", "Lead qualification", "Listing sharing", "Project information", "Site visits", "Sales analytics"],
    scenes: [
      scene(IMG.property, "Property Enquiry", "Hi! Is this 2BHK still available?", "Yes. I can share the project details and available options.", "Property enquiry captured"),
      scene(IMG.property, "Property Details", "Can you send the price details?", "Sure! Here are the available 2BHK options and pricing.", "Listing details shared"),
      scene(IMG.property, "Site Visit", "Can I visit this weekend?", "Absolutely. Would Saturday or Sunday work better?", "Site-visit opportunity created ✓"),
    ],
    cta: "Ready to convert more property enquiries?",
    ctaText: "Turn property conversations into qualified opportunities and site visits.",
  },

  "freelancers-consultants": {
    title: "Freelancers & Consultants",
    icon: UserRound,
    accent: "#2563EB",
    soft: "#E7EEFF",
    hero1: "Get more clients.",
    hero2: "Spend less time chasing leads.",
    description:
      "Automate enquiries, qualify opportunities, schedule consultations and follow up with potential clients.",
    points: ["Client enquiries", "Consultation booking", "Service sharing", "Automated follow-ups"],
    benefits: [
      { icon: MessageCircle, title: "Client Enquiries", text: "Respond to potential clients quickly." },
      { icon: Target, title: "Lead Qualification", text: "Understand what each prospect needs." },
      { icon: CalendarCheck, title: "Consultation Booking", text: "Move prospects toward a consultation." },
      { icon: BriefcaseBusiness, title: "Service Sharing", text: "Explain services and share proposals through conversation." },
      { icon: Bell, title: "Follow-ups", text: "Keep warm prospects engaged automatically." },
      { icon: BarChart3, title: "Business Insights", text: "Track enquiries and opportunities." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Prospect enquires", text: "A potential client asks about your service." },
      { icon: Bot, title: "AI qualifies", text: "WhatsWare asks useful questions and understands intent." },
      { icon: CalendarCheck, title: "Consultation", text: "The prospect can move toward a consultation." },
      { icon: Bell, title: "Follow-up", text: "Automated messages keep the opportunity moving." },
    ],
    features: ["Client enquiries", "Lead qualification", "Consultation booking", "Service sharing", "Follow-ups", "Business analytics"],
    scenes: [
      scene(IMG.consultant, "Client Enquiry", "Hi! I need help with my marketing.", "Absolutely. I can ask a few questions to understand what you need.", "Client enquiry captured"),
      scene(IMG.business, "AI Qualification", "I need help getting more leads.", "Got it. Would you like to schedule a consultation?", "Lead qualified"),
      scene(IMG.consultant, "Consultation", "Yes, tomorrow afternoon works.", "Great! Your consultation request has been recorded.", "Consultation opportunity created ✓"),
    ],
    cta: "Ready to get more clients?",
    ctaText: "Let WhatsWare handle repetitive enquiries while you focus on your work.",
  },

  "b2b-sales": {
    title: "B2B Sales",
    icon: BriefcaseBusiness,
    accent: "#159447",
    soft: "#E4F4EA",
    hero1: "Get more leads.",
    hero2: "Close more B2B deals.",
    description:
      "Turn WhatsApp conversations into qualified leads, sales opportunities, demos and long-term business relationships.",
    points: ["Lead qualification", "Instant sales responses", "Demo scheduling", "Automated follow-ups"],
    benefits: [
      { icon: Target, title: "Lead Qualification", text: "Identify high-intent business prospects automatically." },
      { icon: MessageCircle, title: "Sales Conversations", text: "Respond quickly to business enquiries." },
      { icon: CalendarCheck, title: "Demo Scheduling", text: "Move qualified prospects toward demos and meetings." },
      { icon: Bot, title: "AI Sales Assistant", text: "Handle repetitive questions and first-line qualification." },
      { icon: Bell, title: "Follow-ups", text: "Nurture sales opportunities automatically." },
      { icon: BarChart3, title: "Sales Analytics", text: "Track conversations, leads and outcomes." },
    ],
    workflow: [
      { icon: MessageCircle, title: "Capture", text: "A business prospect starts a WhatsApp conversation." },
      { icon: Bot, title: "Qualify", text: "AI asks useful questions and identifies buying intent." },
      { icon: CalendarCheck, title: "Convert", text: "Qualified prospects can move to demos or meetings." },
      { icon: Bell, title: "Follow up", text: "Automated follow-ups keep the opportunity moving." },
    ],
    features: ["Lead capture", "Lead qualification", "AI sales assistant", "Demo booking", "Follow-ups", "Sales analytics"],
    scenes: [
      scene(IMG.business, "B2B Enquiry", "Hi! I want to know more about WhatsWare.", "Sure! I can help. What is your main business goal?", "Lead captured"),
      scene(IMG.campaign, "AI Qualification", "We want to automate customer support.", "Great. How many customer conversations do you handle each month?", "Lead qualification started"),
      scene(IMG.analytics, "Demo", "Can I see a demo?", "Absolutely. I can help you schedule a demo.", "Qualified sales opportunity ✓"),
    ],
    cta: "Ready to accelerate your B2B sales?",
    ctaText: "Turn more WhatsApp conversations into qualified sales opportunities.",
  },
};

const aliases: Record<string, string> = {
  restaurant: "restaurant-food",
  restaurants: "restaurant-food",
  "travel-and-tourism": "travel-tourism",
  "spas-and-salons": "spas-salons",
  "health-and-wellness": "health-wellness",
  "beauty-and-cosmetics": "beauty-cosmetics",
  "beauty-cosmetic-brands": "beauty-cosmetics",
  "home-decor-furnishing": "home-decor",
  marketing: "marketing-agency",
  "marketing-and-engagement": "marketing-agency",
  realestate: "real-estate",
  "freelancers-and-consultants": "freelancers-consultants",
  freelancers: "freelancers-consultants",
  b2b: "b2b-sales",
};

const tamil: Record<string, Partial<Industry>> = {
  "restaurant-food": {
    title: "உணவகம் & உணவு வணிகம்",
    hero1: "உணவு விசாரணைகளை",
    hero2: "மகிழ்ச்சியான வாடிக்கையாளர்களாக மாற்றுங்கள்.",
    description: "WhatsApp மூலம் மெனு, மேசை முன்பதிவு, ஆர்டர் உதவி மற்றும் தானியங்கி பின்தொடர்புகளை வழங்குங்கள்.",
    points: ["மேசை முன்பதிவு விசாரணைகள்", "மெனு மற்றும் சலுகை பகிர்வு", "ஆர்டர் உதவி", "தானியங்கி பின்தொடர்புகள்"],
    cta: "அதிக மேசைகளை நிரப்ப தயாரா?",
    ctaText: "WhatsApp உரையாடல்களை முன்பதிவு, ஆர்டர் மற்றும் மீண்டும் வரும் வாடிக்கையாளர்களாக மாற்றுங்கள்.",
  },
  "travel-tourism": {
    title: "பயணம் & சுற்றுலா",
    hero1: "பயண விசாரணைகளை",
    hero2: "முன்பதிவுகளாக மாற்றுங்கள்.",
    description: "பயணிகள் இடங்கள், தொகுப்புகள், முன்பதிவு மற்றும் பயண தகவல்களை WhatsApp மூலம் பெற உதவுங்கள்.",
    points: ["இலக்கு விசாரணைகள்", "பயணத் தொகுப்பு பரிந்துரைகள்", "முன்பதிவு உதவி", "பயண தகவல்கள்"],
    cta: "பயண விசாரணைகளை முன்பதிவுகளாக மாற்ற தயாரா?",
    ctaText: "ஒவ்வொரு பயணிக்கும் வேகமான மற்றும் தனிப்பயனாக்கப்பட்ட WhatsApp அனுபவத்தை வழங்குங்கள்.",
  },
  "spas-salons": {
    title: "ஸ்பாக்கள் & சலூன்கள்",
    hero1: "உங்கள் காலண்டரை நிரப்புங்கள்.",
    hero2: "விசுவாசமான வாடிக்கையாளர்களை உருவாக்குங்கள்.",
    description: "WhatsApp விசாரணைகளை சந்திப்புகள், நினைவூட்டல்கள் மற்றும் மீண்டும் வரும் வாடிக்கையாளர்களாக மாற்றுங்கள்.",
    points: ["சந்திப்பு விசாரணைகள்", "சேவை பரிந்துரைகள்", "முன்பதிவு நினைவூட்டல்கள்", "மீண்டும் வருகை பிரச்சாரங்கள்"],
    cta: "உங்கள் சலூனை வளர்க்க தயாரா?",
    ctaText: "சந்திப்புகளை தானியக்கமாக்கி வாடிக்கையாளர்களை மீண்டும் வரச் செய்யுங்கள்.",
  },
  "health-wellness": {
    title: "ஆரோக்கியம் & நலவாழ்வு",
    hero1: "சிறந்த உரையாடல்கள்.",
    hero2: "சிறந்த வாடிக்கையாளர் அனுபவங்கள்.",
    description: "WhatsApp மூலம் விரைவான பதில்கள், சந்திப்பு உதவி, நினைவூட்டல்கள் மற்றும் சேவை தகவல்களை வழங்குங்கள்.",
    points: ["சேவை விசாரணைகள்", "சந்திப்பு உதவி", "தானியங்கி நினைவூட்டல்கள்", "வாடிக்கையாளர் ஈடுபாடு"],
    cta: "சிறந்த நலவாழ்வு அனுபவங்களை உருவாக்குங்கள்.",
    ctaText: "வாடிக்கையாளர்களை சரியான தகவல் மற்றும் உதவியுடன் விரைவாக இணைக்குங்கள்.",
  },
  "beauty-cosmetics": {
    title: "அழகு & அழகுசாதனங்கள்",
    hero1: "தயாரிப்பு கண்டுபிடிப்பை",
    hero2: "விற்பனையாக மாற்றுங்கள்.",
    description: "வாடிக்கையாளர்கள் தயாரிப்புகளை கண்டறியவும், பரிந்துரைகளைப் பெறவும், வாங்கும் பயணத்தைத் தொடங்கவும் உதவுங்கள்.",
    points: ["தயாரிப்பு விசாரணைகள்", "AI பரிந்துரைகள்", "பட்டியல் பகிர்வு", "தனிப்பயனாக்கப்பட்ட பிரச்சாரங்கள்"],
    cta: "உரையாடல்களை அழகு விற்பனையாக மாற்ற தயாரா?",
    ctaText: "WhatsWare AI மூலம் தயாரிப்பு கண்டுபிடிப்பை தனிப்பயனாக்குங்கள்.",
  },
  edutech: {
    title: "கல்வித் தொழில்நுட்பம்",
    hero1: "மாணவர்களை ஈடுபடுத்துங்கள்.",
    hero2: "சேர்க்கைகளை தானியக்கமாக்குங்கள்.",
    description: "மாணவர்கள், பெற்றோர், ஆலோசகர்கள் மற்றும் சேர்க்கை குழுக்களை WhatsApp மூலம் இணைக்குங்கள்.",
    points: ["பாடநெறி விசாரணைகள்", "AI ஆலோசனை", "சேர்க்கை உதவி", "தானியங்கி பின்தொடர்புகள்"],
    cta: "உங்கள் மாணவர் லீட்களை வளர்க்க தயாரா?",
    ctaText: "மாணவர் உரையாடல்களை தகுதியான சேர்க்கை வாய்ப்புகளாக மாற்றுங்கள்.",
  },
  automotive: {
    title: "வாகனத் துறை",
    hero1: "அதிக விசாரணைகளைப் பெறுங்கள்.",
    hero2: "ஆர்வத்தை விற்பனையாக மாற்றுங்கள்.",
    description: "வாகனங்களை ஆராயவும், டெஸ்ட் டிரைவ் முன்பதிவு செய்யவும், சர்வீஸ் உதவி பெறவும் WhatsApp மூலம் உதவுங்கள்.",
    points: ["வாகன விசாரணைகள்", "டெஸ்ட் டிரைவ் முன்பதிவு", "சர்வீஸ் உதவி", "தானியங்கி பின்தொடர்புகள்"],
    cta: "அதிக வாகன விசாரணைகளை மாற்ற தயாரா?",
    ctaText: "வாகன கண்டுபிடிப்பு, டெஸ்ட் டிரைவ் மற்றும் பின்தொடர்புகளை ஒரே WhatsApp பயணமாக இணைக்குங்கள்.",
  },
  "home-decor": {
    title: "வீட்டு அலங்காரம் & மரச்சாமான்கள்",
    hero1: "சிறந்த இடங்களை உருவாக்க ஊக்கமளியுங்கள்.",
    hero2: "யோசனைகளை வாங்குதல்களாக மாற்றுங்கள்.",
    description: "சேகரிப்புகளை ஆராயவும், தயாரிப்புகளை கண்டறியவும், வடிவமைப்பு உதவி பெறவும் வாடிக்கையாளர்களுக்கு உதவுங்கள்.",
    points: ["தயாரிப்பு கண்டறிதல்", "பட்டியல் பகிர்வு", "வடிவமைப்பு உதவி", "தனிப்பயனாக்கப்பட்ட பிரச்சாரங்கள்"],
    cta: "உங்கள் வீட்டு அலங்கார பிராண்டை வளர்க்க தயாரா?",
    ctaText: "உத்வேகம் மற்றும் தயாரிப்பு கேள்விகளை அர்த்தமுள்ள விற்பனை உரையாடல்களாக மாற்றுங்கள்.",
  },
  "marketing-agency": {
    title: "மார்க்கெட்டிங் நிறுவனம்",
    hero1: "சிறந்த பிரச்சாரங்களை இயக்குங்கள்.",
    hero2: "சிறந்த முடிவுகளை வழங்குங்கள்.",
    description: "பிரச்சார லீட்களை சேகரித்து, உரையாடல்களை தானியக்கமாக்கி, வாய்ப்புகளை தகுதிப்படுத்துங்கள்.",
    points: ["பிரச்சார லீட் சேகரிப்பு", "AI தகுதிப்படுத்தல்", "தானியங்கி உரையாடல்கள்", "செயல்திறன் கண்காணிப்பு"],
    cta: "சிறந்த பிரச்சார முடிவுகளை வழங்க தயாரா?",
    ctaText: "உங்கள் வாடிக்கையாளர்களுக்கு முழுமையான WhatsApp லீட் முதல் மாற்று பயணத்தை வழங்குங்கள்.",
  },
  "real-estate": {
    title: "ரியல் எஸ்டேட்",
    hero1: "சொத்து விசாரணைகளைப் பெறுங்கள்.",
    hero2: "அவற்றை நேரடி பார்வைகளாக மாற்றுங்கள்.",
    description: "சொத்து வாங்குபவர்களை தகுதிப்படுத்தி, பட்டியல்களை பகிர்ந்து, தள பார்வைகளை திட்டமிட்டு தானாக பின்தொடருங்கள்.",
    points: ["சொத்து விசாரணைகள்", "லீட் தகுதிப்படுத்தல்", "பட்டியல் பகிர்வு", "தள பார்வை திட்டமிடல்"],
    cta: "அதிக சொத்து விசாரணைகளை மாற்ற தயாரா?",
    ctaText: "சொத்து உரையாடல்களை தகுதியான வாய்ப்புகள் மற்றும் தள பார்வைகளாக மாற்றுங்கள்.",
  },
  "freelancers-consultants": {
    title: "ஃப்ரீலான்சர்கள் & ஆலோசகர்கள்",
    hero1: "அதிக வாடிக்கையாளர்களைப் பெறுங்கள்.",
    hero2: "லீட்களைத் தேடி நேரத்தை வீணாக்காதீர்கள்.",
    description: "விசாரணைகளை தானியக்கமாக்கி, வாய்ப்புகளை தகுதிப்படுத்தி, ஆலோசனைகளை திட்டமிட்டு பின்தொடருங்கள்.",
    points: ["வாடிக்கையாளர் விசாரணைகள்", "ஆலோசனை முன்பதிவு", "சேவை பகிர்வு", "தானியங்கி பின்தொடர்புகள்"],
    cta: "அதிக வாடிக்கையாளர்களைப் பெற தயாரா?",
    ctaText: "மீண்டும் மீண்டும் வரும் விசாரணைகளை WhatsWare கவனிக்கட்டும்; நீங்கள் உங்கள் பணியில் கவனம் செலுத்துங்கள்.",
  },
  "b2b-sales": {
    title: "B2B விற்பனை",
    hero1: "அதிக லீட்களைப் பெறுங்கள்.",
    hero2: "அதிக B2B ஒப்பந்தங்களை முடிக்குங்கள்.",
    description: "WhatsApp உரையாடல்களை தகுதியான லீட்கள், விற்பனை வாய்ப்புகள் மற்றும் டெமோக்களாக மாற்றுங்கள்.",
    points: ["லீட் தகுதிப்படுத்தல்", "உடனடி விற்பனை பதில்கள்", "டெமோ திட்டமிடல்", "தானியங்கி பின்தொடர்புகள்"],
    cta: "உங்கள் B2B விற்பனையை வேகப்படுத்த தயாரா?",
    ctaText: "அதிக WhatsApp உரையாடல்களை தகுதியான விற்பனை வாய்ப்புகளாக மாற்றுங்கள்.",
  },
};

const tamilLabels: Record<string, string> = {
  "Restaurant & Food Business": "உணவகம் & உணவு வணிகம்",
  "Travel & Tourism": "பயணம் & சுற்றுலா",
  "Spas & Salons": "ஸ்பாக்கள் & சலூன்கள்",
  "Health & Wellness": "ஆரோக்கியம் & நலவாழ்வு",
  "Beauty & Cosmetics": "அழகு & அழகுசாதனங்கள்",
  Edutech: "கல்வித் தொழில்நுட்பம்",
  "Automotive Industry": "வாகனத் துறை",
  "Home Decor & Furnishing": "வீட்டு அலங்காரம் & மரச்சாமான்கள்",
  "Marketing Agency": "மார்க்கெட்டிங் நிறுவனம்",
  "Real Estate": "ரியல் எஸ்டேட்",
  "Freelancers & Consultants": "ஃப்ரீலான்சர்கள் & ஆலோசகர்கள்",
  "B2B Sales": "B2B விற்பனை",
};

export default function IndustrySolution() {
  const [, params1] = useRoute("/solutions/industry/:industry");
  const [, params2] = useRoute("/solutions/:industry");
  const { language } = useLanguage();

  const raw = params1?.industry ?? params2?.industry ?? "b2b-sales";
  const key = aliases[raw] ?? raw;
  const base = industryData[key] ?? industryData["b2b-sales"];

  const isTamil = language === "TA";
  const industry: Industry = useMemo(() => {
    if (!isTamil) return base;
    return {
      ...base,
      ...(tamil[key] ?? {}),
      benefits: base.benefits,
      workflow: base.workflow,
      features: base.features,
      scenes: base.scenes,
    };
  }, [base, isTamil, key]);

  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    setSceneIndex(0);
  }, [key, language]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSceneIndex((current) => (current + 1) % industry.scenes.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [industry.scenes.length, key]);

  const s = industry.scenes[sceneIndex];

  const ui = isTamil
    ? {
        back: "தீர்வுகளுக்குத் திரும்புங்கள்",
        pricing: "விலைத் திட்டங்களைப் பார்க்கவும்",
        integrations: "ஒருங்கிணைப்புகளைப் பார்க்கவும்",
        visual: "நேரடி WhatsApp பயணம்",
        visualSub: "ஒரு விசாரணை எவ்வாறு தானியங்கி வாடிக்கையாளர் பயணமாக மாறுகிறது என்பதைப் பாருங்கள்.",
        customer: "வாடிக்கையாளர்",
        ai: "WhatsWare AI",
        result: "தானியங்கி முடிவு",
        why: "ஏன் WHATSWARE",
        needs: `${industry.title} வணிகங்களுக்கு தேவையான அனைத்தும்`,
        needsSub: "உரையாடல்கள், AI, தானியக்கம், விற்பனை மற்றும் ஆதரவை ஒரே தளத்தில் இணைக்குங்கள்.",
        how: "எப்படி செயல்படுகிறது",
        howSub: "முதல் செய்தியிலிருந்து அடுத்த வணிக வாய்ப்பு வரை WhatsWare பயணத்தை தானியக்கமாக்குகிறது.",
        features: "ஒரே இடத்தில் அனைத்தும்",
        featuresSub: "உங்கள் தொழிலுக்குத் தேவையான WhatsApp கருவிகள்.",
        allSolutions: "அனைத்து தீர்வுகளும்",
      }
    : {
        back: "Back to Solutions",
        pricing: "View Pricing Plans",
        integrations: "View Integrations",
        visual: "LIVE WhatsApp Journey",
        visualSub: "Watch how a real customer enquiry becomes an automated customer journey.",
        customer: "Customer",
        ai: "WhatsWare AI",
        result: "AUTOMATED RESULT",
        why: "WHY WHATSWARE",
        needs: `Everything ${industry.title} businesses need`,
        needsSub: "Connect conversations, AI, automation, sales and support on one powerful platform.",
        how: "HOW IT WORKS",
        howSub: "From the first message to the next business opportunity, WhatsWare automates the journey.",
        features: "Everything in one place",
        featuresSub: "The WhatsApp tools your industry needs to grow.",
        allSolutions: "All Solutions",
      };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F9F6EF] text-[#173C32]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div
            className="absolute -right-40 -top-40 h-[35rem] w-[35rem] rounded-full blur-3xl"
            style={{ backgroundColor: `${industry.accent}20` }}
          />
          <div className="absolute -left-40 top-[45rem] h-96 w-96 rounded-full bg-[#B7CDBB]/25 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/solutions"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#D7CDC1] bg-white/80 px-4 py-2 text-sm font-semibold text-[#53655E] shadow-sm backdrop-blur"
            >
              <ChevronLeft className="h-4 w-4" />
              {ui.back}
            </Link>

            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div
                  className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold shadow-sm"
                  style={{
                    borderColor: `${industry.accent}55`,
                    backgroundColor: industry.soft,
                    color: industry.accent,
                  }}
                >
                  <industry.icon className="h-4 w-4" />
                  {industry.title}
                </div>

                <h1 className="text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
                  {industry.hero1}
                  <span
                    className="mt-2 block"
                    style={{ color: industry.accent }}
                  >
                    {industry.hero2}
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#60736B] sm:text-xl">
                  {industry.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {industry.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-semibold text-[#53655E]"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: industry.soft }}
                      >
                        <Check
                          className="h-4 w-4"
                          style={{ color: industry.accent }}
                        />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#173C32] px-7 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                  >
                    {ui.pricing}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/plug-and-play"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D7CDC1] bg-white px-7 py-3.5 text-sm font-bold text-[#173C32] shadow-sm"
                  >
                    {ui.integrations}
                  </Link>
                </div>
              </div>

              {/* VISUAL STORY / AUTO SLIDER */}
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[2.5rem] opacity-60 blur-2xl"
                  style={{ backgroundColor: `${industry.accent}20` }}
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#E5DED3] bg-white shadow-2xl">
                  <div className="relative h-[350px] overflow-hidden sm:h-[430px]">
                    {industry.scenes.map((item, index) => (
                      <img
                        key={item.image + index}
                        src={item.image}
                        alt={item.label}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                          index === sceneIndex
                            ? "scale-100 opacity-100"
                            : "scale-110 opacity-0"
                        }`}
                      />
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071b15]/90 via-[#071b15]/15 to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#51E58A]" />
                      {ui.visual}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        {s.label}
                      </div>
                      <div className="mt-2 text-2xl font-black text-white sm:text-3xl">
                        {industry.title}
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-[#FFFDF8] p-5 sm:p-6">
                    {/* customer message */}
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-4 py-3 shadow-sm">
                      <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#64825E]">
                        {ui.customer}
                      </div>
                      <div className="text-sm font-medium text-[#244A38]">
                        {s.question}
                      </div>
                    </div>

                    {/* AI message */}
                    <div className="mt-3 flex max-w-[90%] gap-3 rounded-2xl rounded-tl-md border border-[#E7E1D7] bg-white px-4 py-3 shadow-sm">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                        style={{ backgroundColor: industry.accent }}
                      >
                        <Bot className="h-5 w-5" />
                      </div>
                      <div>
                        <div
                          className="mb-1 text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: industry.accent }}
                        >
                          {ui.ai}
                        </div>
                        <div className="text-sm font-medium leading-6 text-[#364A43]">
                          {s.answer}
                        </div>
                      </div>
                    </div>

                    {/* result */}
                    <div
                      className="mt-4 flex items-center gap-3 rounded-2xl border px-4 py-3"
                      style={{
                        borderColor: `${industry.accent}35`,
                        backgroundColor: `${industry.accent}0B`,
                      }}
                    >
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full"
                        style={{ backgroundColor: industry.soft }}
                      >
                        <Check
                          className="h-5 w-5"
                          style={{ color: industry.accent }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: industry.accent }}
                        >
                          {ui.result}
                        </div>
                        <div className="text-sm font-bold text-[#29483D]">
                          {s.result}
                        </div>
                      </div>
                      <Send
                        className="ml-auto h-4 w-4"
                        style={{ color: industry.accent }}
                      />
                    </div>

                    <div className="mt-5 flex gap-1.5">
                      {industry.scenes.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Show scene ${index + 1}`}
                          onClick={() => setSceneIndex(index)}
                          className="h-1.5 flex-1 rounded-full transition-all"
                          style={{
                            backgroundColor:
                              index === sceneIndex
                                ? industry.accent
                                : "#E4DED5",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center text-xs font-semibold text-[#7A877F]">
                  {ui.visualSub}
                </p>
              </div>
            </div>

            <div className="mt-16 grid overflow-hidden rounded-3xl border border-[#E5DED3] bg-white shadow-xl sm:grid-cols-3">
              {[
                ["24/7", isTamil ? "வாடிக்கையாளர் ஈடுபாடு" : "Customer engagement"],
                ["Instant", isTamil ? "AI பதில்கள்" : "AI responses"],
                ["1", isTamil ? "ஒருங்கிணைந்த தளம்" : "Unified platform"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`px-6 py-7 text-center ${
                    index < 2
                      ? "border-b border-[#E5DED3] sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div
                    className="text-3xl font-black"
                    style={{ color: industry.accent }}
                  >
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#7B8982]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="text-sm font-black uppercase tracking-[0.2em]"
                style={{ color: industry.accent }}
              >
                {ui.why}
              </div>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                {ui.needs}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#60736B]">
                {ui.needsSub}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industry.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-[#E5DED3] bg-[#FFFDF8] p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: industry.soft,
                      color: industry.accent,
                    }}
                  >
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#687871]">
                    {benefit.text}
                  </p>
                  <div
                    className="mt-5 h-1 w-8 rounded-full transition-all group-hover:w-14"
                    style={{ backgroundColor: industry.accent }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F9F6EF] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{ color: industry.accent }}
                >
                  {ui.how}
                </div>
                <h2 className="mt-5 text-3xl font-black sm:text-5xl">
                  {isTamil ? "முதல் செய்தியிலிருந்து" : "From the first message"}
                  <span className="block" style={{ color: industry.accent }}>
                    {isTamil ? "வணிக வாய்ப்பு வரை." : "to a business opportunity."}
                  </span>
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-[#687871]">
                  {ui.howSub}
                </p>

                <div className="mt-8 rounded-3xl border border-[#E5DED3] bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: industry.soft,
                        color: industry.accent,
                      }}
                    >
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-black">WhatsWare AI</div>
                      <div className="text-xs text-[#7B8982]">
                        {isTamil
                          ? "எப்போதும் வாடிக்கையாளர்களுடன் இணைந்திருக்கும்"
                          : "Always connected to your customers"}
                      </div>
                    </div>
                    <span className="ml-auto h-2.5 w-2.5 animate-pulse rounded-full bg-[#159447]" />
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {industry.workflow.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-[#E5DED3] bg-white p-6 shadow-sm sm:p-7"
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                          style={{ backgroundColor: industry.accent }}
                        >
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-black tracking-widest"
                            style={{ color: industry.accent }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-black">{step.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#687871]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-[2rem] bg-[#173C32] p-8 text-white shadow-2xl sm:p-12">
              <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: industry.accent }}
                  >
                    <industry.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-7 text-3xl font-black sm:text-4xl">
                    {ui.features}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/65">
                    {ui.featuresSub}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {industry.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${industry.accent}35` }}
                      >
                        <Check
                          className="h-4 w-4"
                          style={{ color: industry.accent }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-white/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F6EF] pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#E5DED3] bg-white px-7 py-14 text-center shadow-xl sm:px-14 sm:py-16">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#E5A000] text-[#E5A000]"
                  />
                ))}
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black sm:text-5xl">
                {industry.cta}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#687871]">
                {industry.ctaText}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-[#173C32] px-7 py-3.5 text-sm font-bold text-white"
                >
                  {ui.pricing}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="rounded-full border border-[#D7CDC1] bg-white px-7 py-3.5 text-sm font-bold"
                >
                  {ui.allSolutions}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
