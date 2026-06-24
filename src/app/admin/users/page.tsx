import { auth } from "@/lib/auth";

export default async function AdminUsersPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                User Management
              </h1>

              <p className="mt-2 text-slate-600">
                Manage registered users, permissions, and account status.
              </p>
            </div>

            <button
              disabled
              className="inline-flex items-center rounded-lg bg-[#0F2747] px-5 py-3 font-medium text-white opacity-70"
            >
              Create User

              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Admin Information Card */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[#0F2747] px-6 py-4">
            <h2 className="text-lg font-semibold text-white">
              Administrator Information
            </h2>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Name
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Email
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Role
              </p>

              <span className="mt-1 inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-10 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
              <span className="text-3xl text-slate-400">
                👥
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              No Users Available
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              User management functionality will be available in
              a future module.
            </p>

            <div className="mt-6">
              <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Future Users Table */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Users List
              </h2>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Created Date
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-slate-500"
                  >
                    User management table will be available in a
                    future module.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Future Features */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                User Administration Features
              </h2>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-3">
            <div className="rounded-xl border border-dashed border-slate-300 p-5">
              <h3 className="font-semibold text-slate-900">
                Disable User
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Temporarily disable user access to the platform.
              </p>

              <span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>

            <div className="rounded-xl border border-dashed border-slate-300 p-5">
              <h3 className="font-semibold text-slate-900">
                Activate User
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Restore access for previously disabled users.
              </p>

              <span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>

            <div className="rounded-xl border border-dashed border-slate-300 p-5">
              <h3 className="font-semibold text-slate-900">
                Promote USER to ADMIN
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Grant administrative privileges to authorized users.
              </p>

              <span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}