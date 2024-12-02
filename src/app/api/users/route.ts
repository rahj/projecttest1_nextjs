export const users = [
    {
        id: 1,
        firstname: "Reynaldo",
        lastname: "Hipolito",
        city: "Cebu"
    },
    {
        id: 2,
        firstname: "Mar",
        lastname: "Pep",
        city: "Cebu"
    }
];

export async function GET() {
    return Response.json(users);
}

export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        firstname: user.firstname,
        lastname: user.lastname,
        city: user.city,
    };
    users.push(newUser);

    return (new Response(
        JSON.stringify(newUser),
        {
            headers: {"Content-Type" : "application/json"},
            status: 201
        }
    ));
}