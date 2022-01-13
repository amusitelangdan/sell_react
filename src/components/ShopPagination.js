import React, { useEffect, useState } from "react"
import { Pagination } from "react-bootstrap"

const ShopPagination = (props) => {
  const {
    onPrev = () => {},
    onNext = () => {},
    onPage = () => {},
    page = 1,
    size = 20,
    total = 20,
  } = props;
  const [ _page, setPage ] = useState([]);

  useEffect(() => {
    if (total > 0 && size > 0) {
      const aPage = Math.ceil(total / size);
      const bPage = [];
      for (let i = 0; i < aPage; i++) {
        bPage.push(i+1);
      }
      setPage(bPage);
    }
  }, [total, size])

  return (
    <nav
      className="d-flex justify-content-center mb-5 mt-3"
      aria-label="page navigation"
    >
      <Pagination>
        <Pagination.Prev onClick={() => onPrev(page - 1)}>Prev</Pagination.Prev>
        {
          _page.map((item) => {
            if (item === page) {
              return <Pagination.Item onClick={() => onPage(item)} key={item} active>{item}</Pagination.Item>
            } else {
              return <Pagination.Item onClick={() => onPage(item)} key={item}>{item}</Pagination.Item>
            }
          })
        }
        <Pagination.Next onClick={() => onNext(page + 1)}>Next</Pagination.Next>
      </Pagination>
    </nav>
  )
}

export default ShopPagination
