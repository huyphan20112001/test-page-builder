"use client";

import { ApolloProvider, gql, useQuery } from "@apollo/client";
// import { Page } from "../../lib/app-page-builder-elements/src";
import Test from "@/components/Test";
import { Page } from "@webiny/app-page-builder-elements";

const GET_PUBLISHED_PAGE = gql`
  query PbGetPublishedPage($path: String, $preview: Boolean) @ps(cache: true) {
    pageBuilder {
      getPublishedPage(path: $path, preview: $preview) {
        data {
          content
        }
        error {
          code
          message
          data
        }
      }
    }
  }
`;

const Demo = () => {
  const getPublishedPageQuery = useQuery(GET_PUBLISHED_PAGE, {
    variables: {
      path: "/welcome-to-webiny",
      preview: true,
    },
  });

  const page = getPublishedPageQuery.data?.pageBuilder?.getPublishedPage?.data;
  console.log("🚀 ~ Demo ~ page => ", page);

  if (!page) {
    return <p style={{ color: "black" }}>Loading...</p>;
  }

  return (
    <>
      <Page page={page} />
      <Test />
    </>
  );
};

export default Demo;
