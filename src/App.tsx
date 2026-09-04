import { useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingAira from "@/components/FloatingAira";

import {
  Route,
  Switch,
  Router as WouterRouter,
  useLocation,
} from "wouter";

import { LanguageProvider } from "@/context/LanguageContext";

import Chatbot from "@/components/Chatbot";
import NotFound from "@/pages/not-found";
import Aira from "@/pages/Aira";

/* =========================================================
   HOME
========================================================= */
import Home from "@/pages/Home";

/* =========================================================
   PRODUCTS
========================================================= */
import Products from "@/pages/Products";
import ProductSolution from "@/pages/ProductSolution";
import MarketingHub from "@/pages/MarketingHub";
import SupportHub from "@/pages/SupportHub";
import WhatsAppAutomation from "@/pages/WhatsAppAutomation";
import WorkflowBuilder from "@/pages/WorkflowBuilder";
import Analytics from "@/pages/Analytics";
import ProductFeatures from "@/pages/ProductFeatures";
import InstagramAutomation from "@/pages/InstagramAutomation";

/* =========================================================
   PRODUCT PAGES
========================================================= */
import ClickToWhatsAppAds from "@/pages/ClickToWhatsAppAds";
import WhatsAppQRCode from "@/pages/WhatsAppQRCode";
import WhatsAppLinkGenerator from "@/pages/WhatsAppLinkGenerator";
import WhatsAppChatWidget from "@/pages/WhatsAppChatWidget";
import WhatsAppChatbots from "@/pages/WhatsAppChatbots";
import WhatsAppForms from "@/pages/WhatsAppForms";
import AILeadQualification from "@/pages/AILeadQualification";
import WhatsAppBroadcast from "@/pages/WhatsAppBroadcast";
import AutomatedFollowups from "@/pages/AutomatedFollowups";
import SharedTeamInbox from "@/pages/SharedTeamInbox";
import WhatsAppSales from "@/pages/WhatsAppSales";
import WhatsAppPayments from "@/pages/WhatsAppPayments";

/* =========================================================
   OTHER PAGES
========================================================= */
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import Partnership from "@/pages/Partnership";
import Solutions from "@/pages/Solutions";
import WhatsAppSolution from "@/pages/WhatsAppSolution";
import ChannelSolution from "@/pages/ChannelSolution";
import IndustrySolution from "@/pages/IndustrySolution";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import PlugAndPlay from "@/pages/PlugAndPlay";
import About from "@/pages/About";
import BookDemo from "@/pages/BookDemo";
import RCS from "@/pages/RCS";
import Voice from "@/pages/Voice";

/* =========================================================
   REACT QUERY
========================================================= */
const queryClient = new QueryClient();

/* =========================================================
   SCROLL TO TOP
========================================================= */
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return null;
}

/* =========================================================
   GLOBAL SCROLLBAR
========================================================= */
function GlobalScrollbarStyle() {
  return (
    <style>
      {`
        html {
          scroll-behavior: auto;
          scrollbar-width: thin;
          scrollbar-color: #159447 #f1f5f3;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f3;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            #159447 0%,
            #0f7d3a 100%
          );
          border-radius: 999px;
          border: 2px solid #f1f5f3;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            #0f7d3a 0%,
            #0b642f 100%
          );
        }

        ::-webkit-scrollbar-corner {
          background: #f1f5f3;
        }

        ::selection {
          background: rgba(21, 148, 71, 0.18);
        }
      `}
    </style>
  );
}

