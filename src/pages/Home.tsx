import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero min-h-[70vh] rounded-lg bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/about" className="btn btn-primary">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
