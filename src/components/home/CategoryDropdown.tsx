/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const CategoryDropdown = ({ category }: { category: any }) => {
    return (
        <div className="dropdown dropdown-hover mx-auto my-3 ">
            <div tabIndex={0} role="button bg-indigo-300" className="btn m-1">{category.name}</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

export default CategoryDropdown;