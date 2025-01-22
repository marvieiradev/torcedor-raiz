import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useState } from "react";

const Alert = ({ children, action, message }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AlertDialog.Root onOpenChange={(state) => setIsOpen(state)}>
            <AlertDialog.Trigger asChild>
                {children}
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay
                    className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"
                        } transition-all duration-200 ease-in-out flex fixed inset-0 justify-center items-center p-4 w-full h-full bg-opacity-10 drop-shadow-lg backdrop-blur-xl bg-black z-[99]`}>
                    <AlertDialog.Content
                        className={`${isOpen
                            ? "visible opacity-100 scale-100"
                            : "invisible opacity-0 scale-0"
                            } p-4 w-full md:w-[500px]  md:text-base text-sm text-black bg-white rounded-xl transition-all ease-in-out duration-200`}>
                        <AlertDialog.Title className="mb-2 font-medium justify-center text-center text-lg">
                            {message}
                        </AlertDialog.Title>
                        <AlertDialog.Description />
                        <div className="flex gap-4 justify-center items-center py-3">
                            <AlertDialog.Action asChild>
                                <button className="px-5 py-2 bg-black/60 rounded-xl text-string" onClick={action}>
                                    Sim
                                </button>
                            </AlertDialog.Action>
                            <AlertDialog.Cancel asChild>
                                <button className="px-5 py-2 bg-black rounded-xl text-string">
                                    Não
                                </button>
                            </AlertDialog.Cancel>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Overlay>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
}

export default Alert;