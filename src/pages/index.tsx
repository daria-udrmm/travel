import CarouselItems from '@/components/CarouselItems';
import Layout from '@/components/Layout/index';
import List from '@/components/List/index';
import Major from '@/components/Main/index';

export default function Home() {
  return (
    <Layout full>
      <Major />
      <div className='max-w-[1400px] mx-auto'>
        <CarouselItems />
        <div className='grid grid-cols-2 mt-14 gap-x-28'>
          <div>
            <h2 className='uppercase text-3xl font-bold mb-14'>О нас</h2>
            <p className='text-gray-700'>
              TravelEver — ваш надежный партнер в создании незабываемых путешествий по всему миру. Наша команда опытных путешественников и экспертов по туризму поможет вам воплотить в жизнь ваши мечты о путешествиях, независимо от того, ищете ли вы приключенческие туры, Роскошный отдых или познавательные экскурсии.
            </p>
            <p className='mt-5 text-gray-700'>
              Мы верим, что каждый путешественник уникален, и стремимся создавать индивидуальные маршруты, которые соответствуют вашим интересам, предпочтениям и бюджету. Наша обширная сеть партнеров по всему миру позволяет нам предлагать широкий спектр услуг, от бронирования авиабилетов и отелей до организации виз и страхования путешествий.
            </p>
          </div>
          <div><img src="./office.jpg" className='object-cover' /></div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Почему мы</p>
        <List />
      </div>
    </Layout>
  );
};