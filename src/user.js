import React from 'react';
const user = ["Ganesh", "Mahesh", "Suresh", "Alex"];
const UserList = ()=>{
    return <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">User List</h2>
                        <p>{user.length}</p>
                        <p>{user[0]}</p>
                        <p>{user[1]}</p>
                        <p>{user[2]}</p>
                        <p>{user[3]}</p>

                    </div>
                </div>
            </div>
}

export default UserList;