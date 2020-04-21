import React from 'react';
import * as axios from 'axios';
import { ICronaGlobStat, ICronaGlobStatResult } from './glob-stats.interface';
import "./CronaPage.scss"
class CronaPage extends React.Component<any, { cronaGlobalStats: ICronaGlobStat | any }> {
    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.state = {
            cronaGlobalStats: null,
        }
    }
    getCronaStats = async () => {
        const url = `https://thevirustracker.com/free-api?global=stats`
        try {
            const resp = await axios.default.get("https://cors-anywhere.herokuapp.com/" + url, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            })
            const data = resp.data;
            console.log(data)
            this.setState(
                { cronaGlobalStats: data }
            )
        } catch (error) {
            console.log()
        }
    }
    async componentDidMount() {
        await this.getCronaStats();
    }
    render() {
        const result: ICronaGlobStatResult = this.state.cronaGlobalStats?.results ? this.state.cronaGlobalStats?.results[0] : {};
        return (
            <div className="crona-page">
                <div className="a"><p>total cases : {result.total_cases || "loading ..."}</p></div>
                <div className="a"></div>
                <div className="a"></div>
                <div className="a"></div>
                <div className="a"></div>
                <div className="a"></div>
                <div className="a"></div>
                <div className="a"></div>
                <div className="a"></div>
                {/* <h1>total_cases : {result.total_cases || "loading ..."}</h1>
                <h1>total_deaths : {result.total_deaths || "loading ..."}</h1>
                <h1>total_active_cases : {result.total_active_cases || "loading ..."}</h1>
                <h1>total_affected_countries : {result.total_affected_countries || "loading ..."}</h1>
                <h1>total_new_cases_today : {result.total_new_cases_today || "loading ..."}</h1>
                <h1>total_new_deaths_today : {result.total_new_deaths_today || "loading ..."}</h1>
                <h1>total_recovered : {result.total_recovered || "loading ..."}</h1>
                <h1>total_serious_cases : {result.total_serious_cases || "loading ..."}</h1>
                <h1>total_unresolved : {result.total_unresolved || "loading ..."}</h1> */}
            </div >
        );
    }

}
export default CronaPage;
