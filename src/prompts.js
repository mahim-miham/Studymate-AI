// ─────────────────────────────────────────────
//  prompts.js  —  all AI prompts in one file
//  Edit these anytime to tune the output
// ─────────────────────────────────────────────

export const prompts = {
  research: ({ topic, depth, subject }) =>
    `You are an academic research assistant. Provide a ${depth.toLowerCase()} on: "${topic}" in the subject area of ${subject}.

Structure your response with:
1. Overview (2-3 sentences)
2. Key Concepts (5-7 bullet points)
3. Important Facts and Statistics
4. Real-world Applications
5. Suggested further reading (3 topics)

Be accurate, clear, and student-friendly.`,

  assignment: ({ topic, type, wordCount, extra }) =>
    `Write a ${type} for a university student on: "${topic}". Target length: ${wordCount}.${extra ? `\nAdditional instructions: ${extra}` : ''}

Include:
- A proper introduction with a clear thesis statement
- Well-structured body paragraphs with topic sentences
- Evidence, examples, and analysis
- A strong conclusion
- Academic tone and language throughout

Make it original and well-reasoned.`,

  slides: ({ topic, count, audience }) =>
    `Create a ${count} presentation on: "${topic}" for ${audience}.

For EACH slide, write exactly:
SLIDE [number]: [Title]
Content: [3-4 bullet points]
Speaker note: [One sentence the presenter says]
---

Separate every slide with --- on its own line.`,

  video: ({ topic, duration, tone }) =>
    `Write a ${tone.toLowerCase()} video script on: "${topic}". Target duration: ${duration}.

Format:
[INTRO - Strong hook to open the video]
[MAIN CONTENT - Broken into clear sections with smooth transitions]
[CONCLUSION - Summarize key points and end strongly]

Include stage directions like [pause], [look at camera], [show diagram] where natural. Make it easy and natural to read aloud.`,

  notes: ({ content, format }) =>
    `Convert this into clear ${format} study notes for a university student:

"${content}"

Make the notes:
- Easy to review before an exam
- Well-organized with clear headings
- Include key definitions, formulas, or dates where relevant
- Highlight the most critical points`,

  quiz: ({ topic, count, difficulty }) =>
    `Generate ${count} ${difficulty.toLowerCase()} difficulty MCQ questions on: "${topic}".

For each question use this exact format:
Q[number]: [Question]
A) [option]
B) [option]
C) [option]
D) [option]
Answer: [correct letter] - [brief explanation of why]

Mix question types: factual recall, application, and analysis. Make them genuinely educational and challenging.`,
};
