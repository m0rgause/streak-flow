import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-3 py-2 rounded-md flex items-center gap-x-2 text-sm">
      <CheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
