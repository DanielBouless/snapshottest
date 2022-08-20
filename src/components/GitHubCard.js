
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/200/300" />
      <Card.Body>
        <Card.Title>Daniel Bouless</Card.Title>
        <Card.Text>
          asdehfkjashdlfkjahsdlkjfhaodjfhgasd sjkodhrfgijoisdhfgpiojkhsdpfogijh yuh
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;