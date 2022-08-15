import React from "react";
import Review from "./review";

export default class ReviewList extends React.Component {
    constructor(props) { /*pass props into superprops and make review props reusable */
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }
    render() {
        return ( /*returns the Review component and shows list of user reviews in its currrent state */
            <div className="container">                 
                <div>
                <Review reviews={this.state.reviews} />
                </div>                 
            </div>
        )
    }
}
/*This review list includes the Review component */