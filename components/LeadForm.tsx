import * as Dialog from "@radix-ui/react-dialog";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const LeadForm = ({ trigger }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer" asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 grid p-0 px-2 overflow-y-auto bg-black bg-opacity-75 place-items-center">
          <Dialog.Content className="overflow-hidden bg-white rounded-lg">
            <iframe
              className="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-4rem)] w-[48rem] h-[42rem] m-0"
              src="https://meetings.hubspot.com/rae11?embed=true"
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LeadForm;
