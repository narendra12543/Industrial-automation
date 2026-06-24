import {
  CheckCircle2,
} from "lucide-react";

export default function TrustBanner() {
  return (
    <div
      className="
        mt-12
        rounded-2xl
        bg-[#0F2747]
        p-6
        text-white
      "
    >
      <div className="grid gap-4 md:grid-cols-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} />
          Quality Assured
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} />
          Technical Support
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} />
          Fast Response
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} />
          Industrial Expertise
        </div>
      </div>
    </div>
  );
}