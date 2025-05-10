import Grid from '@mui/material/Grid';
import IPMap from './IPMap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Finder.css'


const Finder = () => {

    const [myIpData, setMyIpData] = useState<any>(null);
    const [position, setPosition] = useState<any>();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        axios.get('https://ipinfo.io/json')
            .then((res: any) => {
                setPosition(res.data.loc.split(','))
                setMyIpData(res.data)
                setLoading(false)
            })
            .catch((error: any) => {
                console.error(error)
                setLoading(false)
            })

    }, [])

    return (
        <div>
            <Grid container>
                <Grid size={{ xs: 12, md: 5 }}>
                    <div className='address-data'>
                        <h3>What is my IPv4 Address?</h3>
                        <h2 className='ip-data' >{loading ? 'Fetching IP Address...' : myIpData ? myIpData?.ip : ('IP Address is not available of your Location')}</h2>
                        <h3>Appropriate Location:</h3>
                        <p className='ip-data'>
                            {
                                loading ? 'Fetching IP Address...' : (myIpData ? (
                                    <span>{myIpData?.city}, {myIpData?.region}, {myIpData?.country}</span>
                                ) : ('IP Address is not available of your Location'))
                            }
                        </p>
                        <h3>Internet Servce Provider (ISP)</h3>
                        <p className='ip-data'>{loading ? 'Fetching IP Address...' : myIpData ? myIpData?.org : ('IP Address is not available of your Location')}</p>
                    </div>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    {
                        position &&

                        <IPMap position={position} myIpData={myIpData} />
                    }

                </Grid>




            </Grid>
        </div>
    )
}

export default Finder
