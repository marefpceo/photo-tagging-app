import RulesModal from '../components/RulesModal';

function Home() {
  return (
    <section className='flex flex-1 flex-col items-center justify-center'>
      <RulesModal linkTo={'/menu'} isDisplaySet={true} />
    </section>
  );
}

export default Home;
