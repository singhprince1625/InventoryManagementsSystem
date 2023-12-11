import React from 'react'
import {Container, Button} from "reactstrap"

function Home() {
  return (
    <div>
        <Container >
           <h1>Inventry Management System</h1>
           <p>
             This developed by Prince Kumar.
           </p>
           <Container>
            <Button color='primary'> Start Managing Inventry With Us</Button>
           </Container>
        </Container>
    </div>
  )
}

export default Home