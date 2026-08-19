import { graphql } from "@octokit/graphql";
import { RequestParameters } from "@octokit/graphql/dist-types/types";

const github = graphql.defaults({
  headers: {
    Authorization: `Bearer ${import.meta.env.GITHUB_PAT}`,
  },
});

export const PARAMS = {
  repo: "alvechy.github.io",
  owner: "alvechy",
  query: 'repo:"alvechy/alvechy.github.io" label:_published',
  shortsCollectionId: 33,
};

export async function request<Q, V extends RequestParameters>(
  query: string,
  variables: V
) {
  return await github<Q>(query, variables);
}
