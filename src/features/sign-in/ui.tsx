import {
  SignInInput,
  useSignInMutation,
} from "@shared/graphql/types-and-hooks";
import { LoadingButton } from "@shared/ui/loading-button";
import { RHFForm, RHFTextField } from "@shared/ui/rhf";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { Alert, InputAdornment, Stack, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { defaultValues } from "./lib";
import { SignInSchema } from "./schema";

export const SignInForm: FC = () => {
  const { t } = useTranslation();

  const [signIn, { loading, error }] = useSignInMutation();

  const form = useForm<SignInInput>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = useCallback(
    async (input: SignInInput) => {
      const result = await signIn({
        variables: { input },
      });

      if (result.data?.signIn) form.reset(defaultValues);

      console.log(result.data);
    },
    [form, signIn],
  );

  const [isVisible, SetIsVisible] = useState(false);

  const useToggleVisible = useCallback(() => {
    SetIsVisible((isVisible) => !isVisible);
  }, []);

  return (
    <RHFForm<SignInInput> form={form} onSubmit={form.handleSubmit(onSubmit)}>
      <Stack
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RHFTextField<SignInInput>
          name="login"
          label="login"
          type="text"
          placeholder="jonhdoe"
          sx={{
            mb: "16px",
          }}
        />

        <RHFTextField<SignInInput>
          name="password"
          label="password"
          type={isVisible ? "text" : "password"}
          placeholder={isVisible ? "123456" : "******"}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  {isVisible ? (
                    <VisibilityIcon onClick={useToggleVisible} />
                  ) : (
                    <VisibilityOffIcon onClick={useToggleVisible} />
                  )}
                </InputAdornment>
              ),
            },
          }}
          sx={{
            mb: error ? "16px" : "32px",
          }}
        />

        {error && (
          <Alert
            severity="error"
            sx={{
              width: "100%",
              marginBottom: "32px",
            }}
          >
            <Typography variant="body2">{error.message}</Typography>
          </Alert>
        )}

        <LoadingButton
          fullWidth
          loading={loading}
          variant="contained"
          color="primary"
          type="submit"
        >
          {t("sign-in")}
        </LoadingButton>
      </Stack>
    </RHFForm>
  );
};
