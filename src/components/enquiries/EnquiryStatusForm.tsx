"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { updateEnquiryStatus } from "@/actions/enquiries";

interface EnquiryStatusFormProps {
  enquiryId: string;
  currentStatus:
    | "NEW"
    | "CONTACTED"
    | "QUOTATION_SENT"
    | "NEGOTIATION"
    | "WON"
    | "LOST";
}

export default function EnquiryStatusForm({
  enquiryId,
  currentStatus,
}: EnquiryStatusFormProps) {
  const router = useRouter();

  const [status, setStatus] =
    useState(currentStatus);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const result =
        await updateEnquiryStatus({
          id: enquiryId,
          status,
        });

      if (!result.success) {
        setError(result.message);
        return;
      }

      setSuccess(
        "Status updated successfully."
      );

      router.refresh();
    } catch {
      setError(
        "Failed to update status."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-[#0F2747] px-6 py-4">
        <h2 className="text-lg font-semibold text-white">
          Status Management
        </h2>
      </div>

      <div className="space-y-5 p-6">
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700">
            {success}
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#0F2747]">
            Enquiry Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as
                  | "NEW"
                  | "CONTACTED"
                  | "QUOTATION_SENT"
                  | "NEGOTIATION"
                  | "WON"
                  | "LOST"
              )
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[#0F2747] outline-none focus:border-[#0F2747]"
          >
            <option value="NEW">
              NEW
            </option>

            <option value="CONTACTED">
              CONTACTED
            </option>

            <option value="QUOTATION_SENT">
              QUOTATION_SENT
            </option>

            <option value="NEGOTIATION">
              NEGOTIATION
            </option>

            <option value="WON">
              WON
            </option>

            <option value="LOST">
              LOST
            </option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-lg bg-[#0F2747] px-5 py-3 font-medium text-white transition hover:bg-[#18385F] disabled:opacity-60"
        >
          {loading
            ? "Updating..."
            : "Update Status"}
        </button>
      </div>
    </div>
  );
}