import { redirect } from "next/navigation";

const Admin = () => {
  redirect('/admin/dashboard');
  return null;
}

export default Admin