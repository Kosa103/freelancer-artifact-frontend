import React from 'react';
import _ from 'lodash';
import { AppContext } from '../../../storage/context';
import { getSystems } from '../../../api/services/Systems';
import { getRegions } from '../../../api/services/Regions';
import { REDUCER_TYPES } from '../../../storage/reducers/utils';
import { hideLoadingLayer, showLoadingLayer } from '../../../utils/helpers';

const Helper = () => {
  const [{ token = '', helpers = {}, intl }, dispatch] = React.useContext(AppContext);

  const fetchSystems = React.useCallback(async () => {
    try {
      showLoadingLayer(dispatch);
      const systemsData = await getSystems();
      const { data, status } = systemsData;

      hideLoadingLayer(dispatch);

      if (status >= 200 && status < 300 && data) {
        return data;
      }
    } catch (err) {
      hideLoadingLayer(dispatch);
      if (err.response?.data?.messageKey) {
        dispatch({
          type: REDUCER_TYPES.SET_ERROR_MODAL,
          errorModal: { message: intl.messages.apiErrors[err.response.data.messageKey]},
        })
      }
      console.error(err);
      return null;
    }
  }, [dispatch, intl]);

  const fetchRegions = React.useCallback(async () => {
    try {
      showLoadingLayer(dispatch);
      const regionsData = await getRegions();
      const { data, status } = regionsData;

      hideLoadingLayer(dispatch);

      if (status >= 200 && status < 300 && data) {
        return data;
      }
    } catch (err) {
      hideLoadingLayer(dispatch);
      if (err.response?.data?.messageKey) {
        dispatch({
          type: REDUCER_TYPES.SET_ERROR_MODAL,
          errorModal: { message: intl.messages.apiErrors[err.response.data.messageKey]},
        })
      }
      console.error(err);
      return null;
    }
  }, [dispatch, intl]);

  const fetchHelpers = React.useCallback(async () => {
    if (token) {
      try {
        const updatedHelpers = _.cloneDeep(helpers);

        const systemsData = await fetchSystems();
        if (!systemsData) {
          return;
        }

        const regionsData = await fetchRegions();
        if (!regionsData) {
          return;
        }

        updatedHelpers.systems = systemsData;
        updatedHelpers.regions = regionsData;
        
        if (!_.isEqual(helpers, updatedHelpers)) {
          dispatch({
            type: REDUCER_TYPES.SET_HELPERS,
            helpers: updatedHelpers,
          });
        }

      } catch (error) {
        console.error(error);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, dispatch]);

  React.useEffect(() => {
    fetchHelpers();
  }, [fetchHelpers]);

  return null;
};

export default Helper;
