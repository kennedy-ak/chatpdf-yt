import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 relative'>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center'>
            <h1 className='mr-3 text-5x1 font-semibold'>Chat with Any PDF</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
