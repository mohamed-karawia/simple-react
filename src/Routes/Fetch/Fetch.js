import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Fetch.module.scss'

const Fetch = () => {
    const [tableRows, setTableRows] = useState([
        {
            "ID": "1",
            "name": "2",
            "period": "2",
            "organization": "2",
            "value": "2"
        },
        {
            "ID": "980",
            "name": "Bruce",
            "period": "10",
            "organization": "Org2",
            "value": "Full"
        },
        {
            "ID": "9801",
            "name": "Bruce",
            "period": "10",
            "organization": "Org2",
            "value": "Full"
        },
        {
            "ID": "9802",
            "name": "Bruce",
            "period": "10",
            "organization": "Org2",
            "value": "Full"
        },
        {
            "ID": "s1@gmail.com",
            "name": "John",
            "period": "5",
            "organization": "Org1",
            "value": "Only Prevention"
        },
        {
            "ID": "s2@gmail.com",
            "name": "PVK",
            "period": "10",
            "organization": "Org2",
            "value": "Only Behavioral"
        },
        {
            "ID": "s3@gmail.com",
            "name": "KP",
            "period": "10",
            "organization": "Org2",
            "value": "Only Behavioral"
        },
        {
            "ID": "s4@gmail.com",
            "name": "Prasanth",
            "period": "15",
            "organization": "Org1",
            "value": "Only Clinical"
        },
        {
            "ID": "s5@gmail.com",
            "name": "Varma",
            "period": "15",
            "organization": "Org2",
            "value": "Complete"
        },
        {
            "ID": "s@gmail.com",
            "name": "Bruce",
            "period": "5",
            "organization": "Org1",
            "value": "Only Clinical"
        }
    ])

    const [searchResult, setSearchResult] = useState([])

    const data = {
        "orgMSP": "Org1MSP",
        "userId": "varmaa",
        "channelName": "mychannel",
        "chaincodeName": "basic",
        "data": {
            "function": "GetAllAssets"
        }
    }

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

    useEffect(() => {
        axios.post('http://3.91.156.182:4000/query', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    });

    return (
        <div className={styles.Fetch}>
            <div className={styles.search}>
                <label htmlFor="search">Search: </label>
                <input type="text" name="" id="search" onChange={searchData} />
            </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>period</th>
                    <th>organization</th>
                    <th>value</th>
                </tr>
                {finalResult}
            </table>
        </div>
    )
}

export default Fetch
