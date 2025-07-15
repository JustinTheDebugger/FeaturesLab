import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Feature } from "@/types";
import ConfirmModal from "./ConfirmModal";
import { router } from "@inertiajs/react";

const FeatureActionsDropdown = ({ feature }: { feature: Feature }) => {
  const [showModal, setShowModal] = useState(false);
  const [featureToDelete, setFeatureToDelete] = useState(null);

  // when delete is clicked
  const confirmDelete = (feature: Feature) => {
    setFeatureToDelete(feature);
    setShowModal(true);
  };

  // when user confirms to delete in the modal
  const handleDelete = () => {
    // avoid deleting with an undefined or null value
    if (featureToDelete) {
      router.delete(route("feature.destroy", featureToDelete.id));
      setFeatureToDelete(null);
      setShowModal(false);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <span className="inline-flex rounded-md">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </span>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Link href={route("feature.edit", feature.id)}>
          Edit Feature
        </Dropdown.Link>
        <button
          onClick={() => confirmDelete(feature)}
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          Delete Feature
        </button>
      </Dropdown.Content>

      <ConfirmModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setFeatureToDelete(null);
        }}
        onConfirm={handleDelete}
      />
    </Dropdown>
  );
};

export default FeatureActionsDropdown;
