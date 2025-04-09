import React from "react";
import Dropdown from "./Dropdown";
import { Feature } from "@/types";

const FeatureActionsDropdown = ({ feature }: { feature: Feature }) => {
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
        <Dropdown.Link
          href={route("feature.destroy", feature.id)}
          method="delete"
          as="button"
        >
          Delete Feature
        </Dropdown.Link>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default FeatureActionsDropdown;
