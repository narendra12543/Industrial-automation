import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { getUserEnquiries } from "@/actions/enquiries";
import UserEnquiriesTable from "@/components/enquiries/UserEnquiriesTable";

export default async function EnquiriesPage() {
  const session = await auth();

  const user = session?.user;

  if (!session?.user?.id) {
  redirect("/login");
}

const enquiries =
  await getUserEnquiries(
    session.user.id
  );

const totalEnquiries =
  enquiries.length;

const activeLeads =
  enquiries.filter(
    (enquiry) =>
      !["WON", "LOST"].includes(
        enquiry.status
      )
  ).length;

const wonEnquiries =
  enquiries.filter(
    (enquiry) =>
      enquiry.status === "WON"
  ).length;

const lostEnquiries =
  enquiries.filter(
    (enquiry) =>
      enquiry.status === "LOST"
  ).length;



  
  return (
    <div className="min-h-screen bg-slate-50">
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            My Enquiries
          </h1>

          <p className="mt-2 text-slate-600">
            Track your product enquiries and quotation requests.
          </p>
        </div>

        {/* User Context */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Logged in as
              </p>

              <h2 className="text-lg font-semibold text-slate-900">
                {user?.name}
              </h2>

              <p className="text-sm text-slate-600">
                {user?.email}
              </p>
            </div>

            
          </div>
        </div>

        {/* Stats Cards */}

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div >
            <p className="text-lg font-semibold text-slate-900">
              Total Enquiries : {totalEnquiries}
            </p>

          </div>

        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            
            <UserEnquiriesTable
              enquiries={enquiries}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

