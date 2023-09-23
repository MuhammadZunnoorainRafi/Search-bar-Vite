interface props {
  Users: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
  }[];
}

function Table({ Users }: props) {
  return (
    <div className="overflow-x-auto my-2">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((val) => {
            return (
              <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
