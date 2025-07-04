"use client";

import Lottie from "lottie-react";
import emptyBox from "@/constants/emptyBox.json";
import { cn } from "@/lib/utils";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EmptyBoxLottie = () => {
  return (
    <div className="w-full flex justify-center flex-col gap-6 items-center">
      <article className={cn("companion-list w-full")}>
        <h2 className="font-bold text-3xl">Recent Sessions</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-2/3">Lessons</TableHead>
              <TableHead className="text-lg">Subject</TableHead>
              <TableHead className="text-lg text-right">Duration</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </article>

      <Lottie
        animationData={emptyBox}
        loop
        autoPlay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};
export default EmptyBoxLottie;
