import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name?: string;
  email: string;
  mobile: string;
  message: string;
};

const Index = () => {
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5e1db0ec-496b-4db2-bd57-6ef11cc7b16c",
          subject: "New Inquiry - Triveda Technologies",
          from_name: "Triveda Technologies Website",
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg rounded-lg border bg-card p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold text-center">
          Contact Triveda Technologies
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            <Input
              placeholder="Full Name"
              {...form.register("name")}
            />

            <Input
              type="email"
              placeholder="Email Address"
              required
              {...form.register("email", { required: true })}
            />

            <Input
              type="tel"
              placeholder="Mobile Number"
              required
              {...form.register("mobile", { required: true })}
            />

            <Textarea
              placeholder="Your Message"
              required
              {...form.register("message", { required: true })}
            />

            <Button type="submit" className="w-full">
              Send Message
            </Button>

          </form>
        </Form>
      </div>
    </div>
  );
};

export default Index;
