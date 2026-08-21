import { AssessmentDimensionScore, AssessmentResult } from "@/types";

export interface AssessmentAnswers {
  [questionId: string]: number; // score 1-5
}

export function runAssessmentAgent(answers: AssessmentAnswers): AssessmentResult {
  // Mapping question IDs to dimensions
  // q1, q2 -> Analytical
  // q3, q4 -> Creative
  // q5, q6 -> Technical
  // q7, q8 -> Leadership
  // q9, q10 -> Communication

  const dimensionMap: Record<string, "Analytical" | "Creative" | "Technical" | "Leadership" | "Communication"> = {
    q1: "Analytical",
    q2: "Analytical",
    q3: "Creative",
    q4: "Creative",
    q5: "Technical",
    q6: "Technical",
    q7: "Leadership",
    q8: "Leadership",
    q9: "Communication",
    q10: "Communication",
  };

  const rawTotals: Record<string, { sum: number; count: number }> = {
    Analytical: { sum: 0, count: 0 },
    Creative: { sum: 0, count: 0 },
    Technical: { sum: 0, count: 0 },
    Leadership: { sum: 0, count: 0 },
    Communication: { sum: 0, count: 0 },
  };

  // Populate from answers
  Object.entries(answers).forEach(([qId, score]) => {
    const dim = dimensionMap[qId];
    if (dim) {
      rawTotals[dim].sum += score;
      rawTotals[dim].count += 1;
    }
  });

  // Calculate scores (0 - 100)
  const scores: AssessmentDimensionScore[] = Object.keys(rawTotals).map((key) => {
    const dim = key as "Analytical" | "Creative" | "Technical" | "Leadership" | "Communication";
    const item = rawTotals[dim];
    // max score per question is 5. If count is 0, give baseline 60.
    const average = item.count > 0 ? item.sum / item.count : 3.5;
    const scoreVal = Math.round((average / 5) * 100);
    const percentile = Math.min(Math.round(scoreVal * 0.95 + 4), 99);

    let desc = "";
    let strength = "";
    if (dim === "Analytical") {
      desc = "Capability to structure complex logic, spot numerical patterns, and evaluate statistical correlations.";
      strength = scoreVal >= 75 ? "Exceptional quantitative reasoning and problem deconstruction" : "Structured logical thinking";
    } else if (dim === "Creative") {
      desc = "Aptitude for original visual aesthetic, narrative storytelling, and out-of-the-box system improvements.";
      strength = scoreVal >= 75 ? "Inventive design thinking and strategic aesthetic vision" : "Appreciation of creative styling";
    } else if (dim === "Technical") {
      desc = "Fluency with computational systems, modern programming algorithms, cloud systems, and automated tooling.";
      strength = scoreVal >= 75 ? "Deep technical curiosity, rapid software adaptation, and code aptitude" : "Comfortable with standard digital tools";
    } else if (dim === "Leadership") {
      desc = "Capacity to galvanize multidisciplinary groups, navigate high-stress deadlines, and drive mission execution.";
      strength = scoreVal >= 75 ? "Commanding initiative, team resilience, and strategic delegation" : "Collaborative team contributor";
    } else {
      desc = "Articulate verbal presentation, empathetic listening, persuasive negotiation, and cross-cultural clarity.";
      strength = scoreVal >= 75 ? "High emotional intelligence, public oratory, and stakeholder alignment" : "Clear direct communicator";
    }

    return {
      dimension: dim,
      score: scoreVal,
      percentile,
      description: desc,
      strengthsSummary: strength,
    };
  });

  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const dominantTraits = sortedScores.slice(0, 2).map((s) => `${s.dimension} Proficiency (${s.score}%)`);
  const topAptitudeAreas = sortedScores.slice(0, 3).map((s) => s.dimension);

  const overallAptitudeIndex = Math.round(scores.reduce((acc, s) => acc + s.score, 0) / scores.length);

  const careerCompatibilitySummary = `Student demonstrates top performance in ${sortedScores[0].dimension} (${sortedScores[0].score}%) and ${sortedScores[1].dimension} (${sortedScores[1].score}%). This cognitive fingerprint strongly points towards high-growth analytical and technical careers with strategic leadership avenues.`;

  return {
    completedAt: new Date().toISOString(),
    scores,
    overallAptitudeIndex,
    dominantTraits,
    topAptitudeAreas,
    careerCompatibilitySummary,
  };
}
