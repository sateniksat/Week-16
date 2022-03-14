import React from 'react';
import {Card , Button} from 'react-bootstrap';

export default function AppCard({title,img,isExpired,description}) {
  return (
    
    <Card style={{ width: '18rem' }} className="mt-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">{isExpired ? "this post expired":"this post is not expired"}</Button>
        </Card.Body>
    </Card>

    
  )
}
