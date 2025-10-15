// Import the Card component from the React-Bootstrap library
import Card from 'react-bootstrap/Card';

// Define a functional component named Movieitem that receives props
const Movieitem = (props) => {
    return (
        <div>
            {/* Bootstrap Card to display individual movie info */}
            <Card className="text-center"> 
                <Card.Body>
                    {/* Display the movie title */}
                    <Card.Title>{props.MyMovie.Title}</Card.Title>

                    {/* Display the movie poster image */}
                    <img 
                        src={props.MyMovie.Poster} 
                        alt={`${props.MyMovie.Title} Poster`} // Accessibility improvement
                        style={{ width: "10%", borderRadius: "10px", marginTop: "10px" }} 
                    />
                </Card.Body>

                {/* Display the movie release year in the card footer */}
                <Card.Footer className="text-muted">{props.MyMovie.Year}</Card.Footer>
            </Card>
        </div>
    );
}

export default Movieitem;
