import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const getVisiblePages = (currentPage: number) => {
    if (currentPage < 3) {
        return [1, 2, 3, 4, 5];
    }

    return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
    ];
};

export const PaginationControls = ({ pageInfo }: { pageInfo: PageInfo }) => {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || 1;
    const pathname = usePathname();
    const router = useRouter();

    let onChangePage = (newPage: number) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', String(newPage));
        router.push(pathname + '?' + newParams.toString());
    }

    const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages - 1;

    const VisiblePages = getVisiblePages(pageInfo.currentPage);
    return (
        <div className="flex gap-10 mx-10 cursor-pointer" >
            {pageInfo.currentPage > 1 && (
                <div onClick={() => onChangePage(1)} >Prev</div>
            )}
            {VisiblePages.map((page) => (
                <div
                    onClick={() => onChangePage(page)}
                    className={pageInfo.currentPage === page ? 'font-semibold' : ''}
                    key={page}
                >
                    {page}
                </div>
            ))}
            ...
            <div onClick={() => onChangePage(lastPage)}>{lastPage}</div>
            {pageInfo.currentPage < lastPage && (
                <div onClick={() => onChangePage(pageInfo.currentPage + 1)}>Next</div>
            )}
        </div>
    );
};