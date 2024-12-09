import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type User = {
    id: number,
    createdAt: string,
    name: string,
};

export default async function UsersServer() {
    const authObj = await auth();
    const userObj = await currentUser();

    console.log({
        authObj,
        userObj,
    });

    const res = await fetch("https://6753a61cf3754fcea7bc2916.mockapi.io/api/v1/usersdata");
    const users = await res.json();

    async function addUser(formData : FormData) {
        "use server"

        const name = formData.get("name");
        const res = await fetch(
            "https://6753a61cf3754fcea7bc2916.mockapi.io/api/v1/usersdata",
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({name})
            }
        );

        const newUser = await res.json();
        revalidatePath("/users-mock");
        console.log(newUser);
    }

    return (
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2"/>
                <button type="submit" className="bg-blue">Add User</button>
            </form>
            
            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map((user: User) => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        ID: {user.id} - {user.name} (Created At: {user.createdAt})
                    </div>
                ))}
            </div>
        </div>
    );
}