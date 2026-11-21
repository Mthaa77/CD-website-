export const sectorExperience: Record<string, { promise: string; benefits: [string, string][]; business: string }> = {
  "law-firms": {
    promise: "Help the right clients reach the right practice.",
    benefits: [
      ["Lead with your expertise", "Give each practice area a clear page so a prospective client can judge whether your firm handles their matter."],
      ["Put the people behind the practice in view", "Connect attorney profiles and office information to the relevant services."],
      ["Route the first enquiry", "Collect a preferred contact method and the practice area before the first conversation."],
    ],
    business: "my law firm",
  },
  construction: {
    promise: "Make your track record easy to assess.",
    benefits: [
      ["Show the scale of your work", "Use project photography, locations and scope to show what your team delivers."],
      ["Explain where you work", "Give buyers a clear view of your services, capabilities and areas covered."],
      ["Give estimating a head start", "Collect the project type and site location so the right person can follow up."],
    ],
    business: "my construction company",
  },
  "dental-practices": {
    promise: "Make the first visit easier to arrange.",
    benefits: [
      ["Explain treatments plainly", "Help patients understand which services your practice offers and what they can ask about."],
      ["Answer practical questions", "Show the practice location, opening hours and what to bring before the visit."],
      ["Give reception a useful request", "Collect the visit type and preferred time of day for a callback."],
    ],
    business: "my dental practice",
  },
  schools: {
    promise: "Give parents a clear route to admissions.",
    benefits: [
      ["Find the right grade", "Organise entry requirements by phase so families can go directly to the information they need."],
      ["Make dates and policies easy to find", "Put deadlines, notices and admissions resources where parents can reach them on a phone."],
      ["Help families arrive prepared", "Provide a practical checklist and a direct route to the admissions team."],
    ],
    business: "my school",
  },
};
