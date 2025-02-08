import { ContentLayout } from "@/components/layouts";
import { ListPlayers } from "@/features/players/components/list";

const ListPlayersRoute = () => {
  return (
    <ContentLayout title="">
      <ListPlayers />
    </ContentLayout>
  );
};

export default ListPlayersRoute;
