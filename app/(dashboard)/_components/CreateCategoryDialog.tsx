import { TransactionType } from "@/lib/types";
import { Category } from "@prisma/client";
import React, { ReactNode } from "react";

interface CreateCategoryDialogProps {
  type: TransactionType;
  successCallback: (category: Category) => void;
  trigger?: ReactNode;
}

const CreateCategoryDialog = ({
  type,
  successCallback,
  trigger,
}: CreateCategoryDialogProps) => {
  return <div>CreateCategoryDialog</div>;
};

export default CreateCategoryDialog;
