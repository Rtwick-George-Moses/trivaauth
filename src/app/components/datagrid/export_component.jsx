import clientPromise from "../mongodb";
import Datagrid from "./grid_layout";

export default async function Gridcomponent() {
  try {
    const client = await clientPromise;
    const database = client.db("version1");
    const table = database.collection("userTable");
    const response = await table.find({}).toArray(function (err, result) {
      if (err) throw err;
      return result;
    });
    console.log(response);
    return <Datagrid data={response} />;
  } finally {
    //   await client.close();
  }
}
