import { useEffect, useState } from 'react';
import axios from 'axios';

interface Ipost {
  id: string;
  title: string;
  body: string;
}

function Pagination() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPosts = async (pageParam: number) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`
      );

      setPosts(response.data);
    };

    getPosts(page);
  }, [page]);

  console.log(posts.length);

  return (
    <div>
      <h1 className="font-bold text-2xl my-3">Pagination</h1>
      <div className="max-w-3xl mx-auto mb-3 ">
        {posts.map((val: Ipost) => {
          return (
            <div className="rounded-lg shadow-xl p-3" key={val.id}>
              <p>ID : {val.id}</p>
              <p>Title : {val.title}</p>
              <p>Description : {val.body}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between my-2 items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-sm btn-primary disabled:btn-disabled"
        >
          Prev
        </button>
        <button
          disabled={page === 10}
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-sm btn-primary disabled:btn-disabled"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
