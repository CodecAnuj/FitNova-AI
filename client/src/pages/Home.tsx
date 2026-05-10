// Starter landing page for FitNova-AI.
// Later we will convert this into a professional SaaS landing page.

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        FitNova-AI
      </h1>

      <p className="text-zinc-400 text-lg mb-6">
        Your Personal AI Fitness & Budget Diet Coach
      </p>

      <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default Home;