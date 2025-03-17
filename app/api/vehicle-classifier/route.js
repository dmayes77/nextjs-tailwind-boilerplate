// src/app/api/vehicle-classifier/route.js
import { buildClassificationResult } from "@/lib/vehicleUtils";

export async function POST(request) {
  try {
    // Parse the incoming request body
    const requestData = await request.json();

    const { year, make, model, trim } = requestData;

    // Build the details string from the provided info
    const details = `Year: ${year}\nMake: ${make}\nModel: ${model}${trim ? `\nTrim: ${trim}` : ""}`;

    // Construct the prompt (modeled after your Python version)
    const prompt = `
Classify the following vehicle into one of four size categories: Small, Medium, Large, or Extra Large.
Provide vehicle type, dimensions (length and width), passenger capacity (can be a range like 3-6), and purpose in JSON format.

# Details
${details}

# Output Format (JSON)
{
    "category": "Small/Medium/Large/Extra Large",
    "type": "Type of vehicle",
    "length": "Length in inches",
    "width": "Width in inches",
    "capacity": "Capacity as a number or range (e.g., '3-6 passengers')",
    "purpose": "Purpose of the vehicle"
}
    `;

    // Retrieve your OpenAI API key from environment variables
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error("OpenAI API key is missing. Please set it in your environment variables.");
    }

    // Call the OpenAI API
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4", // or use 'gpt-3.5-turbo' if preferred
        messages: [
          {
            role: "system",
            content: "You classify vehicles by size and attributes.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.5,
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.statusText}`);
    }

    const openaiData = await openaiResponse.json();
    const gptResponseContent = openaiData.choices[0].message.content;

    let gptData;
    try {
      // Attempt to parse the GPT response content as JSON
      gptData = JSON.parse(gptResponseContent);
    } catch (parseError) {
      throw new Error("Failed to parse GPT response as JSON.");
    }

    // Build a structured classification result
    const classificationResult = buildClassificationResult(year, make, model, trim, gptData);

    return new Response(JSON.stringify(classificationResult), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
