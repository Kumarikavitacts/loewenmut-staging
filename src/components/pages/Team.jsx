"use client";

import React, { useEffect, useState } from "react";

import InnerBnanner from "@/components/InnerBanner";
import TeamList from "@/components/TeamList";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";

import { getTeamPageHeading, getTeamMembers } from "@/Apis/teamPage/api";

const Team = () => {
  const [pageData, setPageData] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [heading, teamMembers] = await Promise.all([
          getTeamPageHeading(),
          getTeamMembers(),
        ]);

        setPageData(heading);

        // Sort by sortOrder ascending — the API doesn't guarantee
        // return order, so this must happen client-side regardless.
        const sortedMembers = [...(teamMembers || [])].sort(
          (a, b) => (a?.sortOrder ?? 0) - (b?.sortOrder ?? 0)
        );

        setMembers(sortedMembers);
      } catch (err) {
        console.error("Team page error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const banner = pageData?.Bannerbereich;

  return (
    <main>
      <section className="inner_hero_section">
        {loading ? (
          <InnerBannerSkeleton />
        ) : (
          <InnerBnanner
            title={banner?.Kurztitel || ""}
            heading={banner?.Titel || ""}
            description={banner?.Text || ""}
          />
        )}
      </section>

      <section className="team_section pt_pb_3">
        <div className="container">
          <TeamList teamData={members} loading={loading} />
        </div>
      </section>
    </main>
  );
};

export default Team;