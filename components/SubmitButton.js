import { Button } from './ui/button';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {children}
    </Button>
  );
}
