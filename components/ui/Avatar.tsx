export const Avatar = ({
  src = "https://nftstorage.link/ipfs/bafybeifbkoma4zfff5locnoxhgwpx2eehezcbctws32qsf3nsexmgtfboy",
  size = "32",
}) => (
  <img
    alt="Avatar"
    className="rounded-full"
    height={size}
    width={size}
    src={src}
    style={{
      aspectRatio: "32/32",
      objectFit: "cover",
    }}
  />
);
