import React from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div>
            {pagesArray.map(p =>
                <MyButton
                    key={p}
                    onClick={() => changePage(p)}
                >{p}</MyButton>
            )}
        </div>
    );
};

export default Pagination;