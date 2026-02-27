import Stripe from "stripe";

export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export const PLANS = {
  free: {
    name: "Free",
    description: "For individuals getting started",
    price: 0,
    features: [
      "Up to 50 feedback items",
      "Basic analytics",
      "Community support",
      "1 project",
    ],
  },
  pro: {
    name: "Pro",
    description: "For growing teams",
    price: 19,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      "Unlimited feedback",
      "Advanced analytics",
      "Priority support",
      "Unlimited projects",
      "AI-powered search",
      "Email notifications",
      "Custom branding",
    ],
  },
} as const;
