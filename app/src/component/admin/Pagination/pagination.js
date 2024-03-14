import React from "react";
import { Pagination } from "react-bootstrap";

const Allpagination = (props) => {
  const {
    listCount,
    setPostPerPage,
    postPerPage,
    setCurrentPage,
    currentPage,
  } = props;

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= Math.ceil(listCount / postPerPage); number++) {
    if (
      number === currentPage ||
      Math.abs(number - currentPage) === 1 ||
      Math.abs(number - currentPage) === 2
    ) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }
  return (
    <>
      <div>
        <Pagination>
          <Pagination.First onClick={() => setCurrentPage(1)} />
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          />
          {currentPage > 3 && (
            <Pagination.Ellipsis
              onClick={() => setCurrentPage(currentPage - 2)}
            />
          )}
          {items?.map((item, index) => {
            return item;
          })}
          {currentPage < Math.ceil(listCount / postPerPage) - 2 && (
            <Pagination.Ellipsis
              onClick={() => setCurrentPage(currentPage + 2)}
            />
          )}
          <Pagination.Next
            disabled={currentPage === Math.ceil(listCount / postPerPage)}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          />
          <Pagination.Last
            onClick={() => setCurrentPage(Math.ceil(listCount / postPerPage))}
          />
        </Pagination>
      </div>
    </>
  );
};

export default Allpagination;
