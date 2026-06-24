import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
const session = await auth();
const user = session?.user;

if (!user) {
return null;
}

return ( <div className="min-h-screen bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
{/* Welcome Section */} <div className="mb-8"> <h1 className="text-3xl font-bold text-slate-900">
Welcome back, {user.name} </h1>

```
      <p className="mt-2 text-slate-600">
        Manage your enquiries, downloads, and account information from your dashboard.
      </p>
    </div>

    {/* User Information Card */}
    <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#0F2747] px-6 py-4">
        <h2 className="text-lg font-semibold text-white">
          Account Information
        </h2>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-3">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Name
          </p>

          <p className="mt-1 text-base font-semibold text-slate-900">
            {user.name}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Email
          </p>

          <p className="mt-1 text-base font-semibold text-slate-900">
            {user.email}
          </p>
        </div>

        
      </div>
    </div>

    {/* Quick Actions */}
    <div>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Quick Actions
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/dashboard/profile"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            My Profile
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            View and manage your account details.
          </p>
        </Link>

        <Link
          href="/dashboard/enquiries"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            My Enquiries
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Track product enquiries and quotation requests.
          </p>
        </Link>

        <Link
          href="/dashboard/downloads"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            My Downloads
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Access brochure and datasheet download history.
          </p>
        </Link>
      </div>
    </div>
  </div>
</div>


);
}
