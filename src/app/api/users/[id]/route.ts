import { users } from "../route";

//get resource
export async function GET(request: Request, {params} : {params: {id:string}}) {
    const {id} = await params;
    const user = users.find( (user) => user.id === parseInt(id));

    return Response.json(user);
}

//delete resource 
export async function DELETE(request: Request, {params} : {params: {id:string}}) {
    const {id} = await params;
    const user = users.find( (user) => user.id === parseInt(id));

    users.filter( (val) => val.id !== parseInt(id) );

    return Response.json(
        users.filter( (val) => val.id !== parseInt(id) )
    );
}