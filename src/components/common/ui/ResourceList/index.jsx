import React from 'react';
import * as classnames from 'classnames';
import './index.scss';

const ResourceList = props => {
  const {
    className,
    resourceList,
  } = props;

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
              className="resource-list__row"
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
        null
      )}
    </>
  );
};

export default ResourceList;
