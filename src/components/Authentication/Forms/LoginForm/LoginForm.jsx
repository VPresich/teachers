import { useDispatch } from "react-redux";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { logIn } from "../../../../redux/auth/operations";
import Button from "../../../UI/Button/Button";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./LoginForm.module.css";
import Input from "../../../UI/Input/Input";

export default function LoginForm({ onClick }) {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (values) => {
    console.log("SUBMIT", values);
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log(values);
        reset();
        onClick();
      })
      .catch(() => {});
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
          <div className={css.titleContainer}>
            <h3 className={css.title}>Log In</h3>
            <p className={css.text}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </p>
          </div>
          <div className={css.inputsWrapper}>
            <Controller
              name="email"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Email" type="text" />
              )}
            />
            <Controller
              name="password"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Password" type="password" />
              )}
            />
          </div>
          <Button type="submit">Log in</Button>
        </div>
      </form>
    </FormProvider>
  );
}
