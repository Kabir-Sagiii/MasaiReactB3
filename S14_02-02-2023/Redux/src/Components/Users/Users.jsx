import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Users(props) {
  const [users, setUsers] = useState([]);

  const [searchParam, setSearchParam] = useSearchParams();

  let initialPage = searchParam.get("page");

  const [page, setPage] = useState(
    Number(initialPage) == 0 ? 1 : Number(initialPage)
  );
  console.log(initialPage, typeof initialPage);

  useEffect(() => {
    getUsers();
  }, [page]);

  useEffect(() => {
    setSearchParam({
      page,
      //   name: "Kabir",
      //   sort: "asc",
    });
  }, [page]);

  const getUsers = async () => {
    var res = await fetch(`https://reqres.in/api/users?page=${page}`);
    var data = await res.json();
    // console.log(data);
    setUsers(data.data); //1 to 6 //7 to 12 //1 to 6
  };

  const handlePage = (value) => {
    // -1
    let pageNumber = page + value; // 2 + - 1 //2-1
    if (pageNumber >= 1 && pageNumber <= 2) {
      setPage(pageNumber);
    }
  };

  return (
    <div>
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a
        exercitationem quibusdam sit quasi, eaque deleniti dolores nobis quod
        consectetur velit, ullam dolorem doloremque sint fuga est natus suscipit
        maiores accusantium quidem! Odio voluptates placeat atque quasi ipsam
        nam saepe quas, provident dolorum optio voluptas, itaque ut deserunt
        eos, fuga ea accusantium voluptatem officia dignissimos pariatur quaerat
        voluptatum? Officia deserunt quas maxime eius temporibus? Voluptates
        cupiditate nesciunt voluptatibus magnam quis non reprehenderit cumque
        minima dignissimos, rerum aut recusandae exercitationem. Saepe placeat
        nostrum provident distinctio quos magnam vel nobis tempora voluptas
        repellat sunt rem modi, earum, laborum harum, quod quo tempore.
      </p>

      {users.length > 0 && (
        <div>
          <table
            style={{
              width: "80%",
              margin: "30px auto",
              boxShadow: "0 0 10px black",
              padding: "20px",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <img src={user.avatar} width="70" height={70} />
                    </td>
                    <td>
                      {user.first_name}
                      {user.last_name}
                    </td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div style={{ margin: "20px 0px 50px" }}>
        <button
          onClick={() => {
            handlePage(-1);
          }}
        >
          Prev
        </button>
        &nbsp;&nbsp;
        <button>{page}</button>&nbsp;&nbsp;
        <button
          onClick={() => {
            handlePage(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
