import {
  useState,
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { askAiCoach } from "../../services/ai.service";

const AiCoach = () => {
  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleAskAi =
    async () => {
      try {
        setLoading(true);

        const response =
          await askAiCoach(
            message
          );

        setReply(
          response.reply
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          AI Fitness Coach
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <textarea
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Ask anything about fitness..."
            className="w-full h-[150px] bg-black rounded-xl p-4 outline-none"
          />

          <button
            onClick={handleAskAi}
            className="mt-4 px-6 py-3 bg-white text-black rounded-xl"
          >
            {loading
              ? "Thinking..."
              : "Ask AI"}
          </button>

          {reply && (
            <div className="mt-8 bg-black rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-4">
                AI Response
              </h2>

              <p className="text-zinc-300 whitespace-pre-line">
                {reply}
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiCoach;