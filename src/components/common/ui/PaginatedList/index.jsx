import React from 'react';
import { useIntl } from 'react-intl';
import * as classnames from 'classnames';
import InputTextField from '../../../common/ui/InputTextField';
import ResourceList from '../ResourceList';
import PaginationControl from '../PaginationControl';
import { PAGINATOR_OPTIONS } from '../../../../utils/constants';
import './index.scss';

export const PaginatedList = props => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [paginateLimit, setPaginateLimit] = React.useState(PAGINATOR_OPTIONS['20']);
  const [paginateStart, setPaginateStart] = React.useState(0);

  const {
    className,
    resourceList,
    resourceCount,
    fetchResources,
    noSearch,
    debouncedFetchResources,
    ...rest
  } = props;

  const intl = useIntl();

  React.useEffect(() => {
    if (!noSearch) {
      debouncedFetchResources({
        search,
        limit: paginateLimit,
        start: paginateStart,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  React.useEffect(() => {
    const query = {
      limit: paginateLimit,
      start: paginateStart,
    };

    if (!noSearch) {
      query.search = search;
    }

    fetchResources(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginateLimit, paginateStart]);

  return (
    <div className={classnames(
      'paginated-list',
      className && className,
    )}>
      <div
        className={classnames(
          'paginated-list__toolbar',
          noSearch && '-no-search',
        )}
      >
        {!noSearch && (
          <div className="paginated-list__search-container">
            <InputTextField
              className="paginated-list__input"
              placeholder={intl.messages.common?.search}
              name="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
        <PaginationControl
          className="paginated-list__pagination-control"
          resourceCount={resourceCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginateLimit={paginateLimit}
          setPaginateLimit={setPaginateLimit}
          paginateStart={paginateStart}
          setPaginateStart={setPaginateStart}
        />
      </div>
      <ResourceList
        className="paginated-list__resource-list"
        resourceList={resourceList}
        {...rest}
      />
    </div>
  );
};
