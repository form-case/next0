import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-4">
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;

