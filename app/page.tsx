import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";
import EmptyLottie from "@/components/EmptyLottie";
import EmptyBoxLottie from "@/components/EmptyBoxLottie";
import BuildNewCompanion from "@/components/BuildNewCompanion";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  console.log(companions);

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center">
            <EmptyLottie />
            <BuildNewCompanion />
          </div>
        ) : (
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        )}
      </section>

      <section className="home-section">
        {recentSessionsCompanions?.length === 0 ? (
          <EmptyBoxLottie />
        ) : (
          <CompanionsList
            title="Recently completed sessions"
            companions={recentSessionsCompanions}
            classNames="w-2/3 max-lg:w-full"
          />
        )}
        <Cta />
      </section>
    </main>
  );
};

export default Page;
