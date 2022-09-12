import React from 'react';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { AppContext } from '../../../../storage/context';
import { REDUCER_TYPES } from '../../../../storage/reducers/utils';
import { hideLoadingLayer, showLoadingLayer } from '../../../../utils/helpers';
import { getLocations } from '../../../../api/services/Locations';
import { PaginatedList } from '../../../common/ui/PaginatedList';
import './index.scss';

const PlayerPageHistory = () => {
  const [{ helpers }, dispatch] = React.useContext(AppContext);
  const [locationsList, setLocationsList] = React.useState([]);
  const [locationCount, setLocationCount] = React.useState(0);

  const { playerId } = useParams();
  const intl = useIntl();

  const { systems } = helpers;

  const fetchLocations = async (query) => {
    const {
      limit=20,
      start=0,
    } = query;

    try {
      showLoadingLayer(dispatch);
      const response = await getLocations(playerId, { limit, start });
      const { data, status } = response;

      if (status >= 200 && status < 300 && data) {
        const locations = data.data;
        const count = data.count;

        if (locations && (!!count || count === 0)) {
          setLocationsList(locations);
          setLocationCount(count);
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

  return (
    <div className="player-page-history">
      <PaginatedList
        className="player-page-history__paginated-list"
        resourceList={locationsList.map(location => ({
          id: location.id,
          system: systems.find(system => system.id === location.systemId)?.name || location.systemId,
          date: location.date,
          time: location.time,
        }))}
        resourceCount={locationCount}
        fetchResources={fetchLocations}
        noSearch={true}
        debouncedFetchResources={fetchLocations}
      />
    </div>
  );
};

export default PlayerPageHistory;
