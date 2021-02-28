import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {TextField, Button, Typography, Grid, Container} from "@material-ui/core";
import ParkingLotCard from "./ParkingLotCard.js";

const ParkingDataContainer = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const fixString = (searchStr) => {
        if (searchStr.includes(" ")) {
            return searchStr.replace(" ", "%20")
        } else {
            return searchStr;
        }
    }

    const handleChange = (evt) => {
        setSearch(evt.target.value);
    }
    
    const handleSubmit = () => {
        
       const updatedLocation = fixString(search)

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
            headers: {
                'Authorization': 'Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx'
            },

            params: {
                location: updatedLocation,
                categories: 'parking',
                sort_by: 'rating'
            }
        })
            .then((res) => {
                setResults(res.data.businesses)
                console.log(res.data.businesses)
            })
            .catch((err) => console.error(err))
    }

    return (
        <>
            <Container maxWidth={false}>
                <Grid container={true} direction="column">
                    <Grid item={true}>
                        <Typography variant="h3">Search for Parking Lots</Typography>
                        <TextField label="Enter a location" value={search} onChange={handleChange} />
                        <Button onClick={handleSubmit}>Search</Button>
                    </Grid>
                    <Grid item={true}>
                        {results ? results.map((lot) => {
                            return <ParkingLotCard key={lot.id} data={lot} />
                        }) : ""}
                    </Grid>
                </Grid>
            </Container>
            
        </>
    )
}

export default ParkingDataContainer;