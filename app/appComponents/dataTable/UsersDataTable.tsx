import { prisma } from "@/prisma/prisma";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

// async function getData(): Promise<User[]> {
//   // Fetch data from your API here.
//   return data;
// }

export default async function UsersDataTable() {
  // const data = await getData();

  const users = await prisma.user.findMany();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
}
