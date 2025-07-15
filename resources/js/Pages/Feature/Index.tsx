import FeatureItem from "@/Components/FeatureItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PaginatedData } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({
  features,
}: {
  features: PaginatedData<Feature>;
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features
        </h2>
      }
    >
      <Head title="Features" />

      <div className="mb-8">
        <Link
          href={route("feature.create")}
          className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 
        border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 
        uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white 
        active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${disabled && 'opacity-25'"
        >
          Create New Feature
        </Link>
      </div>

      {features.data.map((feature) => (
        <FeatureItem feature={feature} key={feature.id} />
      ))}
    </AuthenticatedLayout>
  );
}
