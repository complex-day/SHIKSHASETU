import { DistrictOpportunityData, StudentProfile } from "@/types";
import { JK_DISTRICTS_DATA } from "@/lib/data/jkDistricts";

export interface DistrictInsight {
  district: DistrictOpportunityData;
  isHomeDistrict: boolean;
  opportunityIndex: number;
  highlightedIndustries: string[];
  keyGrowthPrograms: string[];
  missionYouthAdvisory: string;
}

export function runOpportunityDiscoveryAgent(profile: Partial<StudentProfile>): DistrictInsight[] {
  const homeDistrict = profile.district?.toLowerCase() || "srinagar";

  return JK_DISTRICTS_DATA.map((dist) => {
    const isHome = dist.id.toLowerCase() === homeDistrict || dist.name.toLowerCase() === homeDistrict;
    
    const keyGrowthPrograms = [
      `Mission Youth Center (${dist.missionYouthCenters} Active Hubs)`,
      "PMSSS Domicile Facilitation Center",
      "District Employment & Counseling Centre (DE&CC)",
      "JKEDI District Incubation Cell"
    ];

    let advisory = `Students in ${dist.name} have high access to ${dist.prominentInstitutions.slice(0, 2).join(" and ")}. Explore local internships in ${dist.keyIndustries.slice(0, 2).join(", ")}.`;
    if (isHome) {
      advisory = `[HOME DISTRICT] High strategic advantage for ${profile.fullName || "Student"}! Access priority local reservation quotas, district verification centers, and regional skill centers in ${dist.name}.`;
    }

    return {
      district: dist,
      isHomeDistrict: isHome,
      opportunityIndex: dist.opportunityScore,
      highlightedIndustries: dist.keyIndustries,
      keyGrowthPrograms,
      missionYouthAdvisory: advisory,
    };
  }).sort((a, b) => (b.isHomeDistrict ? 1 : 0) - (a.isHomeDistrict ? 1 : 0) || b.opportunityIndex - a.opportunityIndex);
}
