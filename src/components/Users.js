import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'https://developer-lostark.game.onstove.com/characters/8un/siblings'
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>; 
  if (error) return <div>에러가 발생했습니다</div>;

	// 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!users) return null;

	// 드디어 users가 성공적으로 받아와 진 상태입니다.
  return (
		<>
	    <ul>
	      {users.map(user => (
	        <li key={user.id}>
	          {user.username} ({user.name})
	        </li>
	      ))}
	    </ul>
			// button을 클릭하면 API를 다시 불러와줍니다.
			<button onClick={ fetchUsers }>다시 불러오기</button>
		</>
  );
}

export default Users;