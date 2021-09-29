import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from '@material-ui/icons/Search';

export default function SearchInput(props) {
    const [keywords, setKeywords] = useState("");

    function handleChange(e) {
        setKeywords(e.target.value);
        props.filterBySearch(e.target.value);
    }

    return (
        <div className={styles.SearchInput}>
            <SearchIcon className={styles.searchIcon} />
            <input type="text" name="search-field" value={keywords} onChange={handleChange}></input>
        </div>
    );
  }