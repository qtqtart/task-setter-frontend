import { StackProps } from "@mui/material";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import { memo } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";

type Props<T extends FieldValues> = PropsWithChildren<StackProps> & {
  form: UseFormReturn<T>;
  onSubmit?: () => void;
};

const RHFFormInner = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  ...props
}: Props<T>) => {
  return (
    <FormProvider<T> {...form}>
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
        }}
      >
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "center",
          }}
          {...props}
        >
          {children}
        </Stack>
      </form>
    </FormProvider>
  );
};

export const RHFForm = memo(RHFFormInner) as <T extends FieldValues>(
  props: Props<T>,
) => JSX.Element;
