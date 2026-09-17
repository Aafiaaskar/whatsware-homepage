import { useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  Route,
  Switch,
  Router as WouterRouter,
  useLocation,
} from "wouter";

/* =========================================================
   MAIN PAGES
========================================================= */

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Aira from "@/pages/Aira";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import Pricing from "@/pages/Pricing";
import Partnership from "@/pages/Partnership";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import BookDemo from "@/pages/BookDemo";

/* =========================================================
   LEGAL / INFORMATION PAGES
========================================================= */

import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import WhyWhatsWare from "@/pages/WhyWhatsware";

/* =========================================================
   PRODUCT HUBS
========================================================= */

import MarketingHub from "@/pages/MarketingHub";
import SupportHub from "@/pages/SupportHub";

/* =========================================================
   PRODUCT PAGES
========================================================= */

import ProductSolution from "@/pages/ProductSolution";
import ProductFeatures from "@/pages/ProductFeatures";
import WhatsAppAIAgents from "@/pages/WhatsAppAIAgents";
import WhatsAppAutomation from "@/pages/WhatsAppAutomation";
import WhatsAppBroadcast from "@/pages/WhatsAppBroadcast";
import WhatsAppChatbots from "@/pages/WhatsAppChatbots";
import WhatsAppChatWidget from "@/pages/WhatsAppChatWidget";
import WhatsAppForms from "@/pages/WhatsAppForms";
import WhatsAppLinkGenerator from "@/pages/WhatsAppLinkGenerator";
import WhatsAppPayments from "@/pages/WhatsAppPayments";
import WhatsAppQRCode from "@/pages/WhatsAppQRCode";
import WhatsAppSales from "@/pages/WhatsAppSales";
import ClickToWhatsAppAds from "@/pages/ClickToWhatsAppAds";
import SharedTeamInbox from "@/pages/SharedTeamInbox";
import WorkflowBuilder from "@/pages/WorkflowBuilder";
import Analytics from "@/pages/Analytics";
import AutomatedFollowups from "@/pages/AutomatedFollowups";
import AILeadQualification from "@/pages/AILeadQualification";
import AIAgents from "@/pages/AIAgents";
import InstagramAutomation from "@/pages/InstagramAutomation";

/* =========================================================
   SOLUTION PAGES
========================================================= */

import WhatsAppSolution from "@/pages/WhatsAppSolution";
import ChannelSolution from "@/pages/ChannelSolution";
import IndustrySolution from "@/pages/IndustrySolution";

/* =========================================================
   INTEGRATIONS
========================================================= */

import PlugAndPlay from "@/pages/PlugAndPlay";

/* =========================================================
   RCS + VOICE
========================================================= */

import RCS from "@/pages/RCS";
import Voice from "@/pages/Voice";

/* =========================================================
   LANGUAGE
========================================================= */

import { LanguageProvider } from "@/context/LanguageContext";

/* =========================================================
   GLOBAL CHATBOT
========================================================= */

import Chatbot from "@/components/Chatbot";

/* =========================================================
   QUERY CLIENT
========================================================= */

const queryClient = new QueryClient();

/* =========================================================
   GLOBAL SCROLL RESET
========================================================= */

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Always start every newly opened route at the top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Also reset document/body scroll position
    // for layouts where the browser preserves scroll.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}

/* =========================================================
   ROUTER
========================================================= */

