import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Fetch.module.scss'

import Spinner from '../../components/Spinner/Spinner'

const Fetch = () => {
    const [loading, setLoading] = useState(false)
    const [tableRows, setTableRows] = useState([])
    const [searchResult, setSearchResult] = useState([])

    const data = {
        "orgMSP": "Org1MSP",
        "userId": "varma",
        "channelName": "mychannel",
        "chaincodeName": "basic",
        "data": {
            "function": "GetAllAssets"
        }
    }

    useEffect(() => {
        setLoading(true)
        axios.post('http://3.91.156.182:4000/query', data)
        .then(response => {
            setTableRows(response.data)
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
        })
    }, []);

    const searchData = (e) => {
        const result = tableRows.filter(row => {
            return row.name.toLowerCase() === e.target.value
        })
        setSearchResult(result)
    }

    let finalResult;

    if (searchResult.length === 0) {
        finalResult = tableRows.map(row => {
            return (
                <tr key={row.ID}>
                    <td>{row.ID}</td>
                    <td>{row.name}</td>
                    <td>{row.period}</td>
                    <td>{row.organization}</td>
                    <td>{row.value}</td>
                </tr>
            )
        })
    } else {
        finalResult = searchResult.map(row => {
            return (
                <tr key={row.ID}>
                    <td>{row.ID}</td>
                    <td>{row.name}</td>
                    <td>{row.period}</td>
                    <td>{row.organization}</td>
                    <td>{row.value}</td>
                </tr>
            )
        })
    }



    return (
        <div className={styles.Fetch}>
            <div className={styles.search}>
                <label htmlFor="search">Search: </label>
                <input type="text" name="" id="search" onChange={searchData} />
            </div>

            {loading? <Spinner /> : <table>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>period</th>
                    <th>organization</th>
                    <th>value</th>
                </tr>
                {finalResult}
            </table>}
        </div>
    )
}

export default Fetch
