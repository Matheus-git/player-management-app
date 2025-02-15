import { ContentLayout } from "@/components/layouts";
import { PlayersList } from "@/features/players/list/PlayersList";

const ListPlayersRoute = () => {
  return (
    <ContentLayout title="Listagem de jogadores">
      <PlayersList />
    </ContentLayout>
  );
};

export default ListPlayersRoute;
