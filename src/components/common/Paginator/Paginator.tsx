import s from './Paginator.module.css';

export const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage }: PaginatorType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((p, index) => {
                return (
                    <span
                        key={index}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}
                        className={currentPage === p ? s.selectedPage : ''}
                    >
                        {p}
                    </span>
                );
            })}
        </div>
    );
};

// types

export type PaginatorType = {
    pageSize: number;
    totalUsersCount: number;
    currentPage?: number;
    onPageChanged: (page: number) => void;
};
