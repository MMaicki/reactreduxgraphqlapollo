import React from 'react'
import { Query } from 'react-apollo'

const Launches = (props) => {

    const handleLaunches = (value) => {
        return value.map((item, i) => {
            return (
                <div key={item.flight_number}>
                    {item.mission_name}
                </div>
            )
        })
    }

    return (
        <div>
            <Query query={props.gqlQuery}>
                {
                    ({ loading, error, data }) => {
                        if (loading){
                            return <h4>Loading...</h4>
                        }
                        if(error) {
                            return console.log(error)
                        }
                        if(data) {
                            return handleLaunches(data.launches)
                        }
                        return <h4>TEST</h4>
                    }
                }
            </Query>
        </div>
    )
}

export default Launches