/* =========================================================
   ROUTER
========================================================= */
function Router() {
  return (
    <WouterRouter>
      {/* ===================================================
          GLOBAL PAGE BEHAVIOUR
      ==================================================== */}
      <ScrollToTop />
      <GlobalScrollbarStyle />

      {/* ===================================================
          GLOBAL NAVBAR
          Navbar appears only once
      ==================================================== */}

      <Switch>

        {/* =================================================
            HOME
        ================================================== */}
        <Route
          path="/"
          component={Home}
        />

        {/* =================================================
            AIRA
        ================================================== */}
        <Route
          path="/aira"
          component={Aira}
        />

        {/* =================================================
            ABOUT
        ================================================== */}
        <Route
          path="/about"
          component={About}
        />

        {/* =================================================
            PRODUCTS MAIN
        ================================================== */}
        <Route
          path="/products"
          component={Products}
        />

        {/* =================================================
            PRODUCT PAGES
        ================================================== */}

        <Route
          path="/products/click-to-whatsapp-ads"
          component={ClickToWhatsAppAds}
        />

        <Route
          path="/products/whatsapp-qr-code"
          component={WhatsAppQRCode}
        />

        <Route
          path="/products/whatsapp-link-generator"
          component={WhatsAppLinkGenerator}
        />

        <Route
          path="/products/whatsapp-chat-widget"
          component={WhatsAppChatWidget}
        />

        {/* =================================================
            AI AGENTS
        ================================================== */}
        <Route
          path="/products/ai-agents"
          component={ProductSolution}
        />

        <Route
          path="/products/whatsapp-chatbots"
          component={WhatsAppChatbots}
        />

        <Route
          path="/products/whatsapp-forms"
          component={WhatsAppForms}
        />

        <Route
          path="/products/ai-lead-qualification"
          component={AILeadQualification}
        />

        <Route
          path="/products/whatsapp-broadcast"
          component={WhatsAppBroadcast}
        />

        <Route
          path="/products/whatsapp-automation"
          component={WhatsAppAutomation}
        />

        <Route
          path="/products/workflow-builder"
          component={WorkflowBuilder}
        />

        <Route
          path="/products/automated-follow-ups"
          component={AutomatedFollowups}
        />

        <Route
          path="/products/shared-team-inbox"
          component={SharedTeamInbox}
        />

        <Route
          path="/products/whatsapp-sales"
          component={WhatsAppSales}
        />

        <Route
          path="/products/whatsapp-payments"
          component={WhatsAppPayments}
        />

        <Route
          path="/products/analytics"
          component={Analytics}
        />

        <Route
          path="/products/marketing-hub"
          component={MarketingHub}
        />

        <Route
          path="/products/support-hub"
          component={SupportHub}
        />

        <Route
          path="/products/product-features"
          component={ProductFeatures}
        />

        {/* =================================================
            OLD PRODUCT ROUTES
            Kept for compatibility
        ================================================== */}

        <Route
          path="/marketing-hub"
          component={MarketingHub}
        />

        <Route
          path="/support-hub"
          component={SupportHub}
        />

        {/* =================================================
            INTEGRATIONS
        ================================================== */}

        <Route
          path="/integrations"
          component={PlugAndPlay}
        />

        <Route
          path="/plug-and-play"
          component={PlugAndPlay}
        />

        {/* =================================================
            PRICING
        ================================================== */}

        <Route
          path="/pricing"
          component={Pricing}
        />

        {/* =================================================
            RESOURCES
        ================================================== */}

        <Route
          path="/resources"
          component={Resources}
        />

        {/* =================================================
            PARTNERSHIP
        ================================================== */}

        <Route
          path="/partnership"
          component={Partnership}
        />

        {/* =================================================
            LOGIN
        ================================================== */}

        <Route
          path="/login"
          component={Login}
        />

        {/* =================================================
            SIGN UP
        ================================================== */}

        <Route
          path="/signup"
          component={SignUp}
        />

        {/* =================================================
            SOLUTIONS MAIN PAGE
        ================================================== */}

        <Route
          path="/solutions"
          component={Solutions}
        />

        {/* =================================================
            CHANNEL SOLUTIONS
        ==================================================

            IMPORTANT:

            WhatsApp gets its own route FIRST.

            This means:

            /solutions/channels/whatsapp
                         ↓
                  WhatsAppSolution

            Other channels:

            /solutions/channels/instagram
            /solutions/channels/rcs
            /solutions/channels/voice

                         ↓
                  ChannelSolution
        ================================================== */}

        <Route
          path="/solutions/channels/whatsapp"
          component={WhatsAppSolution}
        />

        <Route
          path="/solutions/channels/instagram"
          component={InstagramAutomation}
        />

        <Route
          path="/solutions/channels/voice"
          component={Voice}
        />

        {/* VOICE COMPATIBILITY ROUTE */}
        <Route
          path="/solutions/voice"
          component={Voice}
        />

        <Route
          path="/solutions/rcs"
          component={RCS}
        />

        <Route
          path="/solutions/channels/:channel"
          component={ChannelSolution}
        />

       
        {/* =================================================
            SINGULAR CHANNEL URL
            Compatibility route
        ================================================== */}

        <Route
          path="/solutions/channel/:channel"
          component={ChannelSolution}
        />

        {/* =================================================
            WHATSAPP SOLUTION COMPATIBILITY ROUTE

            Supports URLs like:

            /solutions/whatsapp/automation
            /solutions/whatsapp/broadcast
            /solutions/whatsapp/chatbots

        ================================================== */}

        <Route
          path="/solutions/whatsapp/:solution"
          component={WhatsAppSolution}
        />

        {/* =================================================
            INDUSTRY SOLUTIONS
        ================================================== */}

        <Route
          path="/solutions/industry/:industry"
          component={IndustrySolution}
        />

        {/* =================================================
            OLD INDUSTRY URL COMPATIBILITY
        ================================================== */}

        <Route
          path="/solutions/:industry"
          component={IndustrySolution}
        />

        {/* =================================================
            404
        ================================================== */}

        <Route
          path="/book-demo"
          component={BookDemo}
        />

        <Route
          component={NotFound}
        />

      </Switch>

      {/* =================================================
          GLOBAL CHATBOT
      ================================================== */}
      <Chatbot />

    </WouterRouter>
  );
}

/* =========================================================
   APP
========================================================= */
export default function App() {
  return (
    <LanguageProvider>

  

      <QueryClientProvider client={queryClient}>

        <TooltipProvider>

          <Toaster />

            <FloatingAira />

          <Router />

        </TooltipProvider>

      </QueryClientProvider>

    </LanguageProvider>
  );
}