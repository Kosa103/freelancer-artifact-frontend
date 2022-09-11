import React from 'react';
import { useIntl } from 'react-intl';
import { AppContext } from '../../../storage/context';
import { REDUCER_TYPES } from '../../../storage/reducers/utils';
import { debounce, showLoadingLayer, hideLoadingLayer } from '../../../utils/helpers';
import { PaginatedList } from '../../common/ui/PaginatedList';
import { getPlayers } from '../../../api/services/Players';
import './index.scss';

const PlayersPage = () => {
  const dispatch = React.useContext(AppContext)[1];
  const [playersList, setPlayersList] = React.useState([]);
  const [playerCount, setPlayerCount] = React.useState(0);

  const intl = useIntl();

  const fetchPlayers = async (query) => {
    const {
      search='',
      limit=20,
      start=0,
    } = query;

    try {
      showLoadingLayer(dispatch);
      const response = await getPlayers({ search, limit, start });
      const { data, status } = response;

      if (status >= 200 && status < 300 && data) {
        const players = data.data;
        const count = data.count;

        if (players && (!!count || count === 0)) {
          setPlayersList(players);
          setPlayerCount(count);
        }
      }
    } catch (error) {
      dispatch({
        type: REDUCER_TYPES.SET_ERROR_MODAL,
        errorModal: { message: intl.messages.apiErrors?.[error.response?.data?.messageKey || 'messageDefault']},
      });
      console.error(error);
    } finally {
      hideLoadingLayer(dispatch);
    }
  };

  const debouncedFetchPlayers = React.useMemo(() => {
    return debounce((query) => fetchPlayers(query))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="players-page">
      <div className="players-page__container">
        <div className="players-page__content panel">
          <PaginatedList
            className="players-page__paginated-list"
            resourceList={playersList.map(player => ({
              id: player.id,
              name: player.name,
              level: player.level,
              updatedAtDate: player.updatedAtDate,
            }))}
            resourceCount={playerCount}
            fetchResources={fetchPlayers}
            debouncedFetchResources={debouncedFetchPlayers}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayersPage;
