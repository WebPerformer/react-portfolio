import React, { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

function Loader() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])

    return (
    <>
        {loading ?
            <div className="loader">
                <HashLoader 
                size={30}
                color={"#F4B942"}
                loading={loading}
            /></div> :
            <></>
        }
    </>
    )
}

export default Loader