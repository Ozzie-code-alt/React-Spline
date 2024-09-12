import Header from '@/components/header';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='w-[70vw] text-[40px] leading-none'>Export our saas platform for the best</div>
      <div className='w-[80vw] text-[80px] leading-none text-gray-600 px-8 pt-[50px]'>
        AI services.
      </div>
      <div className='h-[40vh] w-[500px] border border-red-500'>
        {' '}
        <Spline scene='https://prod.spline.design/ZWl5U1pX2RMOWRZJ/scene.splinecode' />
      </div>
    </main>
  );
}
