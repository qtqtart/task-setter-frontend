import { TextField, TextFieldProps } from "@mui/material";
import { memo } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & TextFieldProps;

const RHFTextFieldInner = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { t } = useTranslation();
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={t(error?.message ?? "")}
          value={field.value}
          {...props}
        />
      )}
    />
  );
};

export const RHFTextField = memo(RHFTextFieldInner) as <T extends FieldValues>(
  props: Props<T>,
) => JSX.Element;
