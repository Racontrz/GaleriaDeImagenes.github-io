import Button from 'react-bootstrap/Button';

function Btn({titulo}) {
  return (
    <div class="text-center">
      <Button variant="secondary" >{titulo}</Button>
    </div>
  );
}

export default Btn;