import { AIRSTACK_API_KEY, AIRSTACK_API_URL } from "../consts";

export const getChannelMembers = async (channelId: string) => {
  const query = `
        query MyQuery($channelId: String!) {
          FarcasterChannelParticipants(
            input: {filter: {channelId: {_eq: $channelId}}, blockchain: ALL}
          ) {
            FarcasterChannelParticipant {
              id
              participantId
              participant {
                profileHandle
              }
            }
          }
        }`;
  const variables = {
    channelId,
  };
  const res = await fetch(AIRSTACK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${AIRSTACK_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  return data;
};
