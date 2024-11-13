import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { incrementCounter } from "@/lib/redux/slices/countSlice";

// For simplicity, we're hard-coding the GraphQL HTTP API URL here.
const GQL_API_URL = "https://spacex-production.up.railway.app/";

// These are the necessary GraphQL queries we'll need in order to retrieve data.
const QUERIES = {
  rockets: /* GraphQL */ `
    query listRockets($limit: Int, $offset: Int) {
      data: rockets(limit: $limit, offset: $offset) {
        id
        name
        description
        wikipedia
      }
    }
  `,
  dragons: /* GraphQL */ `
    query listDragons($limit: Int, $offset: Int) {
      data: dragons(limit: $limit, offset: $offset) {
        id
        name
        description
        wikipedia
      }
    }
  `,
};

export interface Spacecraft {
  id: string;
  name: string;
  description: string;
  wikipedia: string;
}

// It's often useful to type the data that the page element will carry.
export interface SpaceXElementData {
  variables: {
    limit: string;
    offset: string;
    type: "rockets" | "dragons";
  };
}

// The renderer React component.
export const SpaceX = createRenderer(({ isSuccess }) => {
  // Let's retrieve the variables that were chosen by
  // the user upon dropping the page element onto the page.
  const { getElement } = useRenderer();
  const element = getElement<SpaceXElementData>();
  const { limit, offset, type } = element.data.variables;
  console.log("🚀 ~ SpaceX ~ type => ", type);
  const dispatch = useAppDispatch();
  const { count2, loading2 } = useAppSelector((state) => state.count);

  const [data, setData] = useState<Spacecraft[]>([]);

  // This is where we fetch the data and store it into component's state.
  useEffect(() => {
    request<{ data: Spacecraft[] }>(GQL_API_URL, QUERIES[type], {
      limit: parseInt(limit),
      offset: parseInt(offset),
    }).then(({ data }) => setData(data));
  }, [limit, offset, type]);

  if (!data.length) {
    return <>Nothing to show.</>;
  }

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <ul>
      <button
        style={{
          background: "black",
        }}
        className="active:text-teal-400"
        onClick={() => dispatch(incrementCounter(1))}
      >
        Counter on Header
      </button>

      <p
        style={{
          background: "black",
          color: "white",
          padding: 5,
        }}
      >
        {loading2 ? "Loading..." : count2}
      </p>
      {data.map((item) => (
        <li key={item.id}>
          <h1>{item.name}</h1>
          <div>
            <p>{item.description}</p>
          </div>
          <br />
          <div>
            <p>
              More info at&nbsp;
              <a href={item.wikipedia} target={"_blank"} rel={"noreferrer"}>
                {item.wikipedia}
              </a>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
});
