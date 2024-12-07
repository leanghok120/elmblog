import { Form } from "@remix-run/react";
import { LogOut } from "lucide-react";
import { destroyUserSession } from "~/utils/sessions";

export async function action({ request }) {
  await destroyUserSession(request);
}

function Logout() {
  return (
    <Form method="post">
      <button className="btn btn-ghost text-red-500 absolute top-5 right-5">
        <LogOut size={20} />
      </button>
    </Form>
  );
}

export default Logout;
