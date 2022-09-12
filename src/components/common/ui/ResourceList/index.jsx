import React from 'react';
import { useIntl } from 'react-intl';
import * as classnames from 'classnames';
import './index.scss';

const ResourceList = props => {
  const {
    className,
    resourceList,
    rowNavigateTo,
  } = props;

  const intl = useIntl();

  return (
    <>
      {resourceList?.[0] ? (
        <div
          className={classnames(
            'resource-list',
            className && className,
          )}
        >
          <div className="resource-list__row -header">
            {Object.keys(resourceList?.[0]).map((key, i) => (
              <div
                key={i}
                className="resource-list__cell -header"
                style={{ width: `${100 / Object.keys(resourceList[0]).length}%` }}
              >
                {key}
              </div>
            ))}
          </div>
          {resourceList.map((resource, i) => (
            <div
              key={i}
              className={classnames(
                'resource-list__row',
                !rowNavigateTo && '-no-navigate',
              )}
              onClick={() => rowNavigateTo ? rowNavigateTo(resource.id) : null}
            >
              {Object.keys(resource).map((key, i) => (
                <div
                  key={i}
                  className="resource-list__cell"
                  style={{ width: `${100 / Object.keys(resource).length}%` }}
                >
                  {resource[key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h3>{intl.messages.common?.noResult}</h3>
      )}
    </>
  );
};

export default ResourceList;
