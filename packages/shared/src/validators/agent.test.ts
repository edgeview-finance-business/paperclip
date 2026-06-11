import { describe, expect, it } from "vitest";
import { updateAgentSchema } from "./agent.js";

describe("agent validators", () => {
  it("accepts pause metadata on agent updates", () => {
    const parsed = updateAgentSchema.parse({
      status: "paused",
      pauseReason: "manual",
      pausedAt: "2026-06-07T00:00:00.000Z",
    });

    expect(parsed.status).toBe("paused");
    expect(parsed.pauseReason).toBe("manual");
    expect(parsed.pausedAt).toEqual(new Date("2026-06-07T00:00:00.000Z"));
  });
});
