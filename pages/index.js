export async function getServerSideProps() {
    return {
      redirect: {
        destination: '/es',
        permanent: false, 
      },
    };
  }
  
  const Home = () => {
    return null; 
  };
  
  export default Home;
  