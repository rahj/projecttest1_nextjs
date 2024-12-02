export default async function ProductID({params} : { params : {id:string}}) {
    const {id} = await params;

    return (
        <h1>inside product id: {id} </h1>
    );
}