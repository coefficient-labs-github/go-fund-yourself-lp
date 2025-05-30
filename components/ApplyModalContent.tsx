import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
import React, { ReactElement, useEffect, useRef } from "react";

interface ApplyModalContentProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // Children prop is removed as trigger is now external
}

const ApplyModalContent: React.FC<ApplyModalContentProps> = ({
  open,
  onOpenChange,
}): ReactElement | null => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  // formCreatedRef is no longer needed if we try to create every time.

  console.log("ApplyModalContent: Rendered. Open state:", open);

  const createHubSpotForm = () => {
    console.log("ApplyModalContent: createHubSpotForm called.");

    if (window.hbspt && window.hbspt.forms && formContainerRef.current) {
      console.log(
        "ApplyModalContent: HubSpot API and formContainerRef.current ARE available."
      );

      // IMPORTANT: Clear the container before creating a new form
      formContainerRef.current.innerHTML = "";
      console.log("ApplyModalContent: Cleared formContainerRef.innerHTML.");

      let formContainerId = formContainerRef.current.id;
      if (!formContainerId) {
        formContainerId =
          "hubspot-form-container-" + Math.random().toString(36).substring(7);
        formContainerRef.current.id = formContainerId;
        console.log(
          "ApplyModalContent: Assigned ID to form container:",
          formContainerId
        );
      }

      window.hbspt.forms.create({
        region: "na1",
        portalId: "47163555",
        formId: "b06ae652-46b4-4d4f-b697-feb33dded6d6",
        target: `#${formContainerId}`,
        onFormReady: () => {
          console.log(
            "ApplyModalContent: HubSpot onFormReady callback triggered."
          );
        },
        onFormSubmitted: () => {
          console.log(
            "ApplyModalContent: HubSpot onFormSubmitted callback triggered."
          );
          // onOpenChange(false); // Optionally close modal on submit
        },
      });
      console.log("ApplyModalContent: window.hbspt.forms.create CALLED.");
    } else {
      console.warn(
        "ApplyModalContent: HubSpot API or formContainerRef.current NOT available when trying to create form."
      );
    }
  };

  // This useEffect is just for a one-time mount log now.
  useEffect(() => {
    console.log(
      "ApplyModalContent: Component Mounted (useEffect with [] deps)."
    );
  }, []);

  useEffect(() => {
    console.log(
      "ApplyModalContent: useEffect for 'open' prop. Current value:",
      open
    );
    if (open) {
      // Attempt to create form when modal is opened
      // Using a short timeout to allow Radix DOM to settle.
      const timer = setTimeout(() => {
        if (formContainerRef.current) {
          console.log(
            "ApplyModalContent: Modal is open and formContainerRef IS available. Calling createHubSpotForm."
          );
          createHubSpotForm();
        } else {
          console.error(
            "ApplyModalContent: formContainerRef is NULL even after delay when modal opened. Cannot create form."
          );
        }
      }, 100); // Increased delay slightly to 100ms
      return () => clearTimeout(timer);
    } else {
      console.log(
        "ApplyModalContent: Modal is closed. Form will be recreated on next open if container was cleared."
      );
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {/* Dialog.Trigger is removed from here, will be in Apply.tsx */}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-typeBlack/50 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-primary p-6 shadow-xl focus:outline-none z-50 flex flex-col">
          <Dialog.Title className="mb-2 font-grobold text-heading text-typeBlack">
            Apply to Pitch
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-copy text-typeBlack/80">
            Fill out the form below to apply to pitch on Go Fund Yourself!
          </Dialog.Description>
          <div
            ref={formContainerRef}
            className="flex-grow min-h-0 pb-4 pr-1 overflow-y-auto scrollbar"
          >
            {/* HubSpot form will be recreated here each time modal opens */}
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute inline-flex items-center justify-center w-8 h-8 transition-colors rounded-full appearance-none top-3 right-3 text-typeBlack/70 hover:bg-typeBlack/10 focus:outline-none focus:ring-2 focus:ring-accentRed/50"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.5 6.68688L4.03157 3.2184C3.80702 2.99385 3.44295 2.99385 3.2184 3.2184C2.99385 3.44295 2.99385 3.80702 3.2184 4.03157L6.68688 7.5L3.2184 10.9685C2.99385 11.193 2.99385 11.5571 3.2184 11.7816C3.44295 12.0062 3.80702 12.0062 4.03157 11.7816L7.5 8.31312L10.9685 11.7816C11.193 12.0062 11.5571 12.0062 11.7816 11.7816C12.0062 11.5571 12.0062 11.193 11.7816 10.9685L8.31312 7.5L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Add this to your global CSS or a relevant CSS file for the animations
// @keyframes overlayShow {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// @keyframes contentShow {
//   from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
//   to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
// }

// Make sure to install @radix-ui/react-icons if you haven't: npm install @radix-ui/react-icons
// You might need to declare hbspt on the window object if TypeScript complains:
declare global {
  interface Window {
    hbspt: any;
  }
}

export default ApplyModalContent;
