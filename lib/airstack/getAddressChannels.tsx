import { Address } from "viem";
import { AIRSTACK_API_KEY, AIRSTACK_API_URL } from "../consts";

export const getAddressChannels = async (profile: Address) => {
  const query = `query MyQuery($profile: Identity!) {
          FarcasterChannelParticipants(
            input: {filter: {participant: {_eq: $profile}, channelActions: {_eq: cast}}, blockchain: ALL, limit: 50}
          ) {
            FarcasterChannelParticipant {
              channelId
              channelName
            }
          }
        }`;
  const variables = {
    profile,
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
