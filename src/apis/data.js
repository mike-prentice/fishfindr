import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetFishData () {

const [fishData, getFishData] = useState([]);
    const url = 'https://www.fishwatch.gov/api/species';
    

    useEffect(() => {
        getAllData();
    }, []);

const getAllData = () => {
    axios.get(url)
        .then((response) => {
            const allData = response.data.fishData.allData;
            getFishData(allData);
        })
    .catch(error => console.error(`Error: ${error.message}`));
}
    

    

}