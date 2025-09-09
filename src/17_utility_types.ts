interface User{
    name:string,
    email?:string,
    id?:number
}

function getUserInfo(user: User){
    console.log(`Name: ${user.name}`);
    if(user.email) {
        console.log(`Email: ${user.email}`);
    }
    if(user.id) {
        console.log(`ID: ${user.id}`);
    }
}

let user1:User = {name:"Ronak"};
getUserInfo(user1);

//if i wish to make all properties optional, i can use Partial utility type
type UserOptional = Partial<User>;

function UdpateUserInfo1(user: User,data : UserOptional ){
    return {
        ...user,
        ...data
    }
}

UdpateUserInfo1(user1,{email:"ronak@gmail.com"})

//Required utility type makes all properties required
type UserRequired = Required<User>;

//pick utility type allows you to pick specific properties from a type
type UserPick = Pick<User, "name" | "email">;

//omit utility type allows you to omit or remove specific properties from a type
type UserOmit = Omit<User, "id">;


//Required in pick utility type makes all properties required

type UserPickRequired = Required<Pick<User, "name" | "email">>;