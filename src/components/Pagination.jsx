import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const MAX_VISIBLE_PAGES = 5; // Maximum number of visible page numbers

    const getPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= MAX_VISIBLE_PAGES) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const halfMaxVisible = Math.floor(MAX_VISIBLE_PAGES / 2);
            let startPage = Math.max(currentPage - halfMaxVisible, 1);
            let endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);

            if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
                startPage = Math.max(endPage - MAX_VISIBLE_PAGES + 1, 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (startPage > 1) {
                pageNumbers.unshift(1, 'ellipsis');
            }
            if (endPage < totalPages) {
                pageNumbers.push('ellipsis', totalPages);
            }
        }

        return pageNumbers;
    };

    const renderPageNumbers = () => {
        return getPageNumbers().map((pageNumber, index) => {
            if (pageNumber === 'ellipsis') {
                return (
                    <li key={index} className="mx-2">
                        ...
                    </li>
                );
            }
            return (
                <li key={index}>
                    <a className={`flex items-center justify-center rounded py-1.5 px-3 font-medium hover:bg-primary hover:text-white ${currentPage === pageNumber ? 'bg-primary text-white' : ''}`}
                        href="#"
                        onClick={() => (currentPage !== pageNumber) && onPageChange(pageNumber)} >
                        {pageNumber}
                    </a>
                </li>
            );
        });
    };

    return (
        <div className="p-4 sm:p-6 xl:p-7.5">
            <nav>
                <ul className="flex flex-wrap items-center gap-2">
                    <li>
                        <a
                            className={`flex items-center justify-center rounded bg-[#EDEFF1] py-1.5 px-3 text-xs font-medium text-black ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'hover:bg-primary hover:text-white'
                                } dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white`}
                            href="#"
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </a>
                    </li>
                    {renderPageNumbers()}
                    <li>
                        <a
                            className={`flex items-center justify-center rounded bg-[#EDEFF1] py-1.5 px-3 text-xs font-medium text-black ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : 'hover:bg-primary hover:text-white'
                                } dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white`}
                            href="#"
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
