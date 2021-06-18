import React, { useState } from 'react'
import axios from 'axios'
import styles from './Post.module.scss'

import Spinner from '../../components/Spinner/Spinner'

const Post = () => {
    const [loading, setLoading] = useState(false)
    const [response, setRespone] = useState('')

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');
    const [organization, setOrganization] = useState('');
    const [value, setValue] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        setLoading(true)
        const form = {
            "orgMSP":"Org1MSP",
            "userId":"varmaa",
            "channelName":"mychannel",
            "chaincodeName":"basic",
            "data":{
                "function":"CreateAsset",
                "id": id,
                "name": name,
                "period": period,
                "organization": organization,
                "value": value
                }
        }
        console.log(form)
        axios.post('http://3.91.156.182:4000/tx', form)
        .then(response => {
            setLoading(false);
            setRespone('Posted Successfully!')
            console.log(response)
        })
        .catch(error => {
            setLoading(false);
            setRespone('Error! please try again')
            console.log(error.response)
        })
    };


    return (
        <div className={styles.Post} >
            <form onSubmit={submitHandler}>
                <h1>Post</h1>
                <div className={styles.input__box}>
                    <label htmlFor="id">ID: </label>
                    <input type="text"
                        value={id}
                        onChange={event => {
                            setId(event.target.value)
                        }} />
                </div>
                <div className={styles.input__box}>
                    <label htmlFor="name">name: </label>
                    <input type="text" value={name}
                        onChange={event => {
                            setName(event.target.value)
                        }} />
                </div>
                <div className={styles.input__box}>
                    <label htmlFor="period">period: </label>
                    <input type="text" value={period}
                        onChange={event => {
                            setPeriod(event.target.value)
                        }} />
                </div >
                <div className={styles.input__box}>
                    <label htmlFor="organization">organization: </label>
                    <input type="text" value={organization}
                        onChange={event => {
                            setOrganization(event.target.value)
                        }} />
                </div>
                <div className={styles.input__box}>
                    <label htmlFor="value">value: </label>
                    <input type="text" value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }} />
                </div>
                {loading? <Spinner /> : <button type="submit">Submit</button>}
                <p>{ response }</p>
            </form>
        </div>
    )
}

export default Post
