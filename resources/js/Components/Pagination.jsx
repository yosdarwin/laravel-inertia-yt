import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ todos }) => {
    console.log(todos);
    const links = todos.links;
    const currentPage = todos.current_page;
    const lastpage = todos.last_page;
    console.log(currentPage);
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <Link
                                href={link.url}
                                className={`flex items-center justify-center px-4 h-10 leading-tight  ${
                                    link.active
                                        ? "bg-slate-500 text-gray-900 border-slate-500"
                                        : "bg-slate-900 text-gray-500 border-slate-900"
                                } border  hover:bg-slate-700 hover:text-gray-900 ${
                                    i == 0 && "rounded-s-md"
                                } ${i == links.length - 1 && "rounded-e-md"} ${
                                    link.current
                                } ${i == 0 && currentPage == 1 && "hidden"} ${
                                    currentPage == lastpage &&
                                    i == links.length - 1 &&
                                    "hidden"
                                } `}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
