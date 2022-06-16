import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.searchQuery}
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                defaultValue="Сортировка по"
                value={filter.sortBy}
                onChange={selectedSort => setFilter({...filter, sortBy: selectedSort})}
                options={[
                    {value: 'title', name: 'По заголовку'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;