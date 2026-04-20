export interface LeadData {
  firstName: string;
  email: string;
  phone: string;
  colorProfile: string;
  undertone: string;
  chroma: string;
  contrast: string;
  depth: string;
}

export async function submitToGHL(data: LeadData): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("GHL webhook URL not configured — lead not submitted.");
    return;
  }

  const payload = {
    firstName: data.firstName,
    email: data.email,
    phone: data.phone,
    customField: {
      colorProfile: data.colorProfile,
      undertone: data.undertone,
      chroma: data.chroma,
      contrast: data.contrast,
      depth: data.depth,
    },
    tags: ["color-code-quiz", `profile-${data.undertone}`, `chroma-${data.chroma}`],
    source: "The Color Code Quiz",
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("GHL submit failed:", err);
    // Non-fatal — results still show to the user
  }
}
