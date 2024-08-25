const pricing_data = {
  free: [
    { feature: "Transactions", available: true },
    { feature: "Auth", available: true },
    { feature: "Identity", available: true },
    { feature: "Investments", available: false },
    { feature: "Assets", available: false },
    { feature: "Liabilities", available: false },
    { feature: "Income", available: false },
  ],
  basic: [
    { feature: "Transactions", available: true },
    { feature: "Auth", available: true },
    { feature: "Identity", available: true },
    { feature: "Investments", available: true },
    { feature: "Assets", available: true },
    { feature: "Liabilities", available: false },
    { feature: "Income", available: false },
  ],
  premium: [
    { feature: "Transactions", available: true },
    { feature: "Auth", available: true },
    { feature: "Identity", available: true },
    { feature: "Investments", available: true },
    { feature: "Assets", available: true },
    { feature: "Liabilities", available: true },
    { feature: "Income", available: true },
  ],
};

export default pricing_data;
