import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export default function Show() {
  const { data, setData, processing, errors, post } = useForm({
    name: "",
    description: "",
  });

  const createFeature: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("feature.store"), {
      preserveScroll: true,
    });
  };

  const handleCancel = () => {
    // Reset form fields to empty strings
    setData("name", "");
    setData("description", "");
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Create New Feature
        </h2>
      }
    >
      <Head title="Create New Feature" />

      <div className="mb-4 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
          <form onSubmit={createFeature} className="w-full">
            <div className="mb-8">
              <InputLabel htmlFor="name" value="Name" />

              <TextInput
                id="name"
                className="mt-1 block w-full"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
                isFocused
                autoComplete="name"
              />

              <InputError className="mt-2" message={errors.name} />
            </div>
            <div className="mb-8">
              <InputLabel htmlFor="description" value="Description" />

              <TextAreaInput
                id="description"
                rows={6}
                className="mt-1 block w-full"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
              />

              <InputError className="mt-2" message={errors.description} />
            </div>

            <div className="flex flex-col w-full items-strectch gap-2 sm:flex-row-reverse sm:items-center sm:gap-4">
              <PrimaryButton disabled={processing}>Save</PrimaryButton>
              <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
