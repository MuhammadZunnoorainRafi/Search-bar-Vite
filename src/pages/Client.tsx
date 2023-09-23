import { useState } from 'react';
import Table from '../components/Table';
import { Users } from '../data/Users';
import { useSearchParams } from 'react-router-dom';

function Client() {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  console.log(searchParams.get('q'));
  const q = searchParams.get('q');
  const keys = ['first_name', 'last_name', 'email'];

  const UserRes = Users.filter((val) => {
    // return keys.some((key) => val[key].toLowerCase().includes(searchResult));
    return keys.some((key) =>
      val[key].toLowerCase().includes(q?.toLowerCase())
    );
  });

  return (
    <div className="text-center">
      <input
        value={q || ''}
        className="input input-bordered w-64 join-item"
        placeholder="Search"
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set('q', e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
      />
      {/* <button className="btn join-item rounded-r-full">🔍</button> */}

      <Table Users={UserRes} />
    </div>
  );
}

export default Client;
