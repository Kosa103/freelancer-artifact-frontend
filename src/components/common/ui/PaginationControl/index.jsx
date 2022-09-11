import React from 'react';
import * as classnames from 'classnames';
import { singleValueSelect } from '../../../../utils/selectFieldStyles/singleValueSelect';
import { PAGINATOR_OPTIONS } from '../../../../utils/constants';
import Button from '../Buttons/Button';
import SelectField from '../SelectField';
import chevronLeft from '../../../../assets/iconHtmls/chevron-left.jsx';
import chevronRight from '../../../../assets/iconHtmls/chevron-right.jsx';
import './index.scss';

const PaginationControl = props => {
  const {
    className,
    resourceCount,
    currentPage,
    setCurrentPage,
    paginateLimit,
    setPaginateLimit,
    paginateStart,
    setPaginateStart,
  } = props;

  const maxPage = Math.ceil(resourceCount / paginateLimit);

  const paginatorOptions = Object.keys(PAGINATOR_OPTIONS).map(option => ({
    label: option,
    value: PAGINATOR_OPTIONS[option],
  }));
  const currentPaginatorValue = {
    label: String(paginateLimit),
    value: paginateLimit,
  };
  
  return (
    <div
      className={classnames(
        'pagination-control',
        className && className,
      )}
    >
      <SelectField
        className="pagination-control__select-field"
        value={currentPaginatorValue}
        options={paginatorOptions}
        onChange={selection => {
          setPaginateLimit(selection.value);
          setCurrentPage(1);
          setPaginateStart(0);
        }}
        styles={singleValueSelect}
      />
      <div className="pagination-control__pagination">
        <Button
          className="pagination-control__button-stepper"
          iconHtml={chevronLeft}
          handleClick={() => {
            setCurrentPage(currentPage - 1);
            setPaginateStart(paginateStart - paginateLimit);
          }}
          disabled={currentPage <= 1}
        />
        {currentPage !== 1 && (
          <Button
            className="pagination-control__button-page"
            label={1}
            handleClick={() => {
              setCurrentPage(1);
              setPaginateStart(0);
            }}
          />
        )}
        <Button
          className="pagination-control__button-page -current"
          label={currentPage}
        />
        {currentPage !== maxPage && (
        <Button
          className="pagination-control__button-page"
          label={maxPage}
          handleClick={() => {
            setCurrentPage(maxPage);
            setPaginateStart((maxPage - 1) * paginateLimit);
          }}
        />
        )}
        <Button
          className="pagination-control__button-stepper"
          iconHtml={chevronRight}
          handleClick={() => {
            setCurrentPage(currentPage + 1);
            setPaginateStart(paginateStart + paginateLimit);
          }}
          disabled={currentPage >= maxPage}
        />
      </div>
    </div>
  );
};

export default PaginationControl ;
