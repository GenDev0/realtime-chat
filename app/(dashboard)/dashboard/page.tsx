import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

// import { useSession } from "next-auth/react";

type Props = {};

const Dashboard = async (props: Props) => {
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);
  return <pre>{JSON.stringify(session)}</pre>;
};

export default Dashboard;
