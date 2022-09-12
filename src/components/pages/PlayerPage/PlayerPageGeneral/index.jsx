import React from 'react';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { AppContext } from '../../../../storage/context';
import { REDUCER_TYPES } from '../../../../storage/reducers/utils';
import { getPlayer } from '../../../../api/services/Players';
import { hideLoadingLayer, showLoadingLayer } from '../../../../utils/helpers';
import './index.scss';
import PlayerForm from '../../../forms/PlayerForm';

const PlayerPageGeneral = () => {
  const dispatch = React.useContext(AppContext)[1];
  const [player, setPlayer] = React.useState(null);

  const { playerId } = useParams();
  const intl = useIntl();

  const updatePlayer = async (values, { setSubmitting }) => {
    console.log("Updating player. values:");
    console.log(values);

    // TODO: Remove all fields that have falsy values. No '' and null should be saved into the DB

    setSubmitting(false);
  };

  React.useEffect(() => {
    const fetchPlayers = async () => {
      try {
        showLoadingLayer(dispatch);
        const response = await getPlayer(playerId);
        const { data, status } = response;

        if (status >= 200 && status < 300 && data) {
          const playerData = data;
    
          if (playerData) {
            setPlayer(playerData);
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

    fetchPlayers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="player-page-general">
      {player && (
        <PlayerForm
          initialValues={player}
          onSubmit={updatePlayer}
        />
      )}
    </div>
  );
};

export default PlayerPageGeneral;
