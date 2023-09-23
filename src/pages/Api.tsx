import { Link, Outlet } from 'react-router-dom';
function Api() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-grow-0 flex-col space-y-1 p-2">
        <Link className="btn btn-ghost btn-sm w-full" to="name">
          Name
        </Link>
        <Link className="btn btn-ghost btn-sm w-full" to="email">
          Email
        </Link>
        <Link className="btn btn-ghost btn-sm w-full" to="phone">
          Phone
        </Link>
      </div>
      <div className=" flex-grow max-w-xs">
        <Outlet />
      </div>
    </div>
  );
}

export default Api;
