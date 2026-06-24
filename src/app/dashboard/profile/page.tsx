import { auth } from "@/lib/auth";

export default async function ProfilePage() {
const session = await auth();
const user = session?.user;

if (!user) {
return null;
}

return ( <div className="min-h-screen bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
{/* Profile Header */} <div className="mb-8"> <h1 className="text-3xl font-bold text-slate-900">
My Profile </h1>

```
      <p className="mt-2 text-slate-600">
        View your account information and security settings.
      </p>
    </div>

    {/* Account Information Card */}
    <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#0F2747] px-6 py-4">
        <h2 className="text-lg font-semibold text-white">
          Account Information
        </h2>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Full Name
          </p>

          <p className="mt-1 text-base font-semibold text-slate-900">
            {user.name}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Email Address
          </p>

          <p className="mt-1 text-base font-semibold text-slate-900">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Role
          </p>

          <p className="mt-1 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {user.role}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Account Status
          </p>

          <p className="mt-1 inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
            Active
          </p>
        </div>
      </div>
    </div>

    {/* Security Card */}
    <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Security
        </h2>
      </div>

      <div className="p-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            Password Protection
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Your account is secured with encrypted password authentication
            using Auth.js and bcrypt hashing.
          </p>
        </div>
      </div>
    </div>

    {/* Future Features */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Upcoming Features
        </h2>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        <div className="rounded-xl border border-dashed border-slate-300 p-5">
          <h3 className="font-semibold text-slate-900">
            Edit Profile
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Update your name, contact information, and account preferences.
          </p>

          <span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
            Coming Soon
          </span>
        </div>

        <div className="rounded-xl border border-dashed border-slate-300 p-5">
          <h3 className="font-semibold text-slate-900">
            Change Password
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Enhance account security by updating your password periodically.
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