function Router() {
  return (
    <Switch>
      {/* =====================================================
          HOME
      ===================================================== */}

      <Route path="/" component={Home} />

      <Route path="/aira" component={Aira} />

      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}

      <Route path="/products" component={Products} />

      <Route path="/solutions" component={Solutions} />

      <Route path="/pricing" component={Pricing} />

      <Route
        path="/partnerships"
        component={Partnership}
      />

      <Route
        path="/partnership"
        component={Partnership}
      />

      <Route
        path="/resources"
        component={Resources}
      />

      <Route
        path="/about"
        component={About}
      />

      <Route
        path="/login"
        component={Login}
      />

      <Route
        path="/signup"
        component={SignUp}
      />

      <Route
        path="/book-demo"
        component={BookDemo}
      />

      {/* =====================================================
          LEGAL / INFORMATION
      ===================================================== */}

      <Route
        path="/privacy-policy"
        component={PrivacyPolicy}
      />

      <Route
        path="/terms-conditions"
        component={TermsConditions}
      />

      {/* =====================================================
          WHY WHATSWARE
      ===================================================== */}

      <Route
        path="/why-whatsware"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-aisensy"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-bitespeed"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-delightchat"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-limechat"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-businessonbot"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-wati"
        component={WhyWhatsWare}
      />

      <Route
        path="/why-whatsware/vs-qontak"
        component={WhyWhatsWare}
      />

      {/* =====================================================
          RESOURCE COMPATIBILITY ROUTES
      ===================================================== */}

      <Route
        path="/resources/case-studies"
        component={Resources}
      />

      <Route
        path="/resources/notifications"
        component={Resources}
      />

      <Route
        path="/resources/blogs"
        component={Resources}
      />

      <Route
        path="/resources/academy"
        component={Resources}
      />

      <Route
        path="/resources/faqs"
        component={Resources}
      />

      {/* =====================================================
          PRODUCT HUBS
      ===================================================== */}

      <Route
        path="/products/marketing"
        component={MarketingHub}
      />

      <Route
        path="/products/marketing-hub"
        component={MarketingHub}
      />

      <Route
        path="/products/support"
        component={SupportHub}
      />

      <Route
        path="/products/support-hub"
        component={SupportHub}
      />

      {/* =====================================================
          PRODUCT PAGES
      ===================================================== */}

      <Route
        path="/products/solution"
        component={ProductSolution}
      />

      <Route
        path="/products/features"
        component={ProductFeatures}
      />

      <Route
        path="/products/whatsapp-ai-agents"
        component={WhatsAppAIAgents}
      />

      <Route
        path="/products/whatsapp-automation"
        component={WhatsAppAutomation}
      />

      <Route
        path="/products/whatsapp-broadcast"
        component={WhatsAppBroadcast}
      />

      <Route
        path="/products/whatsapp-chatbots"
        component={WhatsAppChatbots}
      />

      <Route
        path="/products/whatsapp-chat-widget"
        component={WhatsAppChatWidget}
      />

      <Route
        path="/products/whatsapp-forms"
        component={WhatsAppForms}
      />

      <Route
        path="/products/whatsapp-link-generator"
        component={WhatsAppLinkGenerator}
      />

      <Route
        path="/products/whatsapp-payments"
        component={WhatsAppPayments}
      />

      <Route
        path="/products/whatsapp-qr-code"
        component={WhatsAppQRCode}
      />

      <Route
        path="/products/whatsapp-sales"
        component={WhatsAppSales}
      />

      <Route
        path="/products/click-to-whatsapp-ads"
        component={ClickToWhatsAppAds}
      />

      <Route
        path="/products/shared-team-inbox"
        component={SharedTeamInbox}
      />

      <Route
        path="/products/workflow-builder"
        component={WorkflowBuilder}
      />

      <Route
        path="/products/analytics"
        component={Analytics}
      />

      <Route
        path="/products/automated-followups"
        component={AutomatedFollowups}
      />

      <Route
        path="/products/ai-lead-qualification"
        component={AILeadQualification}
      />

      <Route
        path="/products/ai-agents"
        component={AIAgents}
      />

      <Route
        path="/products/instagram-automation"
        component={InstagramAutomation}
      />

      {/* =====================================================
          INTEGRATIONS / PLUG & PLAY
      ===================================================== */}

      <Route
        path="/integrations"
        component={PlugAndPlay}
      />

      <Route
        path="/plug-and-play"
        component={PlugAndPlay}
      />

      <Route
        path="/products/plug-and-play"
        component={PlugAndPlay}
      />

      {/* =====================================================
          RCS + VOICE PRODUCT ROUTES
      ===================================================== */}

      <Route
        path="/products/rcs"
        component={RCS}
      />

      <Route
        path="/products/voice"
        component={Voice}
      />

      {/* =====================================================
          WHATSAPP SOLUTION ROUTES
      ===================================================== */}

      <Route
        path="/solutions/whatsapp/:solution"
        component={WhatsAppSolution}
      />

      {/* =====================================================
          CHANNEL SOLUTION ROUTES
      ===================================================== */}

      <Route
        path="/solutions/channels/whatsapp"
        component={ChannelSolution}
      />

      <Route
        path="/solutions/channels/instagram"
        component={InstagramAutomation}
      />

      <Route
        path="/solutions/channels/:channel"
        component={ChannelSolution}
      />

      {/* Old URL compatibility */}
      <Route
        path="/solutions/channel/:channel"
        component={ChannelSolution}
      />

      {/* =====================================================
          RCS + VOICE SOLUTION ROUTES
      ===================================================== */}

      <Route
        path="/solutions/rcs"
        component={RCS}
      />

      <Route
        path="/solutions/voice"
        component={Voice}
      />

      {/* =====================================================
          EXISTING INDUSTRY ROUTE
      ===================================================== */}

      <Route
        path="/solutions/industry/:industry"
        component={IndustrySolution}
      />

      {/* =====================================================
          HOMEPAGE INDUSTRY CARD ROUTES

          These are the routes used by BusinessScenarios.tsx.

          IMPORTANT:
          This route must come before the final NotFound.
      ===================================================== */}

      <Route
        path="/solutions/:industry"
        component={IndustrySolution}
      />

      {/* =====================================================
          FALLBACK / 404
      ===================================================== */}

      <Route component={NotFound} />
    </Switch>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter
            base={import.meta.env.BASE_URL.replace(/\/$/, "")}
          >
            <ScrollToTop />

            <Router />
          </WouterRouter>

          {/* =================================================
              GLOBAL AIRA FLOATING CHATBOT

              This stays visible on every page.
          ================================================= */}

          <Chatbot />

          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
