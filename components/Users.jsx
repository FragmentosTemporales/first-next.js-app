'use client'
import {useRouter} from 'next/navigation'
function Users({users}){
    
    const router = useRouter()

    return(
<ul>
        {users.map((user) => (
          <li 
          onClick={()=>{
            router.push(`/users/${user.id}`)
          }}
          key={user.id}>
            <div>
              <h5>{user.id} {user.first_name} {user.last_name}</h5>
              <p>{user.email}</p>
              <img src={user.avatar}></img>
            </div>
            </li>
            ))}
      </ul>
)
}

export default Users;