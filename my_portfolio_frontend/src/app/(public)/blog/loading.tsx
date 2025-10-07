import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center text-white text-3xl mt-7">
      <Spinner />
      <div>Loading ----------</div>
    </div>
  );
};

export default loading;
