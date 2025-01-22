import { User, columns } from "./Columns";
import { data } from "./data";
import { DataTable } from "./DataTable";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return data;
}

export default async function UsersDataTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
