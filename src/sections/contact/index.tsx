import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@/hooks/useForm";
import { Loader2, Send } from "lucide-react";
import { FormEvent, useEffect } from "react";
import Title from "@/components/complex/title";
import Image from "@/components/ui/image";
import { useAsync } from "@/hooks/useAsync";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from "@/lib/variants";

import ContactSvg from "@/assets/svg/contact.svg";
import postgres from "@/assets/svg/postgres.svg";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, isFormValid } = useForm<IFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const { isLoading, isSuccess, mutate } = useAsync();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Message sent successfully!");
    }
  }, [isSuccess]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate();
  };

  return (
    <section id="contact" className="container flex items-center">
      <MotionViewport
        className="w-[40%] hidden lg:block"
        variants={varSlide("right")}
      >
        <div className="w-full">
          <Image className="rounded w-96" src={ContactSvg} alt="" />
        </div>
      </MotionViewport>

      <MotionViewport className="w-full lg:w-1/2" variants={varSlide("left")}>
        <div className="w-full">
          <Title position="right" desc="Let's make something great together!">
            Get in touch
          </Title>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4  ">
            <Input placeholder="Name" {...register("name")} />

            <Input placeholder="Email" type="email" {...register("email")} />

            <Textarea
              placeholder="Type your message here..."
              className="col-span-2 h-[14vh]"
              {...register("message")}
            />

            <Button
              type="submit"
              className="col-span-2"
              disabled={isLoading || !isFormValid}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send It <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </MotionViewport>

      <Toaster />
    </section>
  );
};

export default Contact;
