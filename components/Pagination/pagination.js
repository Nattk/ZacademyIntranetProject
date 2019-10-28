import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="livretAccueil-pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => {
            return (
              <a onClick={() => paginate(pageNumber)}>
                {' '}
                <li key={pageNumber} className="livretAccueil-page-link-number">
                  {pageNumber}
                </li>
              </a>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

// CRETE COMPONENT BY CARD  AND CARRY OUT BY SEVERAL PAGES
// CONTROL NUMBER OF DATA IN THE SAME PAGE
// CONTROL NUMBER OF PAGES DEPENDING BY DATA INTO PAGINATION COMPONENT
// UNDERSTAND "hopefull"
