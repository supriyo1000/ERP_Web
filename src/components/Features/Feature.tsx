import { useParams } from 'react-router-dom';

export default function Feature() {
  const params = useParams<{ featureID: string }>()
  return (
    <main className='min-h-screen'>
      <h1 className='text-text'>Profile Page {params.featureID}</h1>
    </main>
  );
}