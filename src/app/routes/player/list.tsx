import { ContentLayout } from "@/components/layouts";
import { ListPlayers } from "@/features/players/components/list/list";

const ListPlayersRoute = () => {
  return (
    <ContentLayout title="Listagem de jogadores">
      <ListPlayers />
    </ContentLayout>
  );
};

export default ListPlayersRoute;
