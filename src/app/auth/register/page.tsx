import CustomSlider from "@/components/CustomSlider";
import LoginForm from "@/components/Forms/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm";

export default function Login() {
  return (
    <div className="flex md:flex-row bg-primary-orange flex-col min-h-[820px]">
      <div className="flex-1 md:w-1/2 w-full">
        <CustomSlider />
      </div>
      <div className="flex-1 md:w-1/2 w-full p-5 border bg-white rounded-s-[80px]">
        <RegisterForm />
      </div>
    </div>
  );
}



