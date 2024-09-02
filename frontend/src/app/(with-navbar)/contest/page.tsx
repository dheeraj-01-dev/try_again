"use server";
import { fetchUpcomingBattles } from "@/api/battle/battles";
import { apiType } from "@/api/types/apiTypes";
import Completed from "@/components/contest/Completed";
import ContestHeader from "@/components/contest/ContestHeader";
import Upcoming from "@/components/contest/Upcoming";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookieStore = cookies();

  const u_n_state = cookieStore.get("u_n_state")?.value;
  const json :apiType = await fetchUpcomingBattles(u_n_state);
  
  return (
    <div>
      <ContestHeader
        upcomingBattle={Upcoming({upcomingBattle: json.data})}
        completedBattle={Completed()}
      />
    </div>
  );
};

export default page;
