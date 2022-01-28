import { Pagination } from "@mui/material";
import React, { useMemo } from "react";
import { useRouter } from "next/router";

type PagerProps = {
  totalCount: number;
  pageIndex: number;
};

function Pager({ pageIndex, totalCount }: PagerProps): JSX.Element {
  const lastPageIndex = useMemo(() => Math.ceil(totalCount / 10), [totalCount]);
  const router = useRouter();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    if (pageIndex !== page) {
      router.push(`/blog/page/${page}`);
    }
  };

  return (
    <Pagination
      count={lastPageIndex}
      color="secondary"
      onChange={handlePageChange}
      page={pageIndex}
    />
  );
}

export default Pager;
