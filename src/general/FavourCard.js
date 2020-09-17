import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowRight);

class FavourCard extends React.Component {

  render() {
    return <Card className="favour-card">
    <Card.Img variant="top" className="card-img" style={{backgroundImage: `url(${this.props.imgurl})` }}/>
    {/* style={{backgroundImage: `url(${this.props.imgurl})` }} */}
    <Card.Body>
      <Card.Title> {this.props.title} </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="secondary">20km</Button>
      <Button variant="info">View Favour <FontAwesomeIcon icon="arrow-right" /></Button>
    </Card.Body>
  </Card>;
  }
}

export default FavourCard;
