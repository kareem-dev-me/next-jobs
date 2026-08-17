import type { Metadata } from "next";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { Tag } from "@/components/ui/Tag";
import { companyProfile } from "@/data/dashboardCompany";

export const metadata: Metadata = {
  title: "Company Profile",
};

export default function CompanyProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold text-navy">Company Profile</h1>
      <section className="border border-line p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <FigmaAsset
            src={companyProfile.logo}
            alt=""
            width={64}
            height={64}
            className="size-16"
          />
          <div>
            <h2 className="text-2xl font-semibold text-navy">{companyProfile.name}</h2>
            <p className="text-base text-primary">{companyProfile.website}</p>
          </div>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-subtle">Founded</dt>
            <dd className="mt-1 font-semibold text-navy">{companyProfile.founded}</dd>
          </div>
          <div>
            <dt className="text-subtle">Employees</dt>
            <dd className="mt-1 font-semibold text-navy">{companyProfile.employees}</dd>
          </div>
          <div>
            <dt className="text-subtle">Location</dt>
            <dd className="mt-1 font-semibold text-navy">{companyProfile.location}</dd>
          </div>
          <div>
            <dt className="text-subtle">Industry</dt>
            <dd className="mt-1 font-semibold text-navy">{companyProfile.industry}</dd>
          </div>
        </dl>
      </section>
      <section className="border border-line p-6">
        <h2 className="text-xl font-semibold text-navy">About</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
          {companyProfile.about}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {companyProfile.tech.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </section>
      <section className="border border-line p-6">
        <h2 className="text-xl font-semibold text-navy">Team</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyProfile.team.map((member) => (
            <li key={member.name} className="flex items-center gap-3 border border-line p-4">
              <FigmaAsset
                src={member.logo}
                alt=""
                width={40}
                height={40}
                className="size-10"
              />
              <span>
                <span className="block font-semibold text-navy">{member.name}</span>
                <span className="text-sm text-muted">{member.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
