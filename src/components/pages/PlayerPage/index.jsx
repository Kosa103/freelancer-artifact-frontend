import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { PATHS, PLAYER_PAGE_TABS } from '../../../utils/constants';
import PlayerPageGeneral from './PlayerPageGeneral';
import PlayerPageHistory from './PlayerPageHistory';
import PlayerPageHeatMap from './PlayerPageHeatMap';
import Button from '../../common/ui/Buttons/Button';
import Tabs from '../../common/ui/Tabs';
import './index.scss';

const PlayerPage = () => {
  const navigate = useNavigate();
  const { playerId } = useParams();
  const intl = useIntl();

  const tabsData = [
    {
      id: 1,
      label: intl.messages.pages?.player.general,
      route: `${PATHS.players}/${playerId}/${PLAYER_PAGE_TABS.GENERAL}`,
      component: <PlayerPageGeneral />,
    },
    {
      id: 2,
      label: intl.messages.pages?.player.history,
      route: `${PATHS.players}/${playerId}/${PLAYER_PAGE_TABS.HISTORY}`,
      component: <PlayerPageHistory />,
    },
    {
      id: 3,
      label: intl.messages.pages?.player.heatMap,
      route: `${PATHS.players}/${playerId}/${PLAYER_PAGE_TABS.HEAT_MAP}`,
      component: <PlayerPageHeatMap />,
    },
  ];

  return (
    <div className="player-page">
      <div className="players-page__container">
        <div className="players-page__content panel">
          <div className="player-page__toolbar">
            <Button
              className="player-page__button"
              label={intl.messages.common?.back}
              handleClick={() => navigate(PATHS.players)}
            />
          </div>
          <Tabs
            className="player-page__tabs"
            tabsData={tabsData}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
